$(document).ready(function() {
    $(".right").scroll(function(){
        $("#chevron").css("opacity", 1 - $(".right").scrollTop() / 500);
    })
    $(window).on("resize", function (e) {
      checkScreenSize();
  });

  checkScreenSize();

  function checkScreenSize(){
      var newWindowWidth = $(window).width();
      if (newWindowWidth < 600) {
          
      }
    }
})
