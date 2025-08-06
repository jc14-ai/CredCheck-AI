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


const floatingWindow = document.getElementById('floating-window');
const stars =  [star1,star2,star3,star4,star5];

for(let i = 0; i < stars.length; i++){
    stars[i].addEventListener('click',()=>{
        floatingWindow.style.display = 'flex';
    });
}

blackFB = document.getElementById('facebook-black');
blackGit = document.getElementById('github-black');
blackLinkedin = document.getElementById('linkedin-black');

whiteFB = document.getElementById('facebook-white');
whiteGit = document.getElementById('github-white');
whiteLinkedin = document.getElementById('linkedin-white');

facebook = document.getElementById('facebook');
github = document.getElementById('github');
linkedin = document.getElementById('linkedin');

facebook.addEventListener('mouseenter',() => {
    facebook.src = whiteFB.src;
});
github.addEventListener('mouseenter',() => {
    github.src = whiteGit.src;
})
linkedin.addEventListener('mouseenter',() => {
    linkedin.src = whiteLinkedin.src;
});

facebook.addEventListener('mouseleave',() => {
    facebook.src = blackFB.src;
});
github.addEventListener('mouseleave',() => {
    github.src = blackGit.src;
});
linkedin.addEventListener('mouseleave',() => {
    linkedin.src = blackLinkedin.src;
});

const form = document.getElementById('form-ai');
const heading = document.getElementById('headings-area');
const body = document.getElementById('body-area');
const resultContainer = document.getElementById('result-container');
const resultText = document.getElementById('result-text');

form.addEventListener('submit', (e)=>{
    e.preventDefault();

    let myNews = heading.value.toString() + body.value.toString();

    if (myNews === ""){
        resultContainer.style.display = 'none';
        return;
    }
    fetch('/predict', {
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
    });

});