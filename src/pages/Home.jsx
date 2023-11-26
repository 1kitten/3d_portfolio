import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import Loader from '../components/Loader'

import Keyboard from '../models/Keyboard';

const Home = () => {
  return (
    <section className="w-full h-screen bg-black relative">
        <Canvas 
            className='w-full h-screen bg-transparent'
            camera={{ near: 0.1, far: 1000}}
        >
            <Suspense fallback= {<Loader />}>
                <directionalLight />
                <ambientLight />
                <pointLight />
                <spotLight />
                <hemisphereLight />

                <Keyboard />
            </Suspense>
        </Canvas>
    </section>
  )
}

export default Home