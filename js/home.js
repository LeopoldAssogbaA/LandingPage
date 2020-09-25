$(document).ready(function(){
   //------ SEQUENCE D'ACCUEIL SUR HOMEPAGE ---------//
  TweenMax.to(".title", 3, {opacity:1, top:"0"});
  TweenMax.to("#imgDev", 3, {opacity:1, delay:4});
  TweenMax.to('#imgMusic', 3, {opacity:1, delay:3});

  //------ GESTION DES LIENS HOME PAGE ---------//

  $( "#imgDev" )
    .mouseover(function() {
      TweenMax.to(".devText", 0.75, {opacity:1, scale:1, rotation:360});
    });
  $( "#imgDev" )
    .mouseout(function() {
      TweenMax.to(".devText", 1, {opacity:0, scale:0, rotation:0});
    });
  $( "#imgMusic" )
    .mouseover(function() {
      TweenMax.to(".musicText", 0.75, {opacity:1, scale:1, rotation:360});
    });
  $( "#imgMusic" )
    .mouseout(function() {
      TweenMax.to(".musicText", 1, {opacity:0, scale:0, rotation:0});
    });
});
