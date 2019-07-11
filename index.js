$(document).ready(function() {
    $(".right").scroll(function(){
        $("#chevron").css("opacity", 1 - $(".right").scrollTop() / 500);
    })
})
