import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OutlineEffect } from 'three/examples/jsm/effects/OutlineEffect.js';

const Background = () => {
  const containerRef = useRef();

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);
    
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight * 1.01);

    // Instead of appending to document.body, append to the container div
    containerRef.current.appendChild(renderer.domElement);
    
    // Create an OutlineEffect for rendering outlines
    const effect = new OutlineEffect(renderer, {
      defaultThickness: 0.001,
      defaultColor: [0.5, 0.5, 0.5],
      defaultAlpha: 0.5,
    });

    const loader = new GLTFLoader();
    let mixer; // Variable for AnimationMixer

    loader.load(`${process.env.PUBLIC_URL}/rubber_duck.glb`, (gltf) => {
      const model = gltf.scene;
      model.traverse((child) => {
        if (child.isMesh) {
          child.material = new THREE.MeshLambertMaterial({
            color: child.material.color,
            flatShading: true,
          });
        }
      });
      scene.add(model);

      if (gltf.animations && gltf.animations.length > 0) {
        mixer = new THREE.AnimationMixer(model);
        const action = mixer.clipAction(gltf.animations[0]);
        action.play();
      }
    }, undefined, (error) => {
      console.error('An error occurred while loading the GLTF model:', error);
    });

    // Set camera position
    camera.position.set(15, 2, 10);
    camera.rotation.y = 1.0;

    const ambientLight = new THREE.AmbientLight(0xffffff, 5.0);
    scene.add(ambientLight);
    scene.background = new THREE.Color(0x87CEEB);

    const clock = new THREE.Clock();

    const animate = () => {
      const delta = clock.getDelta();
      if (mixer) {
        mixer.update(delta);
      }
      effect.render(scene, camera);
      requestAnimationFrame(animate);
    };

    animate();

    // Handle window resizing
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      effect.setSize(width, height);
    };
    
    window.addEventListener('resize', handleResize);

    // Clean up on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    // Ensure your background container covers the viewport and is positioned behind the content
    <div
      ref={containerRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1,
      }}
    />
  );
};

export default Background;