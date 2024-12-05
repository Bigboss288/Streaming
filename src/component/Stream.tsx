import React, { useEffect, useState } from 'react'
import Video from './Video'
import { socket } from './Utility/socket';
// import { gotLocalDescription, gotLocalIceCandidateOffer, gotRemoteStream } from './utility';



const Stream = () => {
  const [videoStream, setVideoStream] = useState<MediaStream>()
  // const [localPeerConnection, setLocalPeerConnection] = useState<RTCPeerConnection | null>(null);

  useEffect(() => {
    navigator.mediaDevices.getUserMedia({ audio: true, video: true })
      .then((mediaStream) => {
        setVideoStream(mediaStream); // Store the stream in state
      })
      .catch((error) => {
        console.error('getUserMedia error:', error);
      });
  }, [])

  const startVideoStreaming = async () => {

    socket.connect();
    socket.emit("message", "socket connected")

    const mediaRecorder: MediaRecorder = new MediaRecorder(videoStream!, {
      // mimeType: 'video/webm; codecs=vp8',
      videoBitsPerSecond: 2500000, // Adjust bitrate for performance
      audioBitsPerSecond: 128000,   // Adjust audio bitrate for clarity
    });

    mediaRecorder.ondataavailable = (stream) => {
      console.log(stream.data)
      socket.emit('stream', stream.data)
    }

    mediaRecorder.start(25);


  }

  // const handleConnection = () => {
  //   if (videoStream) {
  //     console.log('callOnClick invoked');
  //     if (videoStream.getVideoTracks().length > 0) {
  //       console.log(`Using video device: ${videoStream.getVideoTracks()[0].label}`);
  //     }
  //     if (videoStream.getAudioTracks().length > 0) {
  //       console.log(`Using audio device: ${videoStream.getAudioTracks()[0].label}`);
  //     }

  //     // Create PeerConnection and handle the ICE candidates and streams
  //     const peerConnection = new RTCPeerConnection(servers, pcConstraints);
  //     setLocalPeerConnection(peerConnection); // Store peer connection

  //     peerConnection.onicecandidate = gotLocalIceCandidateOffer;
  //     peerConnection.onaddstream = gotRemoteStream;

  //     // Add local stream to peer connection
  //     peerConnection.addStream(videoStream);

  //     // Create and send an offer
  //     peerConnection.createOffer().then(gotLocalDescription);
  //   }
  // }

  return (
    <div>
      <Video localStream={videoStream} />
      <button onClick={() => startVideoStreaming()}>start</button>
    </div>
  )
}

export default Stream
