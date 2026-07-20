"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

const GLOBE_RADIUS = 1.8;
const WIRE_COLOR = 0x888888;
const WIRE_BRIGHT = 0xaaaaaa;
const ACCENT = 0xfee546; // Esteemed yellow

const CENTERS = [
  { name: "New York", lat: 40.7128, lng: -74.006, color: 0xfee546 },
  { name: "London", lat: 51.5074, lng: -0.1278, color: 0x6366f1 },
  { name: "Tokyo", lat: 35.6762, lng: 139.6503, color: 0x3cc97a },
  { name: "Sydney", lat: -33.8688, lng: 151.2093, color: 0x7c5bc9 },
];

const CONNECTIONS = [
  [0, 1],
  [1, 2],
  [2, 3],
  [0, 2],
  [1, 3],
  [0, 3],
];

function latLngToVec3(lat, lng, r) {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);
  return new THREE.Vector3(
    -r * Math.sin(phi) * Math.cos(theta),
    r * Math.cos(phi),
    r * Math.sin(phi) * Math.sin(theta)
  );
}

function latitudeRing(lat, r, segments) {
  const points = [];
  const phi = (90 - lat) * (Math.PI / 180);
  const ringR = r * Math.sin(phi);
  const y = r * Math.cos(phi);
  for (let i = 0; i <= segments; i++) {
    const theta = (i / segments) * Math.PI * 2;
    points.push(new THREE.Vector3(ringR * Math.cos(theta), y, ringR * Math.sin(theta)));
  }
  return points;
}

function longitudeRing(lng, r, segments) {
  const points = [];
  const theta = (lng + 180) * (Math.PI / 180);
  for (let i = 0; i <= segments; i++) {
    const phi = (i / segments) * Math.PI;
    points.push(
      new THREE.Vector3(
        -r * Math.sin(phi) * Math.cos(theta),
        r * Math.cos(phi),
        r * Math.sin(phi) * Math.sin(theta)
      )
    );
  }
  return points;
}

function tiltedGreatCircle(tiltAxis, tiltAngle, r, segments) {
  const points = [];
  const quat = new THREE.Quaternion().setFromAxisAngle(tiltAxis, tiltAngle);
  for (let i = 0; i <= segments; i++) {
    const phi = (i / segments) * Math.PI * 2;
    const p = new THREE.Vector3(r * Math.cos(phi), 0, r * Math.sin(phi));
    p.applyQuaternion(quat);
    points.push(p);
  }
  return points;
}

