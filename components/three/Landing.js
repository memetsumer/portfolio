import React from "react";
import { useRef } from "react";

import * as THREE from "three";
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import {
  CameraShake,
  Stars,
  useScroll,
  ScrollControls,
  Scroll,
} from "@react-three/drei";

import Center from "./Center";

export default function Landing({ children, ...props }) {
  return (
    <ScrollControls pages={4}>
      <Scroll>
        <Center />
      </Scroll>
      {/* To use html elements in R3F Canvas, set html prop to true */}
      <Scroll html>{children}</Scroll>
    </ScrollControls>
  );
}
