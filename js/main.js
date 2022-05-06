const burger = document.querySelector('.open-menu');
const menu = document.querySelector('.header__links-nav');
let menuLinks = menu.querySelectorAll('.header__links-list-link');
let headerContainer = document.querySelector('.header-container');

var $footer = document.querySelector(".footer"),
$footerToggleBtn = document.querySelectorAll(".js-footer-open-toggle"),
$license = document.querySelector(".license"),
$licenseToggleBtn = document.querySelectorAll(".js-license-toggle"),
$information = document.querySelector(".information"),
$informationToggleBtn = document.querySelectorAll(".js-information-toggle"),
$body = document.querySelector("body");

burger.addEventListener('click', function(){
// headerContainer.classList.toggle('visually-hidden');
  menu.classList.toggle('header__links-nav--active');
  burger.classList.toggle('burger--active');
  document.body.classList.toggle('stop-scroll');
});

menuLinks.forEach(function(el) {
  el.addEventListener('click', function() {
    burger.classList.remove('burger--active');
    menu.classList.remove('header__links-nav--active');
    // headerContainer.classList.toggle('visually-hidden');
    document.body.classList.remove('stop-scroll');
  })
})


let amountStatus = false;


var slider = $( "#slider-range" ).slider({
    range: "max",
    min: 0,
    max: 1000,
    value: 0,
    step: 1,
    slide: function( event, ui ) {
        $( "#amount" ).val( ui.value );
        amountStatus = true;
        if ($('#amount').val() < 100000) {
            $('.range__message').addClass('active');
        } else {
            $('.range__message').removeClass('active');
        }
    }
});

var slider2 = $( "#slider-range2" ).slider({
  range: "max",
  min: 0,
  max: 1000,
  value: 0,
  step: 1,
  slide: function( event, ui ) {
      $( "#amount2" ).val( ui.value );
      amountStatus = true;
      if ($('#amount2').val() < 100000) {
          $('.range__message').addClass('active');
      } else {
          $('.range__message').removeClass('active');
      }
  }
});
// $( "#amount" ).val( $( "#slider-range-max" ).slider( "value" ) );

// $( "#amount" ).on( "input", function() {
//     this.value = this.value.replace(/[^\d]/g,'');
//     if (this.value < 5000000) {
//         slider.slider( "value", this.value);
//     } else {
//         this.value = 5000000;
//         slider.slider( "value", this.value);
//     }
// });

// $('.range__message').on('click', function() {
//     $("#amount").val(100000);
//     slider.slider( "value", 100000);
//     $(this).removeClass('active');
//     $('.validate__range').parent().css('border', 'none');
// });

// $("#phone").inputmask({"mask": "+7(\\999) 999-99-99"});
// $("#birthday").inputmask({"mask": "99-99-9999"});

// $('#amount').on('input', function() {
//     amountStatus = true;
//     if ($(this).val() < 100000) {
//         $('.range__message').addClass('active');
//     } else {
//         $('.range__message').removeClass('active');
//         $('#amount').parent('.range__input').css('border', 'none');
//     }
// });