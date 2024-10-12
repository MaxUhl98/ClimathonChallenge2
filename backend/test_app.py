import io
import os
import pytest
from app import app

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

def test_no_file(client):
    response = client.post('/zoom')
    assert response.status_code == 400
    assert b'No file given' in response.data

def test_wrong_file_format(client):
    content = "some dummy file content"
    data = {
      'file': (fake_file(content), 'test.txt') #(io.BytesIO(content.encode('utf-8')), 'test.txt')
    }

    response = client.post('/zoom', content_type='multipart/form-data', data=data)

    assert response.status_code == 400
    assert b'Invalid file type' in response.data

def test_saves_uploaded_file(client):
    csv_content = "Name,Age,City\nAlice,30,New York\nBob,25,Los Angeles"

    # Send POST request to the upload route
    response = client.post('/zoom', content_type='multipart/form-data', data={'file': (fake_file(csv_content), 'test.csv')})

    # Assert that the upload was successful
    assert response.status_code == 200
    assert b'File successfully uploaded' in response.data

    # Check that the file was saved
    uploaded_file_path = os.path.join(app.config['UPLOAD_FOLDER'], 'test.csv')
    assert os.path.exists(uploaded_file_path)

# def test_returns_tas_for_one_day(client):
#     csv_content = "date,station,height,lat,lon,hurs,sfcWind,clt,ps,rsds,tas,tasmin,tasmax,pr\n20210102,A351,18,54.3,9.32,97.0,2.6,7,10055,275.0,3.6541666666666663,2.7,4.2,5.7"

#     form_data={
#       'file': (fake_file(csv_content), 'test.csv'),
#       'feature': 'tas',
#     }
#     response = client.post('/zoom', 
#                            content_type='multipart/form-data',
#                            data=form_data)

#     assert response.status_code == 200
#     expected_csv = "20210102,A351,3.7,3.8,4.0,4.1,4.2,4.0,3.8,3.7,3.6,3.8,3.9,3.9,4.1,3.8,3.7,3.7,3.5,3.5,3.4,3.3,3.3,3.2,3.0,2.7"
#     expected_data= { "timeline": [
#                                   {
#                                     "feature": "tas",
#                                     "timestamp": "2021-01-02 00:00:00",
#                                     "value": 3.7
#                                   },
#         ]}

#     assert response.data == expected_csv
