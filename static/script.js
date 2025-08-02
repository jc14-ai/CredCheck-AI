star1 = document.getElementById('star-1');
star2 = document.getElementById('star-2');
star3 = document.getElementById('star-3');
star4 = document.getElementById('star-4');
star5 = document.getElementById('star-5');

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