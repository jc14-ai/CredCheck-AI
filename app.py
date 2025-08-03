from flask import Flask, request, render_template, jsonify
import joblib

app = Flask(__name__)
model = joblib.load('Training/model.pkl')

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()
    news = data.get('news','')
    
    prediction = model.predict([news])     
    
    return jsonify({'prediction': str(prediction[0])})

if __name__ == '__main__':
    app.run(debug=True)