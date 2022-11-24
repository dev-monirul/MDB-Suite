(function ($) {
    "use strict";

    $("#navbar_top .main-menu a").on("click", function () {
        $("#navbar_top .main-menu").find("li.active").removeClass("active");
        $(this).parent("li").addClass("active");
    });


    $('.header-area .offcanvas_toggler, .offcanvas_close').on('click', function(){
        $('.header-area.offcanvas_menu, .offcanvas_close').toggleClass('offcanvas-menu-show');
    });


    $('.open_filtros_sidebar, .offcanvas__products__filter__area .times').on('click', function(){
        $('.offcanvas__products__filter__area, .offcanvas__products__filter__area .times').toggleClass('offcanvas-productos-filtros');
    });

    $('.products_filter_item_menu.one').on('click', function(){
        $('.filter_mega_menu.one').toggleClass('show_filter_item');
    });
           
    $('.products_filter_item_menu.two').on('click', function(){
        $('.filter_mega_menu.two').toggleClass('show_filter_item');
    });
          
           
    $('.dropdown-mega.dropdown').on('click', function(){
        $('.dropdown-mega.dropdown.active').toggleClass('show_bg_color');
    });
          
           
    $('.dropdown-megamenu.dropdown').on('click', function(){
        $('.dropdown-megamenu.dropdown.active > a').toggleClass('show_border_color');
    });
          
   
           
    $('.mega_submenu_item').on('click', function(){
        $('.nested_sub_menu').toggleClass('active');
    });
          

    /*-----------------------------
Hero area Carousel
------------------------------*/
    $(".hero-area").owlCarousel({
        items: 1,
        dots: true,
        nav: false,
        autoplay: false,
        autoplayTimeout: 4000,
        smartSpeed: 450,
        loop: true,
    });
    // hero slider animation support
    $(".hero-area").on("translate.owl.carousel", function () {
        $(".hero-content-area h1, .hero-content-area h2, .hero-content-area p").removeClass("animated fadeInUp").css({
            opacity: "0",
        });
        $(".hero-content-area a").removeClass("animated fadeInUp").css({
            opacity: "0",
        });
    });

    $(".hero-area").on("translated.owl.carousel", function () {
        $(".hero-content-area h1, .hero-content-area h2, .hero-content-area p").addClass("animated fadeInUp").css({
            opacity: "0",
        });
        $(".hero-content-area a").addClass("animated fadeInUp").css({
            opacity: "0",
        });
    });

    /**
     * Back To TOP
     */

    var backtotop = $("#back_to_top");

    $(window).scroll(function () {
        if ($(window).scrollTop() > 300) {
            backtotop.addClass("show");
        } else {
            backtotop.removeClass("show");
        }
    });

    backtotop.on("click", function (e) {
        e.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "300");
    });



    /*-----------------------------  
    Top De Ventas Carousel
    ------------------------------*/
    $(".top-de-ventas-wrapper").owlCarousel({
        items: 4,
        margin:30,
        dots: false,
        nav: true,
        autoplay: false,
        autoplayTimeout: 4000,
        smartSpeed: 450,
        loop: true,
        navText: ["<img src='assets/img/left-arrow-icon.png'>", "<img src='assets/img/right-arrow-icon.png'>"],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },
            992: {
                items: 3,
            },
            1280: {
                items: 4,
            },
        },
    });

    /*-----------------------------  
    Referencia Brand Logo Carousel
    ------------------------------*/
    $(".referencia-brand-logo").owlCarousel({
        items: 6,
        dots: true,
        nav: false,
        margin: 30,
        autoplay: false,
        autoplayTimeout: 4000,
        smartSpeed: 450,
        loop: true,
        navText: ["<img src='assets/img/left-arrow-icon.png'>", "<img src='assets/img/right-arrow-icon.png'>"],
        responsiveClass: true,
        responsive: {
            0: {
                items: 2,
                nav: true,
            },
            576: {
                items: 3,
                nav: true,
            },
            768: {
                items: 4,
                nav: false,
            },
            992: {
                items: 5,
            },
        },
    });

    /*-----------------------------  
    Productos-Destacados Carousel
    ------------------------------*/
    $(".productos-destacados-wrapper").owlCarousel({
        items: 2,
        dots: false,
        nav: true,
        autoplay: false,
        autoplayTimeout: 4000,
        smartSpeed: 450,
        loop: true,
        navText: ["<img src='assets/img/left-arrow-icon.png'>", "<img src='assets/img/right-arrow-icon.png'>"],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 2,
            },
        },
    });

    /*-----------------------------  
    Productos-Destacados Carousel
    ------------------------------*/
    $(".cabello-tienes-wrapper").owlCarousel({
        items: 5,
        margin: 15,
        dots: false,
        nav: false,
        autoplay: false,
        autoplayTimeout: 4000,
        smartSpeed: 450,
        loop: true,
        navText: ["<img src='assets/img/left-arrow-icon.png'>", "<img src='assets/img/right-arrow-icon.png'>"],
        responsiveClass: true,
        responsive: {
            0: {
                items: 2,
                margin: 5,
                nav: true,
            },
            480: {
                items: 2,
                nav: true,
                margin: 5,
            },
            576: {
                nav: true,
                items: 3,
            },
            768: {
                items: 3,
                margin: 5,
            },
            992: {
                items: 4,
            },
            1200: {
                items: 5,
            },
        },
    });

    /*-----------------------------  
    Productos-Destacados Carousel
    ------------------------------*/
    $(".productos-slider-wrapper").owlCarousel({
        items: 1,
        dots: true,
        nav: true,
        autoplay: false,
        autoplayTimeout: 4000,
        smartSpeed: 450,
        loop: true,
        navText: ["<img src='assets/img/left-arrow-icon.png'>", "<img src='assets/img/right-arrow-icon.png'>"],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                margin: 5,
                nav: true,
                dots: false,
            },
            480: {
                nav: true,
                margin: 5,
                dots: false,
            },
            768: {
                nav: true,
                margin: 5,
            },
            992: {
                items: 1,
            },
        },
    });

    /*-----------------------------  
   Fica Producto-wrapper Carousel
   ------------------------------*/
    $(".fica-producto-wrapper").owlCarousel({
        items: 3,
        dots: false,
        nav: false,
        autoplay: false,
        autoplayTimeout: 4000,
        smartSpeed: 450,
        loop: true,
        navText: ["<img src='assets/img/left-arrow-icon.png'>", "<img src='assets/img/right-arrow-icon.png'>"],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                margin: 5,
                nav: true,
            },
            480: {
                items: 2,
                nav: true,
                margin: 5,
            },
            768: {
                items: 3,
                nav: true,
                margin: 5,
            },
            992: {
                items: 4,
            },
        },
    });

    /*-----------------------------  
 pueden-interesar-wrapper Carousel
 ------------------------------*/
    $(".pueden-interesar-wrapper").owlCarousel({
        items: 4,
        dots: false,
        nav: false,
        autoplay: false,
        autoplayTimeout: 4000,
        smartSpeed: 450,
        loop: true,
        navText: ["<img src='assets/img/left-arrow-icon.png'>", "<img src='assets/img/right-arrow-icon.png'>"],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                margin: 5,
                nav: true,
            },
            480: {
                items: 2,
                nav: true,
                margin: 5,
            },
            768: {
                items: 3,
                nav: true,
                margin: 5,
            },
            992: {
                items: 4,
            },
        },
    });

    /*----------------------------
   Nice Select
   ------------------------------ */
    $(document).ready(function () {
        $("select").niceSelect();
    });

    //canvas shop cart
    var user_expander = $("#user_expander");
    if (user_expander.length) {
        $("#user_expander, #close_canvas, #sc-overlay-bg2").on("click", function (e) {
            e.preventDefault();
            $("body").toggleClass("user_expander");
        });
    }
    //Forget Password shop cart
    var forget_password = $("#forget_password");
    if (forget_password.length) {
        $("#forget_password, #close_canvas2, #sc-overlay-bg2").on("click", function (e) {
            $("body").removeClass("user_expander").removeClass("mdb_resiger_canva");
            e.preventDefault();
            $("body").toggleClass("forget_password_canva");
        });
    }

    //Register Form
    var forget_password = $("#mdb_resiger_form");
    if (forget_password.length) {
        $("#mdb_resiger_form, #close_canvas3, #sc-overlay-bg2").on("click", function (e) {
            $("body").removeClass("user_expander").removeClass("forget_password_canva");
            e.preventDefault();
            $("body").toggleClass("mdb_resiger_canva");
        });
    }
})(jQuery);

