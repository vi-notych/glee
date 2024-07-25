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

})



