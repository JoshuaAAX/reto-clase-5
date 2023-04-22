import { OrbitControls, Stars} from "@react-three/drei";
import Floor from "./Floor";
import { useRef, useEffect } from "react";
import {SpotLight, TextureLoader} from 'three'
import WallPhoto from './WallPhoto';
import WallVideo from './WallVideo';

import Model from "./Model";
import { useFrame, useLoader } from "@react-three/fiber";

export default function Experience() {

  const [texture] = useLoader(TextureLoader, ["/static/disturb.jpg"]);
  const spotLightRef = useRef();
  const cubeRef = useRef();


  useFrame((state, delta) => {
    cubeRef.current.rotation.y += delta;

 })


  
  return (
    <>
      <OrbitControls makeDefault />

      <ambientLight intensity={0.3} />

      <spotLight ref={spotLightRef}
                 castShadow={true}
                 position={[0, 9, -3]}
                 color="white"
                 intensity={5}
                 angle={Math.PI / 10}
                 distance={100}
                 penumbra={1} 
                 map={texture} />
 
      <Stars radius={25} depth={60} count={5000} factor={4} saturation={0} fase />
      
      <WallPhoto/>
      <WallVideo/>
      <mesh ref={cubeRef}  
            castShadow={true} 
            receiveShadow = {true}
            position-x={0} 
            position-y={0} 
            position-z={0} 
           
            scale={ 1.5 } >
              <boxGeometry scale={1.5} />
              <meshStandardMaterial color="mediumpurple"  />
       </mesh>
      <Floor/>

    </>
  );
}
