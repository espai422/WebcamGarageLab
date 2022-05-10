import test from "./ws.js";

const getAddr = () => {
    let url = window.location.href;
    let urlist = url.split('/');
    let addr = urlist[2].split(':');

    return addr
};

const [addr, port] = getAddr();

// Web socket connection
const WSurl = `ws://${addr}:${port}/webcamws`;
const WebCamWs = new WebSocket(WSurl);

// Webcam html element img
const webcamImg = document.getElementById('webcam');

// config for WebCam WS
WebCamWs.onopen = (e) => console.log('[WS] Established connection with WebCam WS');
WebCamWs.onclose = (e) => console.log('[WS] Connection closed');
WebCamWs.onerror = (e) => console.log('[WS] Error: ', e);

// Refresh the image
WebCamWs.onmessage = (e) => webcamImg.src = "data:image/jpeg;base64," + e.data;






