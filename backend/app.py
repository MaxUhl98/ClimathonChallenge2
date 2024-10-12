# from flask import Flask, request, jsonify, render_template
# from datetime import datetime, timedelta
# from csv_import import read_csv_data

from flask import Flask, request, jsonify, render_template, redirect, url_for, flash
from werkzeug.utils import secure_filename
from datetime import datetime, timedelta
import os

from process_input_file import process_input_file
from csv_import import read_csv_data

app = Flask(__name__)

UPLOAD_FOLDER = 'backend/uploads'
ALLOWED_EXTENSIONS = {'csv'}
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"

@app.route("/timeline", methods=['POST'])
def post_timeline():


    # extract params
    if 'file' not in request.files:
        return 'No file given', 400
    file = request.files['file']
    
    start_day = request.form.get('startDate')
    end_day = request.form.get('endDate')
    time_resolution = request.form.get('timeResolution')
    feature = request.form.get('feature')


    # Validate parameters
    # if not all([start_day, end_day, time_resolution, feature]):
    #     return jsonify({'error': 'Missing parameters'}), 400

    # try:
    #     start_date = datetime.strptime(start_day, '%Y-%m-%d')
    #     end_date = datetime.strptime(end_day, '%Y-%m-%d')
    # except ValueError:
    #     return jsonify({'error': 'Invalid date format. Use YYYY-MM-DD'}), 400

    # if start_date > end_date:
    #     return jsonify({'error': 'startDay must be before endDay'}), 400

    if file.filename == '':
        return 'No selected file', 400
    if file and allowed_file(file.filename):
        filename = secure_filename(file.filename)
        path = os.path.join(app.config['UPLOAD_FOLDER'], filename)

        # Save CSV for further processing
        file.save(path)

        # Process the CSV file as needed
        # process_input_file(path, feature)

        return 'File successfully uploaded', 200
    else:
        return 'Invalid file type', 400

# @app.route('/timeline', methods=['GET'])
# def get_timeline():
#     # Get parameters from request
#     start_day = request.args.get('startDate')
#     end_day = request.args.get('endDate')
#     time_resolution = request.args.get('timeResolution')
#     feature = request.args.get('feature')

#     # Validate parameters
#     if not all([start_day, end_day, time_resolution, feature]):
#         return jsonify({'error': 'Missing parameters'}), 400

#     try:
#         start_date = datetime.strptime(start_day, '%Y-%m-%d')
#         end_date = datetime.strptime(end_day, '%Y-%m-%d')
#     except ValueError:
#         return jsonify({'error': 'Invalid date format. Use YYYY-MM-DD'}), 400

#     if start_date > end_date:
#         return jsonify({'error': 'startDay must be before endDay'}), 400

#     # Determine the time delta based on timeResolution
#     if time_resolution == 'hourly':
#         delta = timedelta(hours=1)
#     elif time_resolution == 'daily':
#         delta = timedelta(days=1)
#     else:
#         return jsonify({'error': 'Invalid timeResolution. Choose from hourly, daily, weekly, monthly.'}), 400

#     # Generate timeline data
#     timeline = []
#     current_time = start_date
#     while current_time <= end_date:
#         # For demonstration purposes, generate dummy data
#         data_point = {
#             'timestamp': current_time.strftime('%Y-%m-%d %H:%M:%S'),
#             'feature': feature,
#             'value': 0  # Placeholder value
#         }
#         timeline.append(data_point)
#         current_time += delta

#     read_csv_data(start_date, end_date)

#     return jsonify({'timeline': timeline})

@app.route('/csv')
def csv():
    start_date = datetime.strptime('2021-01-01', '%Y-%m-%d')
    end_date = datetime.strptime('2021-01-02', '%Y-%m-%d')
    data = read_csv_data(start_date, end_date)
    return render_template('csv.html', data=data)

if __name__ == '__main__':
    app.run(debug=True)