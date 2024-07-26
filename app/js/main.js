$(function () {

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

  $('.slider__inner').slick({
    dots: true,
    arrows: false,
    fade: true,
    //autoplay: true,
    //autoplaySpead: 2000
  })

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
    starWidth: "15px",
    spacing: "4px",
    normalFill: "#ccccce",
    ratedFill: "#ffc35b",
    readOnly: true,
  });

})



