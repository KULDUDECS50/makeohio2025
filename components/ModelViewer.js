"use client";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

function Model() {
  const gltf = useLoader(GLTFLoader, "/public/model/kd.glb");
  return <primitive object={gltf.scene} />;
}
