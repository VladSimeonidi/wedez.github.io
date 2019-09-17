$(document).ready(function(){
$('.members').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 661,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
$('.review').slick({
	arrows: true,
	dots: true,
	infinite: false,
	responsive: [
    {
      breakpoint: 680,
      settings: {
        arrows: false,
      }
    },
  ]
});
});