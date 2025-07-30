import flask
import joblib

def load_model():
    model = joblib.load('Training/model.pkl')
    
    print("model returned!")
    return model

if __name__ == '__main__':
    model = load_model()
    print('Ready!')