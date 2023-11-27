import { Canvas } from '@react-three/fiber'
import { useState, Suspense } from 'react'
import Loader from '../components/Loader'

import Keyboard from '../models/Keyboard';

const Home = () => {
  const [isRotating, setIsRotating] = useState(false);

  const adjustKeyboardForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [0, 0, -30];
    let rotation = [0, 6.25, -0.01];

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
    } else {
      screenScale = [1, 1, 1];
    }


    return [screenScale, screenPosition, rotation]
  }

  const [keyboardScale, keyboardPosition, keyboardRotation] = adjustKeyboardForScreenSize();

  return (
    <section className="w-full h-screen bg-neutral-900 relative">
        <h1 className="leading-none absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-slate-50 font-bold text-[200px]">MECHANICAL <br/> INDUSTRY</h1>
        
        <Canvas 
            className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
            camera={{ near: 0.1, far: 1000}}
        >
            <Suspense fallback= {<Loader />}>
                <directionalLight position={[100, 1, 1]} intensity={2}/>
                <ambientLight intensity={0.5}/>
                <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={1}/>

                <Keyboard 
                  position={keyboardPosition}
                  scale={keyboardScale}
                  rotation={keyboardRotation}
                  isRotating={isRotating}
                  setIsRotating={setIsRotating}
                />
            </Suspense>
        </Canvas>
    </section>
  )
}

export default Home