import "@/styles/globals.css";
import { ParallaxProvider } from "react-scroll-parallax";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "drei";

function Box() {
  return (
    <mesh>
      {/* <sphereGeometry args={[1, 16, 16]} /> */}
      <boxBufferGeometry attach={"geometry"} />
      <meshLambertMaterial color="hotpink" attach="material" />
    </mesh>
  );
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <Canvas>
        <pointLight position={[10, 10, 10]} />
        <OrbitControls />
        <Box />
      </Canvas>
      <ParallaxProvider>
        <Component {...pageProps} />
      </ParallaxProvider>
    </>
  );
}
