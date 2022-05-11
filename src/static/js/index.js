const getAddr = () => {
    let url = window.location.href;
    let urlist = url.split('/');
    let addr = urlist[2].split(':');

    return addr
};

const [addr, port] = getAddr();
const WSurl = `ws://${addr}:${port}/webcamws`;

const Status = document.getElementById('status');
const webcamImg = document.getElementById('webcam');

const changeStatus = (status) => {
    if (status === 'Error') {
        Status.style.backgroundColor = 'red';
        Status.textContent = 'ERROR!'
    };

    if (status === 'Connecting') {
        Status.style.backgroundColor = 'lightsalmon';
        Status.textContent = 'Connecting...'
    };

    if (status === 'Connected') {
        Status.style.backgroundColor = 'lightgreen';
        Status.textContent = 'Connected'
    };

    if (status === 'Disconnected') {
        Status.style.backgroundColor = 'lightcoral';
        Status.textContent = 'Disconnected';
        
    }
};

const createWsConnection = () => {
    changeStatus('Connecting')
    // Web socket connection
    let WebCamWs = new WebSocket(WSurl);

    // Webcam html element img

    // config for WebCam WS
    WebCamWs.onopen = () => changeStatus('Connected'); 
    WebCamWs.onclose = () => changeStatus('Disconected'); 
    WebCamWs.onerror = () => changeStatus('Error'); 

    // Refresh the image
    WebCamWs.onmessage = (e) => webcamImg.src = "data:image/jpeg;base64," + e.data;
};


Status.onclick = createWsConnection;

// Creates first Connection
createWsConnection();
