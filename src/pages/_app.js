import "@/styles/globals.css";
import { ParallaxProvider } from "react-scroll-parallax";
import { Canvas } from "@react-three/fiber";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Canvas>
        <pointLight position={[10, 10, 10]} />
        <mesh
          visible
          userData={{ hello: "world" }}
          position={[1, 2, 3]}
          rotation={[Math.PI / 2, 0, 0]}>
          <sphereGeometry args={[1, 16, 16]} />
          <meshStandardMaterial color="hotpink" transparent />
        </mesh>
      </Canvas>
      <ParallaxProvider>
        <Component {...pageProps} />
      </ParallaxProvider>
    </>
  );
}
