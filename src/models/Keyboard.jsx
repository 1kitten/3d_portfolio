import React, { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { a } from '@react-spring/three'

import keyboardScene from '../assets/3d/keyboard.glb'

const Keyboard = ({ isRotating, setIsRotating, ...props}) => {
  const keyboardRef = useRef();

  const { gl, viewport } = useThree();
  const { nodes, materials } = useGLTF(keyboardScene);

  const lastX = useRef(0);
  const rotationSpeed = useRef(0);
  const dampingFactor = 0.95;

  const handlePointerDown = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsRotating(true);

    const clientX = e.touches ? e.touches[0].clientX : e.clientX;

    lastX.current = clientX;
  };

  const handlePointerUp = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsRotating(false);
  };

  const handlePointerMove = (e) => {
    e.stopPropagation();
    e.preventDefault();

    if(isRotating) {
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const delta = (clientX - lastX.current) / viewport.width;

      keyboardRef.current.rotation.y += delta * 0.1 * Math.PI;
      lastX.current = clientX;
      rotationSpeed.current = delta * 0.1 * Math.PI;
    }
  }

  const handleKeyDown = (e) => {
    if(e.key === 'ArrowLeft') {
      if(!isRotating) setIsRotating(true);
      keyboardRef.current.rotation.y += 0.01 * Math.PI;
    } else if(e.key === 'ArrowRight') {
      if(!isRotating) setIsRotating(true);
      keyboardRef.current.rotation.y -= 0.01 * Math.PI;
    }
  }

  const handleKeyUp = (e) => {
    if(e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
      setIsRotating(false);
    }
  }

  useFrame(() => {
    if(!isRotating) {
      rotationSpeed.current *= dampingFactor;

      if(Math.abs(rotationSpeed.current) < 0.001) {
        rotationSpeed.current = 0;
      }

      keyboardRef.current.rotation.y += rotationSpeed.current;
    } 
  })

  useEffect(() => {
    const canvas = gl.domElement;

    canvas.addEventListener('pointerdown', handlePointerDown);
    canvas.addEventListener('pointerup', handlePointerUp);
    canvas.addEventListener('pointermove', handlePointerMove);
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);

    return () => {
      canvas.removeEventListener('pointerdown', handlePointerDown);
      canvas.removeEventListener('pointerup', handlePointerUp);
      canvas.removeEventListener('pointermove', handlePointerMove);
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keyup', handleKeyUp);
    }
  }, [gl, handlePointerDown, handlePointerUp, handlePointerMove])

  return (
    <a.group  ref={keyboardRef} {...props}>
      <mesh
        geometry={nodes.Box152_Acrylic_Opaque_White_0.geometry}
        material={materials.Acrylic_Opaque_White}
        position={[0, -0.052, 0.029]}
      />
      <mesh
        geometry={nodes["Text007_Material_#34_0"].geometry}
        material={materials.Material_34}
        position={[-3.037, 4.263, 1.318]}
        rotation={[0.175, 0, 0]}
        scale={0.945}
      />
      <mesh
        geometry={nodes["Box192_Material_#34_0"].geometry}
        material={materials.Material_34}
        position={[-1.433, -4.762, 0.83]}
        scale={0.506}
      />
    </a.group>
  );
}

export default Keyboard;