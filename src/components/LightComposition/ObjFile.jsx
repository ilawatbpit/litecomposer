// src/components/ObjFile.jsx
// AXIS CONVENTION (DO NOT CHANGE)
// X = width, Y = height, Z = length

import React, {
  useEffect,
  useRef,
  forwardRef,
  useImperativeHandle,
} from "react";

import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
// import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OBJExporter } from "three/examples/jsm/exporters/OBJExporter";
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment";

import { useWorkingModel } from "../../context/WorkingModelContext";

  const colorsHex = [
  { name: "red", hex: "#B91C1C" },
  { name: "green", hex: "#15803D" },
  { name: "blue", hex: "#2563EB" },
  { name: "yellow", hex: "#CA8A04" },
  { name: "cyan", hex: "#0891B2" },
  { name: "magenta", hex: "#9D174D" },
  { name: "black", hex: "#111827" },
  { name: "white", hex: "#F9FAFB" },
  { name: "gray", hex: "#6B7280" },
  { name: "clear", hex: "#F9FAFB" }
];



/* =====================================================
   DIMENSION LINE HELPER
   ===================================================== */
function createDimensionLine(start, end, labelText) {
  const group = new THREE.Group();

  // Line
  const geometry = new THREE.BufferGeometry().setFromPoints([start, end]);
  const material = new THREE.LineBasicMaterial({ color: 0x000000 });
  const line = new THREE.Line(geometry, material);
  group.add(line);

  // Label
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  canvas.width = 256;
  canvas.height = 64;

  ctx.fillStyle = "#000";
  ctx.font = "24px Arial";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(labelText, 128, 32);

  const texture = new THREE.CanvasTexture(canvas);
  const sprite = new THREE.Sprite(
    new THREE.SpriteMaterial({ map: texture, depthTest: false })
  );

  sprite.position.copy(start.clone().add(end).multiplyScalar(0.5));
  sprite.scale.set(100, 25, 1);
  sprite.userData.isDimensionLabel = true;

  group.add(sprite);
  group.userData.isDimensionLine = true;

  return group;
}

/* =====================================================
   COMPONENT
   ===================================================== */
