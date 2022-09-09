


$(document).ready(function(){

  var tl = new TimelineMax({delay: 0.4, paused:true})
    .to('.hiddenOnload',0.3, {opacity:1})
  ;


  PEXI.inView(function(){
    tl.play()
  });


});



