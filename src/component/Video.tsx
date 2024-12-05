"use client"

import React, { useEffect, useRef } from 'react'

interface VideoProps {
    localStream?: MediaStream; // Define the type explicitly
  }

const Video: React.FC<VideoProps> = ({localStream}) => {
    const videoRef = useRef<HTMLVideoElement>(null)

    useEffect(() => {
        if (localStream && videoRef.current) {
          videoRef.current.srcObject = localStream;
        }
      }, [localStream]);
  
  return (
    <div>
      <video ref={videoRef} autoPlay playsInline muted style={{ width: '100%', maxWidth: '600px' }} />
    </div>
  )
}

export default Video
