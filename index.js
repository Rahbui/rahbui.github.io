/*$(document).ready(function() {
    var f = document.getElementById('chevron');
    setInterval(function() {
        f.style.display = (f.style.display == 'none' ? '' : 'none');
    }, 1000);

});*/
$(document).ready(function() {
    $(".right").scroll(function(){
        $("#chevron").css("opacity", 1 - $(".right").scrollTop() / 500);
      });
})