const ObjFile = forwardRef(({ config, onStringHeightsUpdate, showDimention}, ref) => {
  const containerRef = useRef(null);
  const sceneRef = useRef(new THREE.Scene());
  const modelRef = useRef(null);
  const rendererRef = useRef(null);
  const cameraRef = useRef(null);

  const dimensionLines = useRef([]);
  const dimenttionHelperRef = useRef(null);
  const axesHelperRef = useRef(null);

  const { workingModel} = useWorkingModel();
  const surfaceShape = workingModel.surfaceShape; //shape of baseplate

  function getHexColor(){ // to convert color to hex
   return colorsHex.find(color => color.name == workingModel.color).hex || "#F9FAFB";
}

const configRef = useRef(config);

useEffect(() => {
  configRef.current = config;
}, [config]);

useEffect(() => {
  if (axesHelperRef.current) axesHelperRef.current.visible = showDimention;

  // also re-generate scene so dimension lines disappear/appear
  if (modelRef.current) updateSceneWithConfig();
}, [showDimention]);

  /* =====================================================
     EXPOSE EXPORT FUNCTION
     ===================================================== */
  useImperativeHandle(ref, () => ({
    exportOBJ,
  }));
function exportOBJ() {
  const exporter = new OBJExporter();
  const exportGroup = new THREE.Group();

  sceneRef.current.traverse((obj) => {
    if (obj.userData?.isPendant || obj.userData?.isString || obj.userData?.isSurface) {
      exportGroup.add(obj.clone(true));
    }
  });

  exportGroup.updateMatrixWorld(true);

  // ✅ Unit fix: if your target app imports 100x too big, scale down 100x
  const EXPORT_SCALE = 0.01;  // try 0.01 first
  exportGroup.scale.setScalar(EXPORT_SCALE);
  exportGroup.updateMatrixWorld(true);

  const objData = exporter.parse(exportGroup);
  const blob = new Blob([objData], { type: "text/plain" });

  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "lighting-configurator.obj";
  link.click();
}


  /* =====================================================
     INIT THREE.JS
     ===================================================== */
  useEffect(() => {

    const container = containerRef.current;
    const scene = sceneRef.current;
    scene.background = new THREE.Color(0xfafafa);

    const camera = new THREE.PerspectiveCamera(
      75,
      container.clientWidth / container.clientHeight,
      0.1,
      2000
    );
    camera.position.set(0, 100, 300);
    cameraRef.current = camera;

    // Helpers
    // axis helpers the (x, y, z lines)
    // const axes = new THREE.AxesHelper(300);
    // axes.userData.isAxisHelper = true;
    // axes.material.transparent = true;
    // axes.material.opacity = 0.1;
    // scene.add(axes);
    // axesHelperRef.current = axes;


    const belowGrid = new THREE.GridHelper(1000, 50);
    belowGrid.material.color.set(0x000000)
    belowGrid.material.opacity = 0.05;
    belowGrid.material.transparent = true;
    scene.add(belowGrid);




    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      preserveDrawingBuffer: true,
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    rendererRef.current = renderer;
    container.appendChild(renderer.domElement);

    // =======================
// ENVIRONMENT / HDRI (makes GLB materials bright + realistic)
// Keep white background, but use env for lighting/reflections
// =======================
const pmrem = new THREE.PMREMGenerator(renderer);
pmrem.compileEquirectangularShader();

// ✅ Option A (recommended): Use a real HDR file (place it in /public/env/studio.hdr)
const hdrPath = import.meta.env.BASE_URL + "env/studio.hdr";

new RGBELoader().load(
  hdrPath,
  (hdrTex) => {
    hdrTex.mapping = THREE.EquirectangularReflectionMapping;

    const envMap = pmrem.fromEquirectangular(hdrTex).texture;
    scene.environment = envMap;

    // keep background white (do NOT set scene.background = hdrTex)
    hdrTex.dispose();
    pmrem.dispose();
  },
  undefined,
  () => {
    // ✅ Option B (fallback): No HDR file needed (still brightens a lot)
    const env = new RoomEnvironment();
    const envMap = pmrem.fromScene(env).texture;
    scene.environment = envMap;
    pmrem.dispose();
  }
);


    scene.add(new THREE.AmbientLight(0xffffff, 0.4));
    const dir = new THREE.DirectionalLight(0xffffff, 1);
    dir.position.set(10, 10, 10);
    scene.add(dir);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.target.set(0, 100, 0);

    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    

const basePath = import.meta.env.BASE_URL + "models/";
const gltfLoader = new GLTFLoader();

gltfLoader.load(
`${basePath}${workingModel.model}${workingModel.color}.glb`,
  // basePath + workingModel.modelName + ".glb",
  (gltf) => {

    // ✅ brighten GLB materials (common issue: looks dark without env)
    gltf.scene.traverse((child) => {
      if (child.isMesh && child.material) {
        // works for MeshStandardMaterial / MeshPhysicalMaterial
        child.material.envMapIntensity = 1.6; // try 1.2 to 2.5
        child.material.needsUpdate = true;
      }
    });

    modelRef.current = gltf.scene;
    updateSceneWithConfig();
  },
  undefined,
  (err) => console.error("GLB load error:", err)
);



    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      container.removeChild(renderer.domElement);
    };
  }, []);

  useEffect(() => {
    if (modelRef.current) updateSceneWithConfig();
  }, [config]);

  /* =====================================================
     MAIN SCENE GENERATOR (PATTERN LOGIC UNCHANGED)
     ===================================================== */

  function generateSunflowerPoints(count, radius) {
  const pts = [];
  const goldenAngle = Math.PI * (3 - Math.sqrt(5)); // ~2.399963...

  for (let i = 0; i < count; i++) {
    // 0..1 area-uniform radius
    const t = (i + 0.5) / count;
    const r = Math.sqrt(t) * radius;

    const theta = i * goldenAngle;

    const x = r * Math.cos(theta);
    const z = r * Math.sin(theta);

    const distNorm = r / radius;            // 0..1
    const angle01 = (theta % (Math.PI * 2)) / (Math.PI * 2); // 0..1

    pts.push({ x, z, distNorm, angle01 });
  }

  return pts;
}


  const updateSceneWithConfig = () => {
    const scene = sceneRef.current;
    const baseModel = modelRef.current;

    // SAFE CLEANUP
    scene.children
      .filter(
        (obj) =>
          obj.userData?.isPendant ||
          obj.userData?.isString ||
          obj.userData?.isSurface ||
          obj.userData?.isDimensionLine ||
          obj.userData?.isDimensionLabel
      )
      .forEach((obj) => scene.remove(obj));

    dimensionLines.current = [];

    const {
      rows,
      cols,
      spacingL,
      spacingW,
      pattern,
      surfaceHeight,
      lowest,
      highest,
      baseOffset,
      surfaceLength: inputSurfaceLength,
      surfaceWidth: inputSurfaceWidth,
    } = config;

const rowsN = Math.max(1, parseInt(rows, 10) || 1);
const colsN = Math.max(1, parseInt(cols, 10) || 1);
    const minY = Math.min(Number(lowest), Number(highest));
    const maxY = Math.max(Number(lowest), Number(highest));

    let surfaceLength = inputSurfaceLength;
    let surfaceWidth = inputSurfaceWidth;

if (surfaceWidth === 0 && surfaceLength === 0) {
  surfaceLength = (rowsN - 1) * spacingL + Number(baseOffset || 0); // Z = ROWS
  surfaceWidth  = (colsN - 1) * spacingW + Number(baseOffset || 0); // X = COLS
}


// to get the circle radius
let circleRadius = 0;

if (surfaceShape === "circle") {
  const diameterBasis =
    surfaceWidth && surfaceLength
      ? Math.min(surfaceWidth, surfaceLength)
      : (surfaceWidth || surfaceLength);

  circleRadius = Math.max(1, Number(diameterBasis) / 2);
}


// DIMENSIONS — EDGE ALIGNED (RECT) / DIAMETER (CIRCLE)

if (surfaceShape === "circle" && showDimention) {
  const diameter = circleRadius * 2;

  const diaLine = createDimensionLine(
    new THREE.Vector3(-circleRadius, surfaceHeight + 5, 0),
    new THREE.Vector3(circleRadius, surfaceHeight + 5, 0),
    `${diameter} cm`
  );
  scene.add(diaLine);
  dimensionLines.current.push(diaLine);

} 
if (surfaceShape !== "circle" && showDimention) {
  const widthLine = createDimensionLine(
    new THREE.Vector3(-surfaceWidth / 2, surfaceHeight + 5, surfaceLength / 2),
    new THREE.Vector3(surfaceWidth / 2, surfaceHeight + 5, surfaceLength / 2),
    `${surfaceWidth} cm`
  );
  scene.add(widthLine);
  dimensionLines.current.push(widthLine);

  const lengthLine = createDimensionLine(
    new THREE.Vector3(surfaceWidth / 2, surfaceHeight + 5, -surfaceLength / 2),
    new THREE.Vector3(surfaceWidth / 2, surfaceHeight + 5, surfaceLength / 2),
    `${surfaceLength} cm`
  );
  scene.add(lengthLine);
  dimensionLines.current.push(lengthLine);
}


// GRID SIZE
const gridWidth  = (colsN - 1) * spacingW; // X
const gridLength = (rowsN - 1) * spacingL; // Z

// CENTER GRID INSIDE SURFACE (RECT) / INSIDE CIRCLE BOUNDING SQUARE
const effectiveSurfaceWidth  = (surfaceShape === "circle") ? (circleRadius * 2) : surfaceWidth;
const effectiveSurfaceLength = (surfaceShape === "circle") ? (circleRadius * 2) : surfaceLength;

const offsetX = -effectiveSurfaceWidth / 2 + (effectiveSurfaceWidth - gridWidth) / 2;
const offsetZ = -effectiveSurfaceLength / 2 + (effectiveSurfaceLength - gridLength) / 2;
    const centerRow = (rowsN - 1) / 2;
    const centerCol = (colsN - 1) / 2;
    const maxGridRadius = Math.sqrt(
      centerRow * centerRow + centerCol * centerCol
    );

    const localStringHeight = [];

if (surfaceShape === "circle") {
  // total pendants from rows x cols slider
  const total = rowsN * colsN;

  // keep pendants slightly inside the plate edge
  const margin = Math.max(0, Number(baseOffset || 0) * 0.5);
  const usableRadius = Math.max(1, circleRadius - margin);
      // const usableRadius = inputSurfaceWidth && inputSurfaceLength ? Math.max(1, circleRadius - spacingL) : Math.max(1, circleRadius - margin);
  console.log(margin)

  const points = generateSunflowerPoints(total, usableRadius);

  for (let i = 0; i < points.length; i++) {
    const { x, z, distNorm, angle01 } = points[i];

    let yOffset = minY;

    // ✅ Pattern using distance/angle (works great for circle layouts)
    switch (pattern) {
      case "dome":
        yOffset = minY + (maxY - minY) * (1 - distNorm) ** 2;
        break;

      case "reverseDome":
        yOffset = minY + (maxY - minY) * distNorm ** 2;
        break;

      case "ripple":
        yOffset = minY + (maxY - minY) * (Math.sin(distNorm * Math.PI * 3) * 0.5 + 0.5);
        break;

      case "spiral":
        yOffset = minY + (maxY - minY) * angle01;
        break;

      case "random":
        yOffset = minY + Math.random() * (maxY - minY);
        break;

      // patterns that were grid-based → fallback
      default:
        yOffset = minY;
    }

    yOffset = Math.floor(yOffset);

    const pendant = baseModel.clone();
    pendant.position.set(x, yOffset, z);
    pendant.userData.isPendant = true;
    pendant.rotation.y = Math.random() * Math.PI * 2;
    scene.add(pendant);

    const stringHeight = surfaceHeight - yOffset;
    const string = new THREE.Mesh(
      new THREE.CylinderGeometry(0.1, 0.1, stringHeight, 8),
      new THREE.MeshStandardMaterial({
        color: 0xcccccc,
        metalness: 0.9,
        roughness: 0.2,
      })
    );

    string.position.set(x, yOffset + stringHeight / 2, z);
    string.userData.isString = true;
    scene.add(string);

    localStringHeight.push({
      x,
      y: z,
      index: i,
      stringHeight,
    });
  }
} else {
  //  ORIGINAL GRID behavior for rectangle plate
  for (let r = 0; r < rowsN; r++) {
    for (let c = 0; c < colsN; c++) {
      const dr = r - centerRow;
      const dc = c - centerCol;
      const dist = Math.sqrt(dr * dr + dc * dc);
      const t = dist / maxGridRadius;

      let yOffset = minY;

      switch (pattern) {
        case "dome":
          yOffset = minY + (maxY - minY) * (1 - t) ** 2;
          break;
        case "reverseDome":
          yOffset = minY + (maxY - minY) * t ** 2;
          break;
        case "wave":
          yOffset =
            (minY + maxY) / 2 +
            (Math.sin(c * 0.5) + Math.cos(r * 0.5)) *
              ((maxY - minY) / 2) *
              0.5;
          break;
        case "ripple":
          yOffset =
            minY + (maxY - minY) * (Math.sin(dist * 1.5) * 0.5 + 0.5);
          break;
        case "spiral":
          yOffset =
            minY +
            (maxY - minY) *
              ((Math.atan2(dr, dc) + Math.PI) / (2 * Math.PI));
          break;
        case "diagonal":
          yOffset =
            minY + (maxY - minY) * ((r + c) / (rowsN + colsN - 2));
          break;
        case "checkerboard":
          yOffset = (r + c) % 2 === 0 ? minY : maxY;
          break;
        case "random":
          yOffset = minY + Math.random() * (maxY - minY);
          break;
        default:
          yOffset = minY;
      }

      yOffset = Math.floor(yOffset);

      const x = offsetX + c * spacingW;
      const z = offsetZ + r * spacingL;

      const pendant = baseModel.clone();
      pendant.position.set(x, yOffset, z);
      pendant.userData.isPendant = true;
      pendant.rotation.y = Math.random() * Math.PI * 2;
      scene.add(pendant);

      const stringHeight = surfaceHeight - yOffset;
      const string = new THREE.Mesh(
        new THREE.CylinderGeometry(0.1, 0.1, stringHeight, 8),
        new THREE.MeshStandardMaterial({
          color: 0xcccccc,
          metalness: 0.9,
          roughness: 0.2,
        })
      );

      string.position.set(x, yOffset + stringHeight / 2, z);
      string.userData.isString = true;
      scene.add(string);

      localStringHeight.push({
        x,
        y: z,
        row: r,
        col: c,
        stringHeight,
      });
    }
  }
}

onStringHeightsUpdate?.(localStringHeight);


    let surfaceGeometry;
    const thickness = 4; // cm

    const surfaceMat = new THREE.MeshStandardMaterial({
      color: 0xe2e2e2,
      side: THREE.DoubleSide,
    });

    if (surfaceShape === "circle") {
      surfaceGeometry = new THREE.CylinderGeometry(
        circleRadius,
        circleRadius,
        thickness,
        config.circleSegments
      );
    } else {
      surfaceGeometry = new THREE.BoxGeometry(
        surfaceWidth,   // X (width)
        thickness,      // Y (thickness) ✅
        surfaceLength   // Z (length)
      );
    }

    const surfaceMesh = new THREE.Mesh(surfaceGeometry, surfaceMat);

    // surfaceMesh.rotation.x = -Math.PI / 2;
    surfaceMesh.rotation.set(0, 0, 0);
    // surfaceMesh.position.set(0, surfaceHeight, 0);
    surfaceMesh.position.set(0, surfaceHeight - thickness / 2, 0);
    surfaceMesh.userData.isSurface = true;
    scene.add(surfaceMesh);
    
  };

  const handleResize = () => {
    const container = containerRef.current;
    if (!container || !rendererRef.current || !cameraRef.current) return;

    cameraRef.current.aspect =
      container.clientWidth / container.clientHeight;
    cameraRef.current.updateProjectionMatrix();
    rendererRef.current.setSize(
      container.clientWidth,
      container.clientHeight
    );
  };

  return <div ref={containerRef} style={{ flex: 1 }} />;
});

export default ObjFile;