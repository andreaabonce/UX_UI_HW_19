$(document).ready(function() {
    function fade() {
        console.log("Fade function called");
        $(".preloader").fadeOut("slow", function() {
            console.log("Fade out completed");
        });
    }
    setTimeout(fade, 3000);
});
