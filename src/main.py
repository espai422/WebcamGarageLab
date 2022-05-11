from flask import Flask, render_template 
from flask_sock import Sock

import cv2
import base64


vid_capture = cv2.VideoCapture(1)
image_path = 'frame.png'

app = Flask(__name__)
sock = Sock(app)

# http routes

@app.route('/')
def index():
    return render_template('index.html')


# Web Socket Routes
@sock.route('/webcamws')
def reverse(ws):
    while True:

        ret,frame = vid_capture.read()

        _, JPEG = cv2.imencode('.jpeg', frame)
        img = JPEG.tobytes()
        base64img = base64.b64encode(img).decode('utf-8')

        ws.send(base64img)

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)