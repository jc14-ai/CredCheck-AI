const star1 = document.getElementById('star-1');
const star2 = document.getElementById('star-2');
const star3 = document.getElementById('star-3');
const star4 = document.getElementById('star-4');
const star5 = document.getElementById('star-5');

yellowStar = document.getElementById('yellow-star');
blackStar = document.getElementById('black-star');

star1.addEventListener('mouseenter',() =>{
    star1.src = yellowStar.src;
});

star1.addEventListener('mouseleave',() =>{
    star1.src = blackStar.src;
});

star2.addEventListener('mouseenter',() =>{
    star1.src = yellowStar.src;
    star2.src = yellowStar.src;
});

star2.addEventListener('mouseleave',() =>{
    star1.src = blackStar.src;
    star2.src = blackStar.src;
});

star3.addEventListener('mouseenter',() =>{
    star1.src = yellowStar.src;
    star2.src = yellowStar.src;
    star3.src = yellowStar.src;
});

star3.addEventListener('mouseleave',() =>{
    star1.src = blackStar.src;
    star2.src = blackStar.src;
    star3.src = blackStar.src;
});

star4.addEventListener('mouseenter',() =>{
    star1.src = yellowStar.src;
    star2.src = yellowStar.src;
    star3.src = yellowStar.src;
    star4.src = yellowStar.src;
});

star4.addEventListener('mouseleave',() =>{
    star1.src = blackStar.src;
    star2.src = blackStar.src;
    star3.src = blackStar.src;
    star4.src = blackStar.src;
});

star5.addEventListener('mouseenter',() =>{
    star1.src = yellowStar.src;
    star2.src = yellowStar.src;
    star3.src = yellowStar.src;
    star4.src = yellowStar.src;
    star5.src = yellowStar.src;
});

star5.addEventListener('mouseleave',() =>{
    star1.src = blackStar.src;
    star2.src = blackStar.src;
    star3.src = blackStar.src;
    star4.src = blackStar.src;
    star5.src = blackStar.src;
});

const form = document.getElementById('form-ai');
const heading = document.getElementById('headings-area');
const body = document.getElementById('body-area');
const resultContainer = document.getElementById('result-container');
const resultText = document.getElementById('result-text');

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    
    let myNews = heading.textContent.toString() + body.textContent.toString();

    fetch('/predict', {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({news: myNews})
    })
    .then(res => res.json())
    .then(data => {
      resultText.textContent = data.prediction.toString();
      resultContainer.style.display = 'flex';
    });

});