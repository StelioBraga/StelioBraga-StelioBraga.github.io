function goToProject(){
  let body = $("html, body");
  body.stop().animate({scrollTop:$('#project').offset().top}, '400');
}

function goToContact(){
  let body = $("html, body");
  body.stop().animate({scrollTop:$('#contact').offset().top}, '400');
}

