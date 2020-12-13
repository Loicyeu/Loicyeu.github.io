$(window).scroll(function () {
    if($(this).scrollTop()>1)
        console.log("top");
    else
        console.log("not top");
});