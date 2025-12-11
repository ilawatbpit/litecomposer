// src/components/ThreeBox.jsx
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const ThreeBox = () => {
  const containerRef = useRef();

useEffect(() => {
  console.log('✅ ObjFile mounted');
  const container = containerRef.current;
  console.log('📦 containerRef.current:', container);

  // Scene
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0xf0f0f0);

  // Camera
  const camera = new THREE.PerspectiveCamera(
    75,
    container.clientWidth / container.clientHeight,
    0.1,
    1000
  );
  camera.position.z = 3;

  // Renderer
  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(container.clientWidth, container.clientHeight);
  container.appendChild(renderer.domElement);
  console.log('🖼️ Canvas attached');

  // Cube
  const geometry = new THREE.BoxGeometry();
  const material = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
  const cube = new THREE.Mesh(geometry, material);
  scene.add(cube);
  console.log('🟩 Cube added to scene');

  // Lighting
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.6);
  directionalLight.position.set(5, 5, 5);
  scene.add(ambientLight, directionalLight);

  // Controls
  const controls = new OrbitControls(camera, renderer.domElement);

  // Resize support
  const handleResize = () => {
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.clientWidth, container.clientHeight);
  };
  window.addEventListener('resize', handleResize);

  // Animate
  const animate = () => {
    requestAnimationFrame(animate);
    cube.rotation.y += 0.01;
    cube.rotation.x += 0.005;
    controls.update();
    renderer.render(scene, camera);
  };
  animate();

  // Cleanup
  return () => {
    window.removeEventListener('resize', handleResize);
    container.removeChild(renderer.domElement);
  };
}, []);


  // return (
  //   <div
  //     ref={containerRef}
  //     style={{
  //       width: '100%',
  //       height: '100vh',
  //       overflow: 'hidden',
  //     }}
  //   >
  //     <h1 style={{ position: 'absolute', color: 'red', top: 20, left: 20 }}>Hello</h1>
  //   </div>
  // );

return (
  <div
    ref={containerRef}
    style={{
      width: '100vw',   // force full screen width
      height: '100vh',
      overflow: 'hidden',
    }}
  >
  </div>
);


};

export default ThreeBox;
