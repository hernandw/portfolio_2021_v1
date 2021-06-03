$(document).ready(function(){
    $("li > a").click(function(event){
event.preventDefault();

var gato = this.hash;

$("html").animate({
    scrollTop: $(gato).offset().top-86,
},
800
);

    });

});

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })

  $(function () {
    $('[data-toggle="popover"]').popover()
  })