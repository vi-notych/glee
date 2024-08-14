$(function () {

  $('.product__tab').on('click', function (e) {
    e.preventDefault();
    $('.product__tab').removeClass('product__tab--active');
    $(this).addClass('product__tab--active');

    $('.product__text-content').removeClass('product__text-content--active');
    $($(this).attr('href')).addClass('product__text-content--active');
  });


  $('.product__slide-thumbs').slick({
    asNavFor: '.product__slide-big',
    focusOnSelect: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    draggable: false
  });

  $('.product__slide-big').slick({
    asNavFor: '.product__slide-thumbs',
    draggable: false,
    arrows: false,
    fade: true
  });



  $('.product__items').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="product__slick-prev"><img src="images/arrow-left.svg" alt=""></button>',
    nextArrow: '<button type="button" class="product__slick-next"><img src="images/arrow-rigth.svg" alt=""></button>'
  });



  $('.slider__inner').slick({
    dots: true,
    arrows: false,
    fade: true,
    //autoplay: true,
    //autoplaySpead: 2000
  })



  $('.product__count').styler();



  $('.shop__filter-btn').on('click', function () {
    $('.shop__filter-btn').removeClass('shop__filter-btn--active');
    $(this).addClass('shop__filter-btn--active');
  });

  $('.button-list').on('click', function () {
    $('.product-card').addClass('product-card--list');
  });

  $('.button-grid').on('click', function () {
    $('.product-card').removeClass('product-card--list');
  });



  var containerEl1 = document.querySelector('[data-ref="container-1"]');
  var containerEl2 = document.querySelector('[data-ref="container-2"]');

  var config = {
    controls: {
      scope: 'local'
    }
  };

  if (containerEl1) mixitup(containerEl1, config);
  if (containerEl2) mixitup(containerEl2, config);



  $('.filter__price').ionRangeSlider({
    type: "double",
    prefix: "$",

    onStart: function (data) {
      $('.filter__price--from').text(data.from.toFixed(2));
      $('.filter__price--to').text(data.to.toFixed(2));
    },
    onChange: function (data) {
      $('.filter__price--from').text(data.from.toFixed(2));
      $('.filter__price--to').text(data.to.toFixed(2));
    },
  });


  $(".filter__star").rateYo({
    starWidth: "15px",
    spacing: "4px",
    normalFill: "#ccccce",
    ratedFill: "#ffc35b",
    readOnly: true,
  });

  $(".product-card__star").rateYo({
    starWidth: "20px",
    spacing: "4px",
    normalFill: "#ccccce",
    ratedFill: "#ffc35b",
    readOnly: true,
  });

  $(".product__star").rateYo({
    starWidth: "20px",
    spacing: "4px",
    normalFill: "#ccccce",
    ratedFill: "#ffc35b",
    readOnly: true,
  });

})



