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
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { OBJExporter } from "three/examples/jsm/exporters/OBJExporter";

import { useWorkingModel } from "../../context/WorkingModelContext";




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
const ObjFile = forwardRef(({ config, onStringHeightsUpdate }, ref) => {
  const containerRef = useRef(null);
  const sceneRef = useRef(new THREE.Scene());
  const modelRef = useRef(null);
  const rendererRef = useRef(null);
  const cameraRef = useRef(null);

  const dimensionLines = useRef([]);

  const { workingModel} = useWorkingModel();

  /* =====================================================
     EXPOSE EXPORT FUNCTION
     ===================================================== */
  useImperativeHandle(ref, () => ({
    exportOBJ,
  }));

  function exportOBJ() {
    const exporter = new OBJExporter();
    const exportGroup = new THREE.Group();
    exportGroup.name = "LightingConfigurator";

    sceneRef.current.traverse((obj) => {
      if (
        obj.userData?.isPendant ||
        obj.userData?.isString ||
        obj.userData?.isSurface
      ) {
        exportGroup.add(obj.clone(true));
      }
    });

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
    scene.background = new THREE.Color(0xc7c7c7);

    const camera = new THREE.PerspectiveCamera(
      75,
      container.clientWidth / container.clientHeight,
      0.1,
      2000
    );
    camera.position.set(0, 100, 300);
    cameraRef.current = camera;

    // Helpers
    scene.add(new THREE.AxesHelper(300));
    scene.add(new THREE.GridHelper(1000, 50));

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      preserveDrawingBuffer: true,
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    rendererRef.current = renderer;
    container.appendChild(renderer.domElement);

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

    

    const loader = new OBJLoader();
    loader.load(
      import.meta.env.BASE_URL + "models/"+workingModel+".obj",
      (obj) => {
        modelRef.current = obj;
        updateSceneWithConfig();
      }
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
      spacing,
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
  surfaceLength = (rowsN - 1) * spacing + Number(baseOffset || 0); // Z = ROWS
  surfaceWidth  = (colsN - 1) * spacing + Number(baseOffset || 0); // X = COLS
}

    // DIMENSIONS — EDGE ALIGNED
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

    // GRID SIZE
const gridWidth  = (colsN - 1) * spacing; // X
const gridLength = (rowsN - 1) * spacing; // Z

// CENTER GRID INSIDE SURFACE
const offsetX = -surfaceWidth / 2 + (surfaceWidth - gridWidth) / 2;
const offsetZ = -surfaceLength / 2 + (surfaceLength - gridLength) / 2;
    const centerRow = (rowsN - 1) / 2;
    const centerCol = (colsN - 1) / 2;
    const maxGridRadius = Math.sqrt(
      centerRow * centerRow + centerCol * centerCol
    );

    const localStringHeight = [];

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

        const pendant = baseModel.clone();
        pendant.position.set(
          offsetX + c * spacing,
          yOffset,
          offsetZ + r * spacing
        );
        pendant.userData.isPendant = true;
        scene.add(pendant);

        const stringHeight = surfaceHeight - yOffset;
        const string = new THREE.Mesh(
          new THREE.CylinderGeometry(0.1, 0.1, stringHeight, 8),
          new THREE.MeshStandardMaterial({ color: 0x292929 })
        );
        string.position.set(
          pendant.position.x,
          yOffset + stringHeight / 2,
          pendant.position.z
        );
        string.userData.isString = true;
        scene.add(string);

        localStringHeight.push({
          x: offsetX + c * spacing,
          y: offsetZ + r * spacing,
          row: r,
          col: c,
          stringHeight,
        });
      }
    }

    onStringHeightsUpdate?.(localStringHeight);

    const surfaceMesh = new THREE.Mesh(
      new THREE.PlaneGeometry(surfaceWidth, surfaceLength),
      new THREE.MeshStandardMaterial({
        color: 0x555555,
        side: THREE.DoubleSide,
      })
    );
    surfaceMesh.rotation.x = -Math.PI / 2;
    surfaceMesh.position.set(0, surfaceHeight, 0);
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
