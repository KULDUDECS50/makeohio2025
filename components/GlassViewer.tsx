import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Suspense } from "react";

function Model() {
  const { scene } = useGLTF("/model/glass.glb"); // Ensure correct path based on your 'public' folder structure
  return <primitive object={scene} scale={0.8} />;
}

export default function GlassViewer() {
  return (
    <Canvas
      style={{ width: "50vw", height: "45vh" }}
      camera={{ position: [1, 1.2, 3], fov: 100 }}
    >
      <ambientLight intensity={80} />
      <directionalLight position={[1, 2, 2]} />
      <Suspense fallback={null}>
        <Model />
      </Suspense>
      <OrbitControls enableZoom={false} enablePan={false} />
    </Canvas>
  );
}
