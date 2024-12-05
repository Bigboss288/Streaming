// const gotLocalDescription = (offer: RTCSessionDescriptionInit) => {
//     console.log('gotLocalDescription invoked:', offer);
//     if (localPeerConnection) {
//       localPeerConnection.setLocalDescription(offer);
//     }
//   };

//   // Handle received remote stream
//   const gotRemoteStream = (event: RTCMediaStreamEvent) => {
//     console.log('gotRemoteStream invoked');
//     const remotePlayer = document.getElementById('peerPlayer') as HTMLVideoElement;
//     if (remotePlayer) {
//       remotePlayer.srcObject = event.stream;
//     }
//   };

//   // Handle ICE candidates
//   const gotLocalIceCandidateOffer = (event: RTCPeerConnectionIceEvent) => {
//     console.log('gotLocalIceCandidateOffer invoked', event.candidate, localPeerConnection?.localDescription);
//     if (!event.candidate && localPeerConnection) {
//       const offer = localPeerConnection.localDescription;
//       // Send the offer to signaling server
//       sendWsMessage('send_offer', {
//         channelName,
//         userId,
//         sdp: offer,
//       });
//     }
//   };

//   export {gotLocalDescription, gotRemoteStream, gotLocalIceCandidateOffer}