document.addEventListener('keyup', function( e ) {
  if( e.which == 9 ) {
    let x = document.querySelector('header');
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
} );

/*
var main_courses = ["Filet de turbot de la mer Noire", "Tablier de sapeur", "Gigot d'agneau", "Faisan de forêt", "Trio de quinoa, chou kale et pousses d'épinard"]
var techniques = ["à la cocotte", "minute", "avec sa sauce hollandaise", "façon sud-ouest", "comme chez ma grand-mère", "déglacé au saké", "maturé en fût de chêne"]
var sides = ["une purée de topinambour", "ses frites truffées", "des châtaignes croustillantes", "une brunoise carotte-cèleri", "un oeuf parfait", "sa crème veloutée de fromages affinés"]
var seasonings = ["au yuzu rouge", "au poivre vert de Sichuan", "et une pointe de safran", "à l'ail noir", "et un peu de sucre en poudre"]

var random_main_course = main_courses[Math.floor(Math.random()*main_courses.length)]
var random_technique = techniques[Math.floor(Math.random()*techniques.length)]
var random_side = sides[Math.floor(Math.random()*sides.length)]
var random_seasoning = seasonings[Math.floor(Math.random()*seasonings.length)]

var menu = `${random_main_course} ${random_technique}, avec ${random_side} ${random_seasoning}`
console.log(menu);
*/

//toggle menu
$(document).ready(function(){
  $("#toggle-button").click(function(){
      $("#toggle-menu").toggle();
  });
});

//mise en place d'un menu random et remplacement via querry selector
const changeMenu = () => {
  for (i = 0; i < 1; i++){
    var main_courses = ["Filet de turbot de la mer Noire", "Tablier de sapeur", "Gigot d'agneau", "Faisan de forêt", "Trio de quinoa, chou kale et pousses d'épinard"]
    var techniques = ["à la cocotte", "minute", "avec sa sauce hollandaise", "façon sud-ouest", "comme chez ma grand-mère", "déglacé au saké", "maturé en fût de chêne"]
    var sides = ["une purée de topinambour", "ses frites truffées", "des châtaignes croustillantes", "une brunoise carotte-cèleri", "un oeuf parfait", "sa crème veloutée de fromages affinés"]
    var seasonings = ["au yuzu rouge", "au poivre vert de Sichuan", "et une pointe de safran", "à l'ail noir", "et un peu de sucre en poudre"]

    var random_main_course = main_courses[Math.floor(Math.random()*main_courses.length)]
    var random_technique = techniques[Math.floor(Math.random()*techniques.length)]
    var random_side = sides[Math.floor(Math.random()*sides.length)]
    var random_seasoning = seasonings[Math.floor(Math.random()*seasonings.length)]

var menu = `${random_main_course} ${random_technique}, avec ${random_side} ${random_seasoning}`
    let newMenu = document.querySelector('a');
    newMenu.innerHTML = menu;

    console.log(menu);
  }
}

document.querySelector('h4').addEventListener("click", changeMenu);

//mise en place d'un exit popup


function onMouseOut(event) {
  // If the mouse is near the top of the window, show the popup
  if (event.clientY < 50 || event.clientX < 5) {
    // Remove this event listener
    document.removeEventListener("mouseout", onMouseOut);

    // Show the popup
    document.getElementById("popup").style.display = "block";
  }
}

document.addEventListener("mouseout", onMouseOut);
