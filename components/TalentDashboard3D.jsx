"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function TalentDashboard3D() {
  const containerRef = useRef(null);
  const rendererRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0a0a0f);

    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
    camera.position.z = 5;
    camera.position.y = 0.5;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Brand colors
    const brandOrange = new THREE.Color(0xec7249);
    const brandMid = new THREE.Color(0xd95f36);
    const brandBlue = new THREE.Color(0x49a7ec);

    // Create floating nodes (talent data points)
    const nodes = [];
    const nodeGeometry = new THREE.SphereGeometry(0.08, 16, 16);
    const nodeMaterials = [
      new THREE.MeshBasicMaterial({ color: brandOrange }),
      new THREE.MeshBasicMaterial({ color: brandMid }),
      new THREE.MeshBasicMaterial({ color: brandBlue }),
    ];

    for (let i = 0; i < 40; i++) {
      const material = nodeMaterials[i % 3];
      const node = new THREE.Mesh(nodeGeometry, material);
      node.position.x = (Math.random() - 0.5) * 6;
      node.position.y = (Math.random() - 0.5) * 4;
      node.position.z = (Math.random() - 0.5) * 3;
      node.userData = {
        originalY: node.position.y,
        speed: 0.5 + Math.random() * 0.5,
        phase: Math.random() * Math.PI * 2,
      };
      nodes.push(node);
      scene.add(node);
    }

    // Create connection lines between nearby nodes
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x333344,
      transparent: true,
      opacity: 0.3,
    });

    const connections = [];
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dist = nodes[i].position.distanceTo(nodes[j].position);
        if (dist < 1.5) {
          const geometry = new THREE.BufferGeometry().setFromPoints([
            nodes[i].position,
            nodes[j].position,
          ]);
          const line = new THREE.Line(geometry, lineMaterial);
          line.userData = { nodeA: i, nodeB: j };
          connections.push(line);
          scene.add(line);
        }
      }
    }

    // Create central dashboard panel
    const panelGeometry = new THREE.PlaneGeometry(2.5, 1.8);
    const panelMaterial = new THREE.MeshBasicMaterial({
      color: 0x151520,
      transparent: true,
      opacity: 0.9,
    });
    const panel = new THREE.Mesh(panelGeometry, panelMaterial);
    panel.position.z = 1;
    scene.add(panel);

    // Panel border
    const borderGeometry = new THREE.EdgesGeometry(panelGeometry);
    const borderMaterial = new THREE.LineBasicMaterial({ color: brandOrange });
    const border = new THREE.LineSegments(borderGeometry, borderMaterial);
    border.position.z = 1.01;
    scene.add(border);

    // Create animated bar chart
    const bars = [];
    const barColors = [brandOrange, brandMid, brandBlue, brandOrange, brandMid];
    for (let i = 0; i < 5; i++) {
      const barGeometry = new THREE.BoxGeometry(0.15, 0.5, 0.05);
      const barMaterial = new THREE.MeshBasicMaterial({ color: barColors[i] });
      const bar = new THREE.Mesh(barGeometry, barMaterial);
      bar.position.x = -0.8 + i * 0.25;
      bar.position.y = -0.3;
      bar.position.z = 1.02;
      bar.userData = {
        targetHeight: 0.3 + Math.random() * 0.6,
        phase: i * 0.5,
      };
      bars.push(bar);
      scene.add(bar);
    }

    // Create data stream lines
    const streamLines = [];
    for (let i = 0; i < 8; i++) {
      const points = [];
      const startX = 0.5;
      const startY = 0.2 + i * 0.08;
      for (let j = 0; j < 20; j++) {
        points.push(new THREE.Vector3(startX + j * 0.05, startY, 1.02));
      }
      const streamGeometry = new THREE.BufferGeometry().setFromPoints(points);
      const streamMaterial = new THREE.LineBasicMaterial({
        color: i % 2 === 0 ? brandOrange : brandBlue,
        transparent: true,
        opacity: 0.6,
      });
      const stream = new THREE.Line(streamGeometry, streamMaterial);
      stream.userData = { offset: i * 0.3 };
      streamLines.push(stream);
      scene.add(stream);
    }

    // Ambient particles
    const particleGeometry = new THREE.BufferGeometry();
    const particleCount = 100;
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 8;
      positions[i + 1] = (Math.random() - 0.5) * 5;
      positions[i + 2] = (Math.random() - 0.5) * 4;
    }
    particleGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );
    const particleMaterial = new THREE.PointsMaterial({
      color: 0x444455,
      size: 0.02,
    });
    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    // Animation loop
    const clock = new THREE.Clock();

    const animate = () => {
      const elapsed = clock.getElapsedTime();

      // Animate nodes
      nodes.forEach((node) => {
        node.position.y =
          node.userData.originalY +
          Math.sin(elapsed * node.userData.speed + node.userData.phase) * 0.1;
      });

      // Update connection lines
      connections.forEach((line) => {
        const positions = line.geometry.attributes.position.array;
        const nodeA = nodes[line.userData.nodeA];
        const nodeB = nodes[line.userData.nodeB];
        positions[0] = nodeA.position.x;
        positions[1] = nodeA.position.y;
        positions[2] = nodeA.position.z;
        positions[3] = nodeB.position.x;
        positions[4] = nodeB.position.y;
        positions[5] = nodeB.position.z;
        line.geometry.attributes.position.needsUpdate = true;
      });

      // Animate bars
      bars.forEach((bar) => {
        const height =
          bar.userData.targetHeight *
          (0.5 + 0.5 * Math.sin(elapsed * 2 + bar.userData.phase));
        bar.scale.y = height;
        bar.position.y = -0.5 + height * 0.25;
      });

      // Animate data streams
      streamLines.forEach((stream) => {
        const positions = stream.geometry.attributes.position.array;
        for (let i = 0; i < positions.length; i += 3) {
          const idx = i / 3;
          positions[i + 1] +=
            Math.sin(elapsed * 3 + idx * 0.5 + stream.userData.offset) * 0.001;
        }
        stream.geometry.attributes.position.needsUpdate = true;
      });

      // Rotate particles slowly
      particles.rotation.y = elapsed * 0.05;

      // Gentle camera sway
      camera.position.x = Math.sin(elapsed * 0.3) * 0.2;
      camera.position.y = 0.5 + Math.cos(elapsed * 0.2) * 0.1;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
      animationRef.current = requestAnimationFrame(animate);
    };
    animate();

    // Handle resize
    const handleResize = () => {
      if (!containerRef.current) return;
      const w = containerRef.current.clientWidth;
      const h = containerRef.current.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      if (rendererRef.current && containerRef.current) {
        containerRef.current.removeChild(rendererRef.current.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full h-full rounded-2xl overflow-hidden"
    />
  );
}
