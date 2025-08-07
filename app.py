from flask import Flask, request, render_template, jsonify
from flask_cors import CORS
#import joblib
import pickle
import os

app = Flask(__name__)

CORS(app)

model_path = os.path.join('Training','model.pkl')

f = open(model_path, 'rb')
model = pickle.load(f)
f.close()

# model = joblib.load('Training/model.pkl')

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/contact')
def contact():
    return render_template('contact.html')

@app.route('/detector')
def detector():
    return render_template('detector.html')

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()
    news = data.get('news','')
    
    prediction = model.predict([news])     
    
    return jsonify({'prediction': str(prediction[0])})

if __name__ == '__main__':
    app.run(debug=True)