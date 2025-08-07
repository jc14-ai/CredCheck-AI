blackFB = document.getElementById('facebook-black');
blackGit = document.getElementById('github-black');
blackLinkedin = document.getElementById('linkedin-black');

whiteFB = document.getElementById('facebook-white');
whiteGit = document.getElementById('github-white');
whiteLinkedin = document.getElementById('linkedin-white');

facebookCont = document.getElementById('facebook-cont');
githubCont = document.getElementById('github-cont');
linkedinCont = document.getElementById('linkedin-cont');

facebookCont.addEventListener('mouseenter',() => {
    facebookCont.src = whiteFB.src;
});
githubCont.addEventListener('mouseenter',() => {
    githubCont.src = whiteGit.src;
})
linkedinCont.addEventListener('mouseenter',() => {
    linkedinCont.src = whiteLinkedin.src;
});

facebookCont.addEventListener('mouseleave',() => {
    facebookCont.src = blackFB.src;
});
githubCont.addEventListener('mouseleave',() => {
    githubCont.src = blackGit.src;
});
linkedinCont.addEventListener('mouseleave',() => {
    linkedinCont.src = blackLinkedin.src;
});