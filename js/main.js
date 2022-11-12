// Мобильное меню бургер
function burgerMenu() {
    const burger = document.querySelector('.burger')
    const menu = document.querySelector('.header__wrapper')
    const body = document.querySelector('body')
    const header = document.querySelector('.header')
    burger.addEventListener('click', () => {
        if (!menu.classList.contains('active')) {
            menu.classList.add('active')
            burger.classList.add('active-burger')
            header.classList.add('active')
            body.classList.add('locked')
        } else {
            menu.classList.remove('active')
            burger.classList.remove('active-burger')
            header.classList.remove('active')
            body.classList.remove('locked')
        }
    })
    // Вот тут мы ставим брейкпоинт навбара
    window.addEventListener('resize', () => {
        if (window.innerWidth > 991.98) {
            menu.classList.remove('active')
            burger.classList.remove('active-burger')
            body.classList.remove('locked')
        }
    })
}
burgerMenu()

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 4,
    spaceBetween: 2,
    // Responsive breakpoints
    breakpoints: {
        //   // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        // when window width is >= 480px
        576: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 30
        },
        // when window width is >= 640px
        992: {
            slidesPerView: 4,
            spaceBetween: 40
        }
        //   // when window width is >= 480px
        //   480: {
        //     slidesPerView: 2,
        //     spaceBetween: 30
        //   },
        //   // when window width is >= 640px
        //   640: {
        //     slidesPerView: 3,
        //     spaceBetween: 40
        //   }
    },

    // // If we need pagination
    // pagination: {
    //   el: '.swiper-pagination',
    // },

    // // Navigation arrows
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // },

    // // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
});

$(function () {

    // set phone mask
    $(".phone").inputmask({
        mask: "99 9999 9999"
    });

    // Anchor link
    $(".scroll-to").bind("click.smoothscroll", function (e) {
        e.preventDefault();

        let target = this.hash,
            $target = $(target);

        $("html, body").stop().animate({
                scrollTop: $target.offset().top,
            },
            900,
            "swing"
        );
    });

    // form validate
    $("button[type=submit]").on("click", function (e) {
        e.preventDefault();
        $(this).parents("form").submit();
    });

    function valEl(el) {
        el.validate({
            ignore: [],
            focusInvalid: false,
            errorPlacement: function (error, element) {},
            rules: {
                name: {
                    required: true,
                    minlength: 3,
                },
                lastName: {
                    required: true,
                    minlength: 3,
                },
                email: {
                    required: true,
                    minlength: 3,
                },
                phone: {
                    requiredphone: true,
                    completephone: true,
                },
            },
            submitHandler: function (form) {
                // document.location.href = "./form-success.html";
                alert('Success');
            },
        });
    }

    jQuery.validator.addMethod(
        "requiredphone",
        function (value, element) {
            return $(element).inputmask("hasMaskedValue");
        },
        "Please fill"
    );

    jQuery.validator.addMethod(
        "completephone",
        function (value, element) {
            return $(element).inputmask("isComplete");
        },
        "Incorrect number"
    );

    $(".js-form").each(function () {
        valEl($(this));
    });

    $('.cookies').on('click', function () {
        $(this).addClass('hidden');
    });

});