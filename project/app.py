"""Flask App."""
from flask import Flask, render_template

app = Flask(__name__)


@app.route('/')
def main():
    return render_template('hwreact.html')  # render_template('helloworld.html')

if __name__ == '__main__':
    app.run(debug=True)
