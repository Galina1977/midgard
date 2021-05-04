$(function () {
  // Меню Бургер
  $(".menu-btn").on("click", function () {
    $(".menu__list").toggleClass("menu__list--active");
    $("body").toggleClass("lock");
  });

  // Табы
  $(".tabs__item").on("click", function (e) {
    e.preventDefault();
    $(".tabs__item").removeClass("tabs__item--active");
    $(this).addClass("tabs__item--active");

    $(".tabs__content-item").removeClass("tabs__content-item--active");
    $($(this).attr("href")).addClass("tabs__content-item--active");
  });

  // Слайд slider-tattoo
  $(".slider-tattoo").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    infinite: false,
    prevArrow:
      '<button type="button" class="slick-prev"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-left" class="svg-inline--fa fa-arrow-left fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"></path></svg></button>',
    nextArrow:
      '<button type="button" class="slick-next"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-right" class="svg-inline--fa fa-arrow-right fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path></svg></button>',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          arrows: false,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          arrows: false,
          dots: true,
        },
      },
    ],
  });

  // Липкая кнопка вверх
  $(document).ready(function () {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 0) {
        $("#scroller").fadeIn();
      } else {
        $("#scroller").fadeOut();
      }
    });
    $("#scroller").click(function () {
      $("body,html").animate(
        {
          scrollTop: 0,
        },
        400
      );
      return false;
    });
  });

  // загрузить картинку
  var uploadImageInput = document.querySelector("#upload-image");
  var uploadFileNameElement = document.querySelector(
    ".upload-form__label-file"
  );

  uploadImageInput.addEventListener("change", fileSelectHandler);

  function fileSelectHandler(evt) {
    var file = uploadImageInput.files[0];

    if (file) {
      uploadFileNameElement.textContent = file.name;
    }
  }

  // dots-menu Отзывы
  $(".dots__click").on("click", function () {
    $(this).toggleClass("active");
  });

  // Анимация
  new WOW().init();
  // Отключили анимацию на мобильных устройствах и планшетах main.js
  var wow = new WOW({
    mobile: false,
  });
});
