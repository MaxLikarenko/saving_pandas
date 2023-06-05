$(document).ready(function(){
  $('#gallery-slider').slick({
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    centerMode: false,
    infinite: true,
    responsive: [
      {
        breakpoint: 1980,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          dots: false,
          autoplay: false,
          infinite: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          dots: false,
          autoplay: false,
          infinite: false
        }
      }
    ]
  });

  $('#testimonials-slider').slick({
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    centerMode: false,
    infinite: true,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });
});
