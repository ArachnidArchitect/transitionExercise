let article = document.querySelector('article');
let artCont1 = document.querySelector('.artCont1');
let artCont2 = document.querySelector('.artCont2');
let artCont3 = document.querySelector('.artCont3');

article.onclick()= func
function displayCont(contNum){
if (contNum == 1) {
    artCont1.style.display = 'block';
    artCont2.style.display = 'none';
    artCont3.style.display = 'none';
}
else if (contNum == 2){
artCont2.style.display = 'block';
artCont1.style.display = 'none';
artCont3.style.display = 'none';
}
else{
    artCont2.style.display = 'none';
    artCont1.style.display = 'none';
    artCont3.style.display = 'block';
}
}
