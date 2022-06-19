import React from "react";

import * as THREE from "three";
import { useThree, useFrame } from "@react-three/fiber";
import { useScroll } from "@react-three/drei";

export default function Center(props) {
  const { camera } = useThree();
  const data = useScroll();

  // Zoom out effect by changing the position and rotation of the camera while scrolling down
  useFrame(() => {
    camera.position.z = camera.position.z + data.offset * 10;
    camera.rotation.z = camera.rotation.z + data.offset * 0.1;
  });
  return <mesh {...props} />;
}