export default function IntelligenceGlobe() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 1000);
    camera.position.set(0, 0, 5.2);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    const world = new THREE.Group();
    world.rotation.x = 0.15;
    world.rotation.y = -0.5;
    scene.add(world);

    const wireMat = new THREE.LineBasicMaterial({ color: WIRE_COLOR, transparent: true, opacity: 0.25 });
    const wireBrightMat = new THREE.LineBasicMaterial({ color: WIRE_BRIGHT, transparent: true, opacity: 0.1 });
    const segments = 80;

    for (let lat = -75; lat <= 75; lat += 15) {
      world.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(latitudeRing(lat, GLOBE_RADIUS, segments)), wireMat));
    }
    for (let lng = -180; lng < 180; lng += 15) {
      world.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(longitudeRing(lng, GLOBE_RADIUS, segments)), wireMat));
    }

    const xAxis = new THREE.Vector3(1, 0, 0);
    const zAxis = new THREE.Vector3(0, 0, 1);
    const diagAxis1 = new THREE.Vector3(1, 0, 1).normalize();
    const diagAxis2 = new THREE.Vector3(1, 0, -1).normalize();

    for (let angle = -60; angle <= 60; angle += 20) {
      const rad = (angle * Math.PI) / 180;
      [xAxis, zAxis, diagAxis1, diagAxis2].forEach((axis) => {
        world.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(tiltedGreatCircle(axis, rad, GLOBE_RADIUS, segments)), wireBrightMat));
      });
    }

    // Accent dots
    const dotPositions = [];
    for (let lat = -60; lat <= 60; lat += 30) {
      for (let lng = -180; lng < 180; lng += 30) {
        const v = latLngToVec3(lat, lng, GLOBE_RADIUS * 1.005);
        dotPositions.push(v.x, v.y, v.z);
      }
    }
    const accentGeo = new THREE.BufferGeometry();
    accentGeo.setAttribute("position", new THREE.Float32BufferAttribute(dotPositions, 3));
    world.add(new THREE.Points(accentGeo, new THREE.PointsMaterial({ color: ACCENT, size: 0.025, sizeAttenuation: true, transparent: true, opacity: 0.4 })));

    // Atmosphere
    world.add(new THREE.Mesh(new THREE.SphereGeometry(GLOBE_RADIUS * 1.06, 64, 64), new THREE.MeshBasicMaterial({ color: WIRE_COLOR, transparent: true, opacity: 0.06, side: THREE.BackSide })));

    // Centers
    const cityVecs = CENTERS.map((c) => latLngToVec3(c.lat, c.lng, GLOBE_RADIUS));
    CENTERS.forEach((c, i) => {
      const dot = new THREE.Mesh(new THREE.SphereGeometry(0.035, 12, 12), new THREE.MeshBasicMaterial({ color: c.color }));
      dot.position.copy(cityVecs[i]);
      world.add(dot);

      const glow = new THREE.Mesh(new THREE.SphereGeometry(0.07, 12, 12), new THREE.MeshBasicMaterial({ color: c.color, transparent: true, opacity: 0.15 }));
      glow.position.copy(cityVecs[i]);
      world.add(glow);

      const ring = new THREE.Mesh(new THREE.RingGeometry(0.06, 0.08, 24), new THREE.MeshBasicMaterial({ color: c.color, transparent: true, opacity: 0.3, side: THREE.DoubleSide }));
      ring.position.copy(cityVecs[i]);
      ring.lookAt(new THREE.Vector3(0, 0, 0));
      world.add(ring);
    });

    // Arcs
    const arcs = [];
    const pulseDots = [];

    CONNECTIONS.forEach(([i, j]) => {
      const a = cityVecs[i];
      const b = cityVecs[j];
      const mid = new THREE.Vector3().addVectors(a, b).multiplyScalar(0.5);
      const dist = a.distanceTo(b);
      mid.normalize().multiplyScalar(GLOBE_RADIUS + dist * 0.4);
      const curve = new THREE.QuadraticBezierCurve3(a, mid, b);

      world.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(curve.getPoints(64)), new THREE.LineBasicMaterial({ color: 0x888888, transparent: true, opacity: 0.2 })));

      const trailGeo = new THREE.BufferGeometry().setFromPoints(curve.getPoints(64));
      const trail = new THREE.Line(trailGeo, new THREE.LineBasicMaterial({ color: CENTERS[i].color, transparent: true, opacity: 0.6 }));
      world.add(trail);

      const pulse = new THREE.Mesh(new THREE.SphereGeometry(0.02, 8, 8), new THREE.MeshBasicMaterial({ color: CENTERS[i].color, transparent: true, opacity: 0.9 }));
      world.add(pulse);
      pulseDots.push(pulse);

      arcs.push({ curve, progress: Math.random(), speed: 0.003 + Math.random() * 0.004, trail });
    });

    function resize() {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      renderer.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    }
    resize();
    window.addEventListener("resize", resize);

    let targetRotX = 0.15;
    let targetRotY = -0.5;
    function onMouseMove(e) {
      const rect = container.getBoundingClientRect();
      const mx = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      const my = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
      targetRotX = 0.15 + my * 0.3;
      targetRotY = -0.5 + mx * 0.5;
    }
    container.addEventListener("mousemove", onMouseMove);

    let animId;
    let autoRot = 0;

    function animate() {
      animId = requestAnimationFrame(animate);
      autoRot += 0.003;
      world.rotation.x += (targetRotX - world.rotation.x) * 0.02;
      world.rotation.y += (targetRotY + autoRot - world.rotation.y) * 0.02;

      arcs.forEach((arc, idx) => {
        arc.progress = (arc.progress + arc.speed) % 1;
        pulseDots[idx].position.copy(arc.curve.getPoint(arc.progress));
        const fade = Math.sin(arc.progress * Math.PI);
        pulseDots[idx].material.opacity = fade * 0.9;

        const trailLen = 0.15;
        const start = Math.max(0, arc.progress - trailLen);
        const trailPts = [];
        for (let s = 0; s <= 20; s++) {
          const t = start + (s / 20) * (arc.progress - start);
          trailPts.push(arc.curve.getPoint(Math.min(1, Math.max(0, t))));
        }
        arc.trail.geometry.dispose();
        arc.trail.geometry = new THREE.BufferGeometry().setFromPoints(trailPts);
        arc.trail.material.opacity = fade * 0.5;
      });

      renderer.render(scene, camera);
    }
    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
      container.removeEventListener("mousemove", onMouseMove);
      renderer.dispose();
      if (renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={containerRef} className="w-full h-full" aria-hidden="true" />;
}
