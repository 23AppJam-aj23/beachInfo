from flask import *
import requests

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/rander')
def rander():
    return render_template('rander.html')

@app.route('/info/<infoNum>')
def info(infoNum):
    response = make_response(render_template('newinfo.html', infoNum=infoNum))
    response.headers['Access-Control-Allow-Origin'] = '*'
    return response

@app.route('/beachData/<beachCode>', methods=['GET'])
def beachData(beachCode):

    url = "https://www.khoa.go.kr/api/oceangrid/beach/search.do"
    params = {
        "ServiceKey": "J17oJtuWp5DrMImonXgIsw==",
        "BeachCode": beachCode,
        "ResultType": "json"
    }

    try:
        response = requests.get(url, params=params)
        response_data = response.json()
        return jsonify(response_data)
    except requests.exceptions.RequestException as e:
        return jsonify({"error": str(e)}), 500
    
@app.route('/ripData', methods=['GET'])
def ripData():

    url = "https://www.khoa.go.kr/api/oceangrid/ripCurrentRecent/search.do"
    params = {
        "ServiceKey": "J17oJtuWp5DrMImonXgIsw==",
        "ResultType": "json"
    }

    try:
        response = requests.get(url, params=params)
        response_data = response.json()
        return jsonify(response_data)
    except requests.exceptions.RequestException as e:
        return jsonify({"error": str(e)}), 500

@app.route('/notice')
def notice():
    return render_template('notice.html')

# @app.route('/newinfo/<infoNum>')
# def newinfo(infoNum):
#     return render_template('newinfo.html', infoNum=infoNum)

app.run(debug=True, host='0.0.0.0', port=30000)