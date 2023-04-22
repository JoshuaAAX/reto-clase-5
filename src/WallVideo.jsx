import React, { useState } from "react";
import { useVideoTexture } from "@react-three/drei";
import { DoubleSide } from "three";

export default function WallVideo() {
  const videoSrc = "/static/video.mp4";

  const [play, setPlay] = useState(false);

  const videoProps = { start: play, muted: play };
  const videoTexture = useVideoTexture(videoSrc, videoProps);

  const handleVideoClick = () => {
    setPlay(!play);
  };

  return (
    <>
      <React.Suspense fallback={<meshBasicMaterial wireframe />}>
        <mesh
          position-y={2}
          position-x={-3.5}
          rotation-y={Math.PI * 0.5}
          scale={7}
          onClick={handleVideoClick}
        >
          <planeGeometry />
          <meshStandardMaterial
            map={videoTexture}
            toneMapped={false}
            side={DoubleSide}
          />
        </mesh>
      </React.Suspense>
    </>
  );
}
