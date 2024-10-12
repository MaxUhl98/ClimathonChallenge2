# from flask import Flask, request, jsonify, render_template
# from datetime import datetime, timedelta
# from csv_import import read_csv_data

from flask import Flask, request, jsonify
from datetime import datetime

from zoom import zoom

app = Flask(__name__)

UPLOAD_FOLDER = 'backend/uploads'
ALLOWED_EXTENSIONS = {'csv'}
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

@app.route("/")
def hello_world():
    return "<h1>Welcome to ClimateLens!</h1><p>Endpoint: https://127.0.0.1:5000/zoom?startDay=2018-01-01&endDay=2018-01-02&timeResolution=hourly&feature=tas</p>"

@app.route("/zoom", methods=['GET'])
def get_zoom():

    start_string = request.args.get('startDate')
    end_string = request.args.get('endDate')
    feature = request.args.get('feature')

    # Validate parameters
    if not all([start_string, end_string, feature]):
        return jsonify({'error': 'Missing parameters'}), 400

    try:
        start_date = datetime.strptime(start_string, '%Y-%m-%d')
        end_date = datetime.strptime(end_string, '%Y-%m-%d')
    except ValueError:
        return jsonify({'error': 'Invalid date format. Use YYYY-MM-DD'}), 400

    if start_date > end_date:
        return jsonify({'error': 'startDay must be before endDay'}), 400
    
    result = zoom(start_date, end_date, feature)
    
    return jsonify('valid data'), 200