/*----------------------------
   Sticky menu active
   ------------------------------ */
document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", function () {
        if (window.scrollY > 150) {
            document.getElementById("navbar_top").classList.add("fixed-top");
            // add padding top to show content behind navbar
            navbar_height = document.querySelector(".navbar").offsetHeight;
            document.body.style.paddingTop = navbar_height + "px";
        } else {
            document.getElementById("navbar_top").classList.remove("fixed-top");
            // remove padding top from body
            document.body.style.paddingTop = "0";
        }
    });
});

/**
 * Navbar toggler
 */

const menuBtn = document.querySelector(".navbar-toggler");
let menuOpen = false;
menuBtn.addEventListener("click", () => {
    if (!menuOpen) {
        menuBtn.classList.add("open");
        menuOpen = true;
    } else {
        menuBtn.classList.remove("open");
        menuOpen = false;
    }
});

/*----------------------------
	Search
	------------------------------ */
$(".search-icon-open-close").on("click", function () {
    $(".top-search").slideToggle();
});
$(".close-search").on("click", function () {
    $(".search").slideToggle();
});

/**
 * incress decress number field
 */
function increaseValue() {
    var value = parseInt(document.getElementById("number").value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById("number").value = value;
}

function decreaseValue() {
    var value = parseInt(document.getElementById("number").value, 10);
    value = isNaN(value) ? 0 : value;
    value < 1 ? (value = 1) : "";
    value--;
    document.getElementById("number").value = value;
}

function myFunction() {
    var x = document.getElementById("myInput");
    if (x.type === "password") {
        x.type = "text";
        document.getElementById("hide").style.display = "inline-block";
        document.getElementById("show").style.display = "none";
    } else {
        x.type = "password";
        document.getElementById("hide").style.display = "none";
        document.getElementById("show").style.display = "inline-block";
    }
};

let dropdowns = document.querySelectorAll('.dropdown-toggle')
dropdowns.forEach((dd)=>{
    dd.addEventListener('click', function (e) {
        var el = this.nextElementSibling
        el.style.display = el.style.display==='block'?'none':'block'
    })
});
