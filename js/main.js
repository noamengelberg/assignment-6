



$(document).ready(function() {
//Code that executes when the document is ready

var pageNumberCookie = parseInt(Cookies.get('pageNumber'));
console.log(isNaN(pageNumberCookie));
if (isNaN(pageNumberCookie)) {
  console.log('Empty Cookie');
  Cookies.set('pageNumber', 1);
  pageNumberCookie = parseInt(Cookies.get('pageNumber'));
}

if (pageNumberCookie < 1) {
  var newPageNumber = 1;
}
else {
  var newPageNumber = pageNumberCookie + 1;
}

Cookies.set('pageNumber', newPageNumber);










    $(".next-button").on('click',
    function(){
      $("#chapter1").fadeOut(1000);
      $("#chapter2").fadeIn(2000,function(){console.log(this)});
//Fade out over 1 second

//Fade in over 4 seconds
    }
  )
});
