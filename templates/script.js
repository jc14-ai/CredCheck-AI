star1 = document.getElementById('star-1');
star2 = document.getElementById('star-2');
star3 = document.getElementById('star-3');
star4 = document.getElementById('star-4');
star5 = document.getElementById('star-5');

star1.addEventListener('mouseenter',() =>{
    star1.src = '/src/yellow_star.png';
});

star1.addEventListener('mouseleave',() =>{
    star1.src = '/src/black_star.png';
});

star2.addEventListener('mouseenter',() =>{
    star1.src = '/src/yellow_star.png';
    star2.src = '/src/yellow_star.png';
});

star2.addEventListener('mouseleave',() =>{
    star1.src = '/src/black_star.png';
    star2.src = '/src/black_star.png';
});

star3.addEventListener('mouseenter',() =>{
    star1.src = '/src/yellow_star.png';
    star2.src = '/src/yellow_star.png';
    star3.src = '/src/yellow_star.png';
});

star3.addEventListener('mouseleave',() =>{
    star1.src = '/src/black_star.png';
    star2.src = '/src/black_star.png';
    star3.src = '/src/black_star.png';
});

star4.addEventListener('mouseenter',() =>{
    star1.src = '/src/yellow_star.png';
    star2.src = '/src/yellow_star.png';
    star3.src = '/src/yellow_star.png';
    star4.src = '/src/yellow_star.png';
});

star4.addEventListener('mouseleave',() =>{
    star1.src = '/src/black_star.png';
    star2.src = '/src/black_star.png';
    star3.src = '/src/black_star.png';
    star4.src = '/src/black_star.png';
});

star5.addEventListener('mouseenter',() =>{
    star1.src = '/src/yellow_star.png';
    star2.src = '/src/yellow_star.png';
    star3.src = '/src/yellow_star.png';
    star4.src = '/src/yellow_star.png';
    star5.src = '/src/yellow_star.png';
});

star5.addEventListener('mouseleave',() =>{
    star1.src = '/src/black_star.png';
    star2.src = '/src/black_star.png';
    star3.src = '/src/black_star.png';
    star4.src = '/src/black_star.png';
    star5.src = '/src/black_star.png';
});