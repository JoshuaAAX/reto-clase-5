
import React, { useState, useRef } from "react";
import { useTexture } from "@react-three/drei";
import { DoubleSide } from "three";


export default function Sphere() {
  
  const [imageSrc, setImageSrc] = useState('static/imagen1.jpg');

  const texture = useTexture(imageSrc);

  const click = () => {
    if (imageSrc === 'static/imagen1.jpg') {
      setImageSrc(`static/imagen2.jpg`);
    } else {
      setImageSrc(`static/imagen1.jpg`);
    }
  };

  return (
    <>
      <mesh position-y={ 2} 
            position-z={ 3.5} 
            rotation-x={ - Math.PI * 1  } 
            rotation-z={ - Math.PI * 1  }
            scale={7}
            onDoubleClick={click}>

        <planeGeometry />
        <meshStandardMaterial map={texture} side={DoubleSide}/>
      </mesh>
    </>
  );
}