from datetime import datetime
import io
import os
import pytest
from app import app
from zoom import zoom

@pytest.fixture
def client():
    app.testing = True  # Propagate exceptions
    # app.config['TESTING'] = True  # Enable testing mode
    app.config['WTF_CSRF_ENABLED'] = False  # Disable CSRF if needed
    app.config['UPLOAD_FOLDER'] = 'backend/uploads'  # Ensure this matches your app's config

    # Ensure the upload folder exists
    if not os.path.exists(app.config['UPLOAD_FOLDER']):
        os.makedirs(app.config['UPLOAD_FOLDER'])

    with app.test_client() as client:
        yield client

    # Clean up after tests
    if os.path.exists(app.config['UPLOAD_FOLDER']):
        import shutil
        shutil.rmtree(app.config['UPLOAD_FOLDER'])

# Create a file-like object using io.BytesIO
def fake_file(content):
  io.BytesIO(content.encode('utf-8'))

# /zoom

def test_zoom_request_success(client):
    response = client.get('/zoom?startDate=2018-01-01&endDate=2018-01-02&feature=tas')
    assert response.status_code == 200

def test_zoom_for_existing_data():
    start_date = datetime.strptime('2021-01-02', '%Y-%m-%d')
    end_date = datetime.strptime('2021-01-03', '%Y-%m-%d')
    feature = 'tas'

    result = zoom(start_date, end_date, feature)

    assert result == []