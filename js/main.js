$(document).ready(function(){
var title = document.getElementsByClassName("title");
var devText = document.getElementsByClassName("devText");
var musicText = document.getElementsByClassName("musicText");

  TweenMax.from(title, 3, {opacity:0, top:"-35%"});

  $( "#imgDev" )
    .mouseover(function() {
      TweenMax.to(devText, 0.75, {opacity:1, scale:1, rotation:360});
    });

    $( "#imgDev" )
      .mouseout(function() {
        TweenMax.to(devText, 1, {opacity:0, scale:0, rotation:0});
      });

    $( "#imgMusic" )
      .mouseover(function() {
        TweenMax.to(musicText, 0.75, {opacity:1, scale:1, rotation:360});
      });
      $( "#imgMusic" )
        .mouseout(function() {
          TweenMax.to(musicText, 1, {opacity:0, scale:0, rotation:0});
        });
});
