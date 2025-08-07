const heading = document.getElementById('headings-area');
const body = document.getElementById('body-area');
const resultContainer = document.getElementById('result-container');
const resultText = document.getElementById('result-text');

document.getElementById('form-ai').addEventListener('submit', (event) =>{
    event.preventDefault();

    let myNews = heading.value.toString() + body.value.toString();

    if (myNews === ""){
        resultContainer.style.display = 'none';
        return;
    }
    
    fetch('/predict',{
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({news: myNews})
    })
    .then(res => res.json())
    .then(data => {
        let prediction = data.prediction.toString();
        
        if(prediction == 'Real'){
        resultText.textContent = 'The news you provided is reliable.';
        resultContainer.style.backgroundColor = 'rgb(110, 212, 110)';  
    }else{
        resultText.textContent = 'The news you provided is likely false.';
        resultContainer.style.backgroundColor = 'rgb(213, 86, 86)';
      }
      resultContainer.style.display = 'flex';
    })
});