// first part

const peerA = new RTCPeerConnection(); 
peerA.onicecandidate = e => {
  console.log("New ICE candidate!");
  console.log(JSON.stringify(peerA.localDescription)); 
}

const dataChannel = peerA.createDataChannel("dataChannel");
dataChannel.onopen = e => console.log("Connection opened!");
dataChannel.onmessage = e => console.log("Message:: " + e.data);
dataChannel.onclose = e => console.log("Connection closed!"); 

peerA.createOffer().then(offer => peerA.setLocalDescription(offer));


// second part

const answer = {"type":"offer","sdp":"v=0\r\no=- 1025678902123245678 1 IN IP4 127.0.0.1\r\ns=-\r\nt=0 0\r\na=group:BUNDLE 0\r\na=extmap-allow-mixed\r\na=msid-semantic: WMS\r\nm=application 9 UDP/DTLS/SCTP webrtc-datachannel\r\nc=IN IP4 0.0.0.0\r\na=candidate:1234567890 1 udp 1234537151 1c23456f-45e6-79d1-1a2b-c2bcdc62fcad.local 63255 typ host generation 0 network-cost 999\r\na=ice-fzraZ:rAbq\r\na=ice-pwd:/cbnANzs+A2s8KHho3gzUKyZ\r\na=ice-options:trickle\r\na=fingerprint:sha-256 27:45:0d:7b:e0:39:95:dc:00:68:b6:7f:85:de:81:10:ee:8a:36:3d:50:6e:2a:b7:c6:7c:96:01:6c:66:f5:1f\r\na=setup:actpass\r\na=mid:0\r\na=sctp-port:5000\r\na=max-message-size:252134\r\n"};
peerA.setRemoteDescription(answer)
  .then(e => console.log("Offer set!"));


// third part

dataChannel.send("hello");