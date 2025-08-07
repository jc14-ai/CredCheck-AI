from flask import Flask, request, render_template, jsonify
import joblib

app = Flask(__name__)
model = joblib.load('Training/model.pkl')

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