//materialize initialization

$('.sidenav').sidenav();
$(".dropdown-trigger-1").dropdown({
    hover: true,
    coverTrigger: false
});
$(".dropdown-trigger").dropdown({
    coverTrigger: false
});
$('.tooltipped').tooltip();
$('.fixed-action-btn').floatingActionButton();
$('.parallax').parallax();

//slick-slider

$('.slick-slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    adaptiveHeight: true,
    adaptiveWidth: true,
    responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 550,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 900,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3
            }
        }
    ]
});
$('.modal').modal();


//Changing opacity of navbar and button

let scrolled;
let menu = $('nav');

document.body.onscroll = function () {
    scrolled = window.pageYOffset;
    if (scrolled >= 62) {
        menu.css({
            'position': 'fixed',
            'top': '0',
            'margin-top': '0'
        });
        $('.arrow-up').fadeIn(300);
    } else {
        menu.css({
            'position': 'absolute',
            'top': '50px',
            'margin-top': '11px'
        });
        $('.arrow-up').fadeOut(300);
    }

    if (scrolled >= 250) {
        $("#bg").addClass('ch-op');
    } else {
        $("#bg").removeClass('ch-op');
    }
}

//Soft scrolling

$('a[href^="#top"]').bind('click.smoothscroll', function (e) {
    e.preventDefault();

    let target = this.hash,
        $target = $(target);

    $('html, body').stop().animate({
        'scrollTop': $target.offset().top
    }, 500, 'swing', function () {
        window.location.hash = target;
    });
});

//tabs

$(".tabs").tabs();

