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

    $("#darkMode").on("click", function () {
        if($("#darkMode:checked").length===0) {
            //SET TO LIGHT MODE
            $(document.body).addClass("bg-white").removeClass("bg-dark");
            $(".jumbotron").removeClass("bg-darker");
            $(".bg-darker").addClass("bg-light").removeClass("bg-darker");
            $("p, li, h1, h2, h3, h4, h5, h6, label").addClass("text-dark").removeClass("text-light");
            $(".card").removeClass("bg-darkgrey");
        }else {
            //SET TO DARK MODE
            $(document.body).addClass("bg-dark").removeClass("bg-white");
            $(".jumbotron").addClass("bg-darker");
            $(".bg-light").addClass("bg-darker").removeClass("bg-light");
            $("p, li, h1, h2, h3, h4, h5, h6, label").addClass("text-light").removeClass("text-dark");
            $(".card").addClass("bg-darkgrey")
        }
    });
});