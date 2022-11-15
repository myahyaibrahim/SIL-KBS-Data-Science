import os
from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
import joblib

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route('/predict', methods=['POST'])
@cross_origin(origins=['http://localhost:3000/question', 'https://kbs-sil-frontend.vercel.app/question'])
def predict():
    _json = request.json
    PM10 = _json['PM10']
    SO2 = _json['SO2']
    CO = _json['CO']
    O3 = _json['O3']
    NO2 = _json['NO2']
    classifier = joblib.load('classifier.pkl')
    prediction = classifier.predict([[PM10,SO2,CO,O3,NO2]])
    return jsonify({'Kategori Pencemaran': str(prediction[0])})

# app.run(port=5000)

if __name__ == '__main__':
     app.run()