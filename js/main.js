$(function() {
  // slider
  const $slider = $('.comments-slider');
  const totalSlidesCount = $('.comments__item').length;

  const sliderCounterRender = (current) => {
    $('.slider-btn__page-numb').html(`${current} из ${totalSlidesCount}`)
  };

  sliderCounterRender(1, totalSlidesCount);

  $slider.slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    centerMode: true,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 1,
          variableWidth: false,
        }
      },
    ]
  });

  $slider.on('afterChange', (event, slick, currentSlide) => {
    const counter = currentSlide + 1;

    sliderCounterRender(counter);
  })

  window.prevComment = () => $slider.slick('slickPrev');
  window.nextComment = () => $slider.slick('slickNext');

  // mobile nav
  $(document).on('click', '.burger-menu__btn', (e) => {
    e.preventDefault();

    $('body').toggleClass('modal');
    $('.nav__menu, .burger-menu').toggleClass('active');
  })

  // form
  $('#registration').on('submit', function(e) {
    e.preventDefault();

    const $form = $(this);

    $.ajax({
      method: $form.attr('method'),
      url: $form.attr('action'),
      data: $form.serialize()
    })
    .done(() => {
      alert('Отправлено успешно')
    })
    .fail(() => {
      alert('Ошибка отправки')
    })
  })
})