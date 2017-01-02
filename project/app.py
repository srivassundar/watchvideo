"""Flask App."""
from flask import Flask, render_template
from flask_socketio import SocketIO, emit

app = Flask(__name__)
app.config['SECRET_KEY'] = 'secret_key'
socketio = SocketIO(app)


@app.route('/')
def main():
    return render_template('hwreact.html')


@app.route('/socketchat')
def socketchat():
    return render_template('socketioreact.html')


@socketio.on('connect')
def newconn():
    print("Connected")


@socketio.on('disconnect')
def disconnect():
    print("Disconnected")


@socketio.on('submit_message')
def new_message(msg):
    print("Received", msg['data'])
    emit('new_message', {'data': msg['data']})


test_messages = [
  'Hello',
  'How\'s it going?',
]


@socketio.on('messages_request')
def send_all_messages():
    emit('messages_response', {'data': test_messages})


if __name__ == '__main__':
    socketio.run(app, debug=True)
