// src/components/ObjFile.jsx
import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";

const ObjFile = ({ config, onStringHeightsUpdate }) => {
  const containerRef = useRef();
  const sceneRef = useRef(new THREE.Scene());
  const modelRef = useRef(null);
  const rendererRef = useRef();
  const cameraRef = useRef();

  const dimensionLines = useRef([]);
  const dimensionLabels = useRef([]);
  const allStringHeightRef = useRef([]);

  useEffect(() => {
    const container = containerRef.current;
    const scene = sceneRef.current;
    scene.background = new THREE.Color(0xc7c7c7);

    const camera = new THREE.PerspectiveCamera(
      75,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 100, 300);
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    rendererRef.current = renderer;
    container.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(10, 10, 10);
    scene.add(ambientLight, directionalLight);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.target.set(0, 100, 0);

    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    const loader = new OBJLoader();
    loader.load("/configurator/models/myModel.obj", (obj) => {
      modelRef.current = obj;
      updateSceneWithConfig();
    });

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      container.removeChild(renderer.domElement);
      clearDimensionLabels();
    };
  }, []);

  useEffect(() => {
    if (modelRef.current) updateSceneWithConfig();
  }, [config]);

  const updateSceneWithConfig = () => {
    const localStringHeight = [];

    const scene = sceneRef.current;
    const model = modelRef.current.clone();
    model.scale.set(1, 1, 1);

    scene.children = scene.children.filter(
      (obj) =>
        !obj.userData?.isPendant &&
        !obj.userData?.isString &&
        !obj.userData?.isSurface
    );

    dimensionLines.current.forEach((line) => scene.remove(line));
    dimensionLines.current = [];
    clearDimensionLabels();

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

    const rowsN = Number(rows);
    const colsN = Number(cols);

    const lowestY = Number(lowest);
    const highestY = Number(highest);

    const minY = Math.min(lowestY, highestY);
    const maxY = Math.max(lowestY, highestY);

    let surfaceLength = inputSurfaceLength;
    let surfaceWidth = inputSurfaceWidth;

    if (surfaceWidth === 0 && surfaceLength === 0) {
      surfaceWidth = (colsN - 1) * spacing + Number(baseOffset || 0);
      surfaceLength = (rowsN - 1) * spacing + Number(baseOffset || 0);
    }

    const offsetX = -((colsN - 1) / 2) * spacing;
    const offsetZ = -((rowsN - 1) / 2) * spacing;

    const centerRow = (rowsN - 1) / 2;
    const centerCol = (colsN - 1) / 2;

    const maxGridRadius = Math.sqrt(centerRow * centerRow + centerCol * centerCol);

    // ----------------------------------------------------
    // GENERATE PENDANTS + PATTERN ENGINE
    // ----------------------------------------------------
    for (let r = 0; r < rowsN; r++) {
      for (let c = 0; c < colsN; c++) {
        
        const dr = r - centerRow;
        const dc = c - centerCol;
        const dist = Math.sqrt(dr * dr + dc * dc);
        const t = dist / maxGridRadius;

        let yOffset = minY;

        switch (pattern) {
          case "flat":
            yOffset = minY;
            break;

          case "dome":
            yOffset = minY + (maxY - minY) * (1 - t) ** 2;
            break;

          case "reverseDome":
            yOffset = minY + (maxY - minY) * (t ** 2);
            break;

          case "wave":
            const mid = (minY + maxY) / 2;
            const amplitude = (maxY - minY) / 2;
            yOffset =
              mid +
              (Math.sin(c * 0.5) + Math.cos(r * 0.5)) * amplitude * 0.5;
            break;

          case "ripple":
            yOffset =
              minY + (maxY - minY) * (Math.sin(dist * 1.5) * 0.5 + 0.5);
            break;

          case "spiral":
            const angle = Math.atan2(dr, dc);
            const angleNorm = (angle + Math.PI) / (2 * Math.PI);
            yOffset = minY + (maxY - minY) * angleNorm;
            break;

          case "diagonal":
            const diag = (r + c) / (rowsN + colsN - 2);
            yOffset = minY + (maxY - minY) * diag;
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

        const clone = model.clone();
        clone.position.set(
          offsetX + c * spacing,
          yOffset,
          offsetZ + r * spacing
        );
        clone.rotation.set(0, Math.random() * Math.PI * 2, 0);
        clone.userData.isPendant = true;
        scene.add(clone);

        const stringHeight = surfaceHeight - yOffset;
        const string = new THREE.Mesh(
          new THREE.CylinderGeometry(0.1, 0.1, stringHeight, 8),
          new THREE.MeshStandardMaterial({ color: 0x292929 })
        );

        string.position.set(
          clone.position.x,
          yOffset + stringHeight / 2,
          clone.position.z
        );
        string.userData.isString = true;
        scene.add(string);

        localStringHeight.push({
          x: offsetZ + r * spacing,
          y: offsetX + c * spacing,
          row: r,
          col: c,
          pendantY: yOffset,
          stringHeight,
        });
      }
    }

    if (onStringHeightsUpdate) onStringHeightsUpdate(localStringHeight);

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

  function clearDimensionLabels() {
    dimensionLabels.current.forEach((label) => {
      if (label && label.parentNode) label.parentNode.removeChild(label);
    });
    dimensionLabels.current = [];
  }

  const handleResize = () => {
    const container = containerRef.current;
    const renderer = rendererRef.current;
    const camera = cameraRef.current;
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.clientWidth, container.clientHeight);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return <div ref={containerRef} style={{ flex: 1 }} />;
};

export default ObjFile;
