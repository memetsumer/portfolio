import React from "react";
import { useRef } from "react";

import * as THREE from "three";
import { useThree, useFrame } from "@react-three/fiber";

export default function Movement({
  vec = new THREE.Vector3(),
  children,
  ...props
}) {
  const ref = useRef();
  const { camera, mouse } = useThree();

  useFrame((state) => {
    // Initial zoom
    camera.position.lerp(vec.set(mouse.x * 2, 0, 3.5), 0.05);

    // Update star positions as mouse movement changes
    ref.current.position.lerp(vec.set(mouse.x * 1, mouse.y * 0.1, 0), 0.1);

    // Yaw effect
    ref.current.rotation.y = THREE.MathUtils.lerp(
      ref.current.rotation.y,
      (-mouse.x * Math.PI) / 20,
      0.1
    );

    // Roll effect
    ref.current.rotation.z = THREE.MathUtils.lerp(
      ref.current.rotation.z,
      (-mouse.y * Math.PI) / 20,
      0.1
    );

    // Constantly rotate stars on the Y axis
    ref.current.rotation.y += state.clock.getElapsedTime() * 0.005;
  });
  return <group ref={ref}>{children}</group>;
}
