$(document).ready(function () {
    var currentImgIndex = 0;
    var imgs = $(".img-grid img");

    $(".img-grid img").click(function () {
        var imgSrc = $(this).attr("src");
        currentImgIndex = imgs.index(this);
        $(".img-overlay").css("display", "flex");
        $(".zoom-img").append("<img  src='" + imgSrc + "' alt=''>");
        $("body").addClass("overlay-open");
    });

    $(".close-btn").click(function () {
        $(".img-overlay").css("display", "none");
        $(".zoom-img img").remove();
        $("body").removeClass("overlay-open");
    })

    $(".zoom-img").slick({
        arrows: true,
        prevArrow: $(".prev-btn"),
        nextArrow: $(".next-btn"),
        fade: true,
        speed: 500,
    });

    $(".prev-btn").click(function () {
        currentImgIndex--;
        if (currentImgIndex < 0) {
            currentImgIndex = imgs.length - 1;
        }
        var imgSrc = $(imgs[currentImgIndex]).attr("src");
        $(".zoom-img img").css("opacity", "0");
        setTimeout(function () {
            $(".zoom-img img").attr("src", imgSrc);
            $(".zoom-img img").css("opacity", "1");
        }, 500);
    });

    $(".next-btn").click(function () {
        currentImgIndex++;
        if (currentImgIndex >= imgs.length) {
            currentImgIndex = 0;
        }
        var imgSrc = $(imgs[currentImgIndex]).attr("src");
        $(".zoom-img img").css("opacity", "0");
        setTimeout(function () {
            $(".zoom-img img").attr("src", imgSrc);
            $(".zoom-img img").css("opacity", "1");
        }, 500);
    });

});
