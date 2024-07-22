$(function () {
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


  $('.shop__price--input').ionRangeSlider({
    type: "double",
    prefix: "$",

    onStart: function (data) {
      $('.shop__price--from').text(data.from);
      $('.shop__price--to').text(data.to);
    },
    onChange: function (data) {
      $('.shop__price--from').text(data.from);
      $('.shop__price--to').text(data.to);
    },
  });

})

