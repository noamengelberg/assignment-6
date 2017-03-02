



$(document).ready(function() {
//Code that executes when the document is ready

var pageNumberCookie = parseInt(Cookies.get('pageNumber'));
console.log(isNaN(pageNumberCookie));
if (isNaN(pageNumberCookie)) {
  console.log('Empty Cookie');
  Cookies.set('pageNumber', 0);
  pageNumberCookie = parseInt(Cookies.get('pageNumber')) || 0;
}

 var chapters = [];
 chapters = $( ".container" );


//todo: 2 container classess - active/non active. when you click the button changes classes accordingly. use cookie for the chapter

    $(".next-button").on('click',
    function(){
      //chapters[pageNumberCookie].removeClass("active");
      //chapters[pageNumberCookie].addClass("hidden");
      //chapters[newPageNumber].removeClass("hidden");
      //chapters[newPageNumber].addClass("active");
      console.log(chapters)
      $(".active").fadeOut(1000);
      var elem = chapters.eq(pageNumberCookie);
      console.log(elem);
      elem.removeClass("active");
      elem.addClass("hidden");
      elem = chapters.eq(pageNumberCookie +1);
      console.log(elem);



      elem.fadeIn(2000,function(){
        console.log(this)
        elem.removeClass("hidden");
        elem.addClass("active");

      });

      var newPageNumber = pageNumberCookie + 1;
      Cookies.set('pageNumber', newPageNumber);


//Fade out over 1 second

//Fade in over 4 seconds
    }
  )
});
