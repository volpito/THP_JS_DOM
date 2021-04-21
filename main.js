const paragraph = document.getElementById("paragraph");
console.log(paragraph);

element = document.querySelector('h2');
element.innerHTML = "La vie est canon, comme ma meuf <3";
element.style.color="red";
element.style.backgroundColor = "black";

console.log(element.clientHeight);
console.log(element.clientWidth);

//changement d'image au click sur H1
const changeImg = () => {
  let myImg = document.getElementsByTagName("img")[0];
  myImg.src = "keurkeur.jpeg";
}

document.getElementsByTagName('h1')[0].addEventListener("click", changeImg);

//Récup d'infos sur le click (position & co)
window.addEventListener("click", handleClick);
function handleClick(e){
  console.log(e);
}

//modifier le subTitle au dblClick
const changeTitle = () => {
  let oldTitle = document.querySelector('h2');
  oldTitle.innerHTML = "Sans déc, elle est vraiment belle de ouf";
}

document.getElementsByTagName('h2')[0].addEventListener("dblclick", changeTitle);

//ajouter une classe "red" sur le second texte au hover
function changeColor(){
  let para = document.getElementById('para');
  para.style.color = "red";
}

document.getElementById('para').addEventListener("mouseover", changeColor);

//Afficher ce que l'utilisateur écrit dans un nouvel input dans une nouvelle balise h2 -----------------------------------------xx---------------------------------------
function newText(){
  let text = prompt('Que voulez-vous écrire ?');
  var h1= document.createElement('h2');
  h1.innerHTML = text;
}

document.getElementsByTagName('img')[0].addEventListener("click", newText);
//document.getElementsByTagName('img')[0].removeEventListener("click", newText);