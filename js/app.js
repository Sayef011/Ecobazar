

$(document).ready(function(){
    //SEARCH BAR SM
$(".srcBtn").click(function(){
$(".searchBarSm").addClass('active')
})

$(".closeBtn").click(function(){
    $(".searchBarSm").removeClass('active')
})

//BANNER SECTION
$('.slider').slick({
    autoplay: true,
  autoplaySpeed: 2000,
  prevArrow:"#slideLeftArrow",
    nextArrow:"#slideRightArrow",
    dots:true,
    dotsClass: "banner-dots",
  });

})