



$(document).ready(function() {
//Code that executes when the document is ready

var pageNumberCookie = parseInt(Cookies.get('pageNumber')) || 0;
console.log(isNaN(pageNumberCookie));
if (isNaN(pageNumberCookie)) {
  console.log('Empty Cookie');
  Cookies.set('pageNumber', 0);

}

 var chapters = [];
 chapters = $( ".container" );
 var active = chapters.eq(pageNumberCookie);
active.removeClass("hidden");
 active.addClass("active");

//todo: 2 container classess - active/non active. when you click the button changes classes accordingly. use cookie for the chapter

    $(".next-button").on('click',
    function(){

      console.log(chapters)
      $(".active").fadeOut(1000);
      var elem = chapters.eq(pageNumberCookie);
      console.log(elem);
      elem.removeClass("active");
      elem.addClass("hidden");
      elem = chapters.eq(pageNumberCookie +1);
      console.log(elem);

      elem.removeClass("hidden");
      elem.addClass("active");

      elem.fadeIn(2000,function(){
        console.log(this)


      });
      if (pageNumberCookie<13){
        pageNumberCookie = pageNumberCookie + 1;
      }

        console.log(pageNumberCookie)
      Cookies.set('pageNumber', pageNumberCookie);


    }
  )

  $(".start-over").on('click',
  function(){
    var elem = chapters.eq(pageNumberCookie);
    $(".active").fadeOut(1000);
    elem.removeClass("active");
    elem.addClass("hidden");
    pageNumberCookie=0
    elem = chapters.eq(pageNumberCookie);
    elem.removeClass("hidden");
    elem.addClass("active");
    console.log(chapters);
    Cookies.set('pageNumber', pageNumberCookie);
    $(".active").fadeIn(1000);

  }
)
});
