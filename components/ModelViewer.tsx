import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Suspense } from "react";

function Model() {
  const { scene } = useGLTF("/model/kd.glb"); // Ensure correct path based on your 'public' folder structure
  return <primitive object={scene} scale={2} />;
}

export default function ModelViewer() {
  return (
    <Canvas
      style={{ width: "50vw", height: "85vh" }}
      camera={{ position: [3, 1.2, 3], fov: 20 }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 2, 2]} />
      <Suspense fallback={null}>
        <Model />
      </Suspense>
      <OrbitControls enableZoom={false} enablePan={false} />
    </Canvas>
  );
}
