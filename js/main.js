// $(document).ready(function() {
  // grab the initial top offset of the navigation 
    //  var stickyNavTop = $('.').offset().top;
     
     // our function that decides weather the navigation bar should have "fixed" css position or not.
    //  var stickyNav = function(){
    //   var scrollTop = $(window).scrollTop(); // our current vertical position from the top
           
      // if we've scrolled more than the navigation, change its position to fixed to stick to top,
      // otherwise change it back to relative
  //     if (scrollTop > stickyNavTop) { 
  //         $('').addClass('top-nav-contant--fixed');
  //     } else {
  //         $('').removeClass('top-nav-contant--fixed'); 
  //     }
  // };

  // stickyNav();
  // // and run it again every time you scroll
//   $(window).scroll(function() {
//     stickyNav();
//   });
// });


// $(function() {   
//     $('.autoplay').slick({
//         slidesToShow: 2,
//         slidesToScroll: 1,
//         autoplay: false,
//         autoplaySpeed: 2000,
//       nextArrow: '<button class="btn-next"><img src="images/right_arrow_test.png"></button>',
//       prevArrow: '<button class="btn-previous"><img src="images/left_arrow_test.png"></button>',
//    responsive: [
//               {
//                   breakpoint: 768,
//                   settings: {
//                       slidesToShow: 1
//                   }
//               },
//           ] 
//      });
//    });

//    $( document ).ready(function() {
//     $('.navbar_open').on('click', function () {
//       $(this).hide();
//       $('.navbar_close').show();
//     });

//     $('.navbar_close').on('click', function () {
//       $(this).hide();
//       $('.navbar_open').show();
//     });
// });


// collapse tabs js
// $(function () {
  // Smooth Scroll
//   $('a[href*=#]').bind('click', function(e){
//     var anchor = $(this);
//     $('html, body').stop().animate({
//       scrollTop: $(anchor.attr('href')).offset().top
//     }, 1000);
//     e.preventDefault();
//   });
// });

// $('.i-accordion').on('show.bs.collapse', function(n){
//   $(n.target).siblings('.panel-heading').find('.panel-title i').toggleClass('fa-chevron-down fa-chevron-up');
// });
// $('.i-accordion').on('hide.bs.collapse', function(n){
//   $(n.target).siblings('.panel-heading').find('.panel-title i').toggleClass('fa-chevron-up fa-chevron-down');
// });

/* P */
// $('.accordion-2a, .accordion-2b, .accordion-3').on('show.bs.collapse', function(n){
//   $(n.target).siblings('.panel-heading').find('.panel-title i').toggleClass('fa-minus fa-plus');
// });
// $('.accordion-2a, .accordion-2b, .accordion-3').on('hide.bs.collapse', function(n){
//   $(n.target).siblings('.panel-heading').find('.panel-title i').toggleClass('fa-plus fa-minus');
// });

$(document).ready(function(){var n=$(".").offset().top,o=function(){$(window).scrollTop()>n?$("").addClass("top-nav-contant--fixed"):$("").removeClass("top-nav-contant--fixed")};o(),$(window).scroll(function(){o()})}),$(function(){$(".autoplay").slick({slidesToShow:2,slidesToScroll:1,autoplay:!1,autoplaySpeed:2e3,nextArrow:'<button class="btn-next"><img src="images/right_arrow_test.png"></button>',prevArrow:'<button class="btn-previous"><img src="images/left_arrow_test.png"></button>',responsive:[{breakpoint:768,settings:{slidesToShow:1}}]})}),$(document).ready(function(){$(".navbar_open").on("click",function(){$(this).hide(),$(".navbar_close").show()}),$(".navbar_close").on("click",function(){$(this).hide(),$(".navbar_open").show()})}),$(function(){$("a[href*=#]").bind("click",function(n){var o=$(this);$("html, body").stop().animate({scrollTop:$(o.attr("href")).offset().top},1e3),n.preventDefault()})}),$(".i-accordion").on("show.bs.collapse",function(n){$(n.target).siblings(".panel-heading").find(".panel-title i").toggleClass("fa-chevron-down fa-chevron-up")}),$(".i-accordion").on("hide.bs.collapse",function(n){$(n.target).siblings(".panel-heading").find(".panel-title i").toggleClass("fa-chevron-up fa-chevron-down")}),$(".accordion-2a, .accordion-2b, .accordion-3").on("show.bs.collapse",function(n){$(n.target).siblings(".panel-heading").find(".panel-title i").toggleClass("fa-minus fa-plus")}),$(".accordion-2a, .accordion-2b, .accordion-3").on("hide.bs.collapse",function(n){$(n.target).siblings(".panel-heading").find(".panel-title i").toggleClass("fa-plus fa-minus")});

// accordian
(function() {
  
  $(".panel").on("show.bs.collapse hide.bs.collapse", function(e) {
    if (e.type=='show'){
      $(this).addClass('active');
    }else{
      $(this).removeClass('active');
    }
  });  

}).call(this);