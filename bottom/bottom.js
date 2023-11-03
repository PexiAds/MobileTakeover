

 $(document).ready(function(){
  var tl = new TimelineMax({delay: 0.4, paused:true})
    .to('.hiddenOnload',{opacity:1,duration:.3})
  ;


  PEXI.inView(function(){
    tl.play()
  });


});



