



$(document).ready(
//Code that executes when the document is ready
    $(".next-button").on('click',
    function(){
      $("#text-chapter1").fadeOut(1000);
      $("#pic-chapter1").fadeOut(1000);
//Fade out over 1 second
      $("#text-chapter2").fadeIn(4000);
      $("#pic-chapter2").fadeIn(4000);
//Fade in over 4 seconds
    }
  )
);
