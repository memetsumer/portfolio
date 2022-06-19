import React from "react";

import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { CameraShake, Stars } from "@react-three/drei";

import Movement from "./Movement";
import Landing from "./Landing";

function Scene({ children, ...props }) {
  return (
    <Canvas camera={{ position: [0, 0, 1500] }}>
      <Movement>
        <Stars radius={100} count={10000} />
      </Movement>

      <CameraShake
        yawFrequency={0.2}
        pitchFrequency={0.2}
        rollFrequency={0.2}
      />

      <Landing>{children}</Landing>
    </Canvas>
  );
}

export default React.memo(Scene);
