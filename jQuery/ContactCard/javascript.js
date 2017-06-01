
$("button").click( function(){
    var first = $("#first").val()
    var last = $("#last").val()
    var description = $("#description").val()

    $(".rightSide").append("<div class = 'clickable'><h1 class = 'urge'>" + first + "</h1><h1 class = 'urge'>" + last + "</h1><p class = 'urge'>Click for description!</p><h5 class = 'hide'>" + description + "</h5></div>")
})

$(document).on("click", ".clickable", function () {
    $(this).children("h1,p").css("display", "none");
    $(this).children("h5").css("display", "block");



})