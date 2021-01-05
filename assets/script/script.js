const jumbostronHeight = document.getElementById("presentation").offsetHeight;
const profilePictureHeight = document.getElementById("profilePicture").offsetHeight;

//Initialize position
document.getElementById("skills").style.marginTop = jumbostronHeight+"px";

$(function () {
    $('[data-toggle="tooltip"]').tooltip();

    $(window).on("scroll", function () {
        let scrollPos = $(this).scrollTop();
        let jumbotron = $("#presentation");

        if(profilePictureHeight-scrollPos>=100) {
            $("#profilePicture").css("height", profilePictureHeight - scrollPos);
            jumbotron.css("height", jumbostronHeight - scrollPos);
            jumbotron.css("padding", "4rem 2rem");
            $(".presentationHide").show();
        } else {
            $("#profilePicture").css("height", 100);
            jumbotron.css("padding", "2rem");
            $(".presentationHide").hide();
            jumbotron.css("height", "auto");
        }
        if(profilePictureHeight-scrollPos>=100)
            $("#skills").css("margin-top", jumbotron.outerHeight()+scrollPos);
    });
})