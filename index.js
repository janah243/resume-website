$(".dropdown-content").hide();

$(".dropdown").on("click", function () {
    $('.dropdown-content').slideToggle();
})

$(".dropdown-content a").on("click", function () {
    $(".dropdown-content").slideToggle();
})

$('a[href*="#"]').on('click', function (e) {
    e.preventDefault()

    $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top,
        },
        500,
        'linear'
    )
})