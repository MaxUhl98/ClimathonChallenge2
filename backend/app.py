from flask import Flask, request, jsonify
from datetime import datetime, timedelta

app = Flask(__name__)

@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"

@app.route('/timeline', methods=['GET'])
def get_timeline():
    # Get parameters from request
    start_day = request.args.get('startDay')
    end_day = request.args.get('endDay')
    time_resolution = request.args.get('timeResolution')
    feature = request.args.get('feature')

    # Validate parameters
    if not all([start_day, end_day, time_resolution, feature]):
        return jsonify({'error': 'Missing parameters'}), 400

    try:
        start_date = datetime.strptime(start_day, '%Y-%m-%d')
        end_date = datetime.strptime(end_day, '%Y-%m-%d')
    except ValueError:
        return jsonify({'error': 'Invalid date format. Use YYYY-MM-DD'}), 400

    if start_date > end_date:
        return jsonify({'error': 'startDay must be before endDay'}), 400

    # Determine the time delta based on timeResolution
    if time_resolution == 'hourly':
        delta = timedelta(hours=1)
    elif time_resolution == 'daily':
        delta = timedelta(days=1)
    else:
        return jsonify({'error': 'Invalid timeResolution. Choose from hourly, daily, weekly, monthly.'}), 400

    # Generate timeline data
    timeline = []
    current_time = start_date
    while current_time <= end_date:
        # For demonstration purposes, generate dummy data
        data_point = {
            'timestamp': current_time.strftime('%Y-%m-%d %H:%M:%S'),
            'feature': feature,
            'value': 0  # Placeholder value
        }
        timeline.append(data_point)
        current_time += delta

    return jsonify({'timeline': timeline})

if __name__ == '__main__':
    app.run(debug=True)