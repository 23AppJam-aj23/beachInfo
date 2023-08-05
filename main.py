from flask import *

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/info/<infoNum>')
def info(infoNum):
    return render_template('info.html', infoNum=infoNum)

app.run(debug=True, host='0.0.0.0', port=30000)