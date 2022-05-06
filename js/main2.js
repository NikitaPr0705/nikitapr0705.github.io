$(function(){

	// open footer data
	var $footer = document.querySelector(".footer"),
		$footerToggleBtn = document.querySelectorAll(".js-footer-open-toggle"),
		$license = document.querySelector(".license"),
		$licenseToggleBtn = document.querySelectorAll(".js-license-toggle"),
		$information = document.querySelector(".information"),
		$informationToggleBtn = document.querySelectorAll(".js-information-toggle"),
		$body = document.querySelector("body");

	$footerToggleBtn.forEach(function (e) {
		e.addEventListener("click", function () {
			$footer.classList.toggle("active");
		});
	}),
	$licenseToggleBtn.forEach(function (e) {
		e.addEventListener("click", function () {
			$license.classList.toggle("active"), $body.classList.toggle("overflow-hidden");
		});
	}),
	$informationToggleBtn.forEach(function (e) {
		e.addEventListener("click", function () {
			$information.classList.toggle("active"), $body.classList.toggle("overflow-hidden");
		});
	});

    // var modal = $('[data-remodal-id=steps-modal]').remodal();

    $('.js-start-test').on('click', function() {
        modal.open();
    });

    let amountStatus = false;

    var slider = $( "#slider-range" ).slider({
        range: "max",
        min: 100000,
        max: 5000000,
        value: 500000,
        step: 100,
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
    $( "#amount" ).val( $( "#slider-range-max" ).slider( "value" ) );

    $( "#amount" ).on( "input", function() {
        this.value = this.value.replace(/[^\d]/g,'');
        if (this.value < 5000000) {
            slider.slider( "value", this.value);
        } else {
            this.value = 5000000;
            slider.slider( "value", this.value);
        }
    });

    $('.range__message').on('click', function() {
        $("#amount").val(100000);
        slider.slider( "value", 100000);
        $(this).removeClass('active');
        $('.validate__range').parent().css('border', 'none');
    });

    $("#phone").inputmask({"mask": "+7(\\999) 999-99-99"});
    $("#birthday").inputmask({"mask": "99-99-9999"});

    $('#amount').on('input', function() {
        amountStatus = true;
        if ($(this).val() < 100000) {
            $('.range__message').addClass('active');
        } else {
            $('.range__message').removeClass('active');
            $('#amount').parent('.range__input').css('border', 'none');
        }
    });

    $('.btn_next').on('click', function(e) {
        e.stopPropagation();
        if ($(this).parents('.steps-modal__item').find('.validate__item').length) {
            $(this).parents('.steps-modal__item').find('.validate__item').each(function() {
                if ($(this).hasClass('validate__mask')) {
                    if ($(this).inputmask("isComplete")){
                        $(this).removeClass('validate__item_disable');
                        $(this).css('border', 'none');
                        if (!$(this).parents('.steps-modal__item').find('.validate__item_disable').length) {
                            $(this).parents('.steps-modal__item').removeClass('steps-modal__item_active');
                            $(this).parents('.steps-modal__item').next('.steps-modal__item').addClass('steps-modal__item_active');
                        }
                    } else {
                        $(this).addClass('validate__item_disable');
                        $(this).css('border', '2px solid red');
                    }
                } else if ($(this).hasClass('validate__range')) {
                    if ($(this).val() < 100000) {
                        $('.range__message').addClass('active');
                        $(this).parent().css('border', '2px solid red');
                    } else {
                        $('.range__message').removeClass('active');
                        $(this).parent().css('border', 'none');
                        $(this).parents('.steps-modal__item').removeClass('steps-modal__item_active');
                        $(this).parents('.steps-modal__item').next('.steps-modal__item').addClass('steps-modal__item_active');
                    }
                } else {
                    if ($(this).val().length < $(this).attr('minimal-length')) {
                        $(this).addClass('validate__item_disable');
                        if ($(this).hasClass('select2-hidden-accessible')) {
                            $(this).parents('.steps-modal__item').find('.select2-selection__rendered').css('border', '2px solid red');
                        } else {
                            $(this).css('border', '2px solid red');
                        }
                    } else {
                        $(this).removeClass('validate__item_disable');

                        if ($(this).hasClass('select2-hidden-accessible')) {
                            $(this).parents('.steps-modal__item').find('.select2-selection__rendered').css('border', 'none');
                        } else {
                            $(this).css('border', 'none');
                        }

                        if (!$(this).parents('.steps-modal__item').find('.validate__item_disable').length) {
                            $(this).parents('.steps-modal__item').removeClass('steps-modal__item_active');
                            $(this).parents('.steps-modal__item').next('.steps-modal__item').addClass('steps-modal__item_active');
                        }
                    }
                }

            });
        } else if ($(this).parents('.steps-modal__item').find('#amount').val() < 100000 && amountStatus == true) {
            $('#amount').parent('.range__input').css('border', '1px solid red');
        } else {
           $(this).parents('.steps-modal__item').removeClass('steps-modal__item_active');
           $(this).parents('.steps-modal__item').next('.steps-modal__item').addClass('steps-modal__item_active');
       }
   });

    $('.validate__item').on('change, input', function() {
        if ($(this).hasClass('validate__mask')) {
            if ($(this).inputmask("isComplete")){
                $(this).removeClass('validate__item_disable');
                $(this).css('border', 'none');
            } else {
                $(this).addClass('validate__item_disable');
                $(this).css('border', '2px solid red');
            }
        } else {
            if ($(this).val().length < $(this).attr('minimal-length')) {
                $(this).addClass('validate__item_disable');

                if ($(this).hasClass('select2-hidden-accessible')) {
                    $(this).parents('.steps-modal__item').find('.select2-selection__rendered').css('border', '2px solid red');
                } else {
                    $(this).css('border', '2px solid red');
                }

            } else {
                $(this).removeClass('validate__item_disable');

                if ($(this).hasClass('select2-hidden-accessible')) {
                    $(this).parents('.steps-modal__item').find('.select2-selection__rendered').css('border', 'none');
                } else {
                    $(this).css('border', 'none');
                }
            }
        }

    });

    $('.btn_prev').on('click', function() {
        $(this).parents('.steps-modal__item').prev('.steps-modal__item').addClass('steps-modal__item_active');
        $(this).parents('.steps-modal__item').removeClass('steps-modal__item_active');
    });

    $("#select").select2({
        placeholder: "Выберите регион из списка",
        dropdownParent: $('.steps-modal__select')
    });

    $('#select').on('select2:opening', function (e) {
        $('.select2-search__field').click();
        $('.select2-search__field').focus();
    });

    $('#select').on('select2:open', function (e) {
        $('.select2-search__field').click();
        $('.select2-search__field').focus();
    });

    $('input[type="text"]').on('keypress', function() {
        if ("1234567890".indexOf(event.key) != -1)
            event.preventDefault();
    });

    $('input[type="number"], #birthday').on('input', function() {
        this.value = this.value.replace(/[^\d]/g,'');
    });

    $('.steps-modal__item__content label').each(function() {
        $(this).on('click', function() {
            var _id = $(this).attr('for');
            $(this).parent().find('input').removeAttr('checked');
            $(this).parent().find('#'+_id).attr('checked', true);
        });
    });

		$('#btnSubmit').on('click', function(e) {
			if ($('#phone').inputmask('isComplete')) {
        var formData = new FormData();

        formData.append('amount', $('[name="amount"]').val());
        formData.append('period', $('[name="period"]:checked').val());
        formData.append('region', $('[name="region"]').val());
        formData.append('city', $('[name="city"]').val());
        formData.append('fullname', $('[name="fullname"]').val());
        formData.append('birthday', $('[name="birthday"]').val());
        formData.append('tell', $('[name="tell"]:checked').val());
        formData.append('phone', $('[name="phone"]').val());
        formData.append('subid', $('[name="subid"]').val());

        fetch('handler.php', {
            method: 'POST',
            body: formData
        })
			}
    });

});