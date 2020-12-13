const jumbostronHeight = document.getElementsByClassName("jumbotron")[0].offsetHeight;
const profilePictureHeight = document.getElementById("profilePicture").offsetHeight;


$(function () {

    $(window).on("scroll", function () {
        let scrollPos = $(this).scrollTop();
        let jumbotron = $(".jumbotron");

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
    });
})