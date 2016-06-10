$(function() {

  "use strict";

  /*===============================================
    Preloader
  ===============================================*/
  $(window).load(function () {
    $("body").addClass("loaded");
  });

  /*===============================================
    Smooth Scrolling
  ===============================================*/
  var htmlBody = $("html,body");

  $(".menu li a, .arrow-down a").on("click", function(e) {
      htmlBody.animate({scrollTop: $(this.hash).offset().top}, 800, "easeInOutQuart");  
    e.preventDefault();
  });

  /*===============================================
    Toggle Menu
  ===============================================*/
  var menu = $(".menu");
  var toggleBtn = $(".toggle-btn");

  toggleBtn.on("click", function(e) {
    if (menu.hasClass("show-menu")) {
      menu.removeClass("show-menu");
    }
    else {
      menu.addClass("show-menu");
    }
    e.stopPropagation();
  });

  // Navicon transform into X //
  toggleBtn.on("click", function() {
    if (toggleBtn.hasClass("toggle-close")) {
      toggleBtn.removeClass("toggle-close");
    }
    else {
      toggleBtn.addClass("toggle-close");
    }
  });

  // Close Menu
  $(document).on("click", function() {
    if (menu.hasClass("show-menu")) {
      menu.removeClass("show-menu");
    }
    if (toggleBtn.hasClass("toggle-close")) {
      toggleBtn.removeClass("toggle-close");
    }
  });

  /*===============================================
    Scroll Spy
  ===============================================*/
  $('body').scrollspy({ 
    target: '.menu'
  });

  /*===============================================
    Parallax
  ===============================================*/
  $(".parallax-section").parallax({ 
    speed : 0.3 
  });

  /*===============================================
    Owl Carousel
  ===============================================*/

  // Services slider
  $("#servicesSlider").owlCarousel({
    loop:true,
    items:1,
    margin:30,
    dotsSpeed:500,
    autoplay:true,
    autoplayHoverPause:true,
    autoplayTimeout:4000, // 4 seconds
    autoplaySpeed:500 // 0.5 seconds
  });

  // Resume slider
  $("#resumeSlider").owlCarousel({
    loop:true,
    items:2,
    dots:false,
    margin:50,
    autoplay:false,
    responsive:{
      0:{
          items:1,
          nav:false
      },
      768:{
          items:2,
          nav:false
      }
    }
  });

  // Custom Navigation of Resume
  var resumeNavigation = $("#resumeSlider");
  // Events
  $("#next").on("click", function(){
    resumeNavigation.trigger('next.owl.carousel', [500]);
  })
  $("#prev").on("click", function(){
    resumeNavigation.trigger('prev.owl.carousel', [500]);
  })
  // end Custom Navigation of Resume

  // Testimonial slider
  $("#testimonialSlider").owlCarousel({
    loop:true,
    items:1,
    margin:50,
    dotsSpeed:500,
    autoplay:true,
    autoplayHoverPause:true,
    autoplayTimeout:4000, // 4 seconds
    autoplaySpeed:500 // 0.5 seconds
  });

  // Blog Slider
  $("#blogSlider").owlCarousel({
    loop:true,
    items:2,
    dots:false,
    margin:50,
    autoplay:false,
    responsive:{
      0:{
          items:1,
          nav:false
      },
      768:{
          items:2,
          nav:false
      }
    }
  });

  // Custom Navigation of Blog
  var blogNavigation = $("#blogSlider");
 
  // Events
  $("#next2").on("click", function(){
    blogNavigation.trigger('next.owl.carousel', [500]);
  })
  $("#prev2").on("click", function(){
    blogNavigation.trigger('prev.owl.carousel', [500]);
  })
  // end Custom Navigation of Blog

  /*===============================================
    MixItUp
  ===============================================*/
  $('#mix-container').mixItUp();

  /*===============================================
    Magnific Popup
  ===============================================*/
  $('.lightbox').magnificPopup({ 
    type:'inline',
    fixedContentPos: false,
    removalDelay: 100,
    closeBtnInside: true,
    preloader: false,
    mainClass: 'mfp-fade'
  });

  /*===============================================
    Contact Form
  ===============================================*/
  $("#contactform").on('submit',function(e) {
    var name = $("#name").val();
    var email = $("#email").val();
    var message = $("#message").val();
    if (name == '') {
      $("#name").css('border-color','rgba(255, 0, 0, 0.5)');
    }
    if (email == '') {
      $("#email").css('border-color','rgba(255, 0, 0, 0.5)');
    }
    if (message == '') {
      $("#message").css('border-color','rgba(255, 0, 0, 0.5)');
    }
    else {
      $.ajax({
        url:'contact_form.php',
        data:$(this).serialize(),
        type:'POST',
        success:function(data){
          $("#success").show().fadeIn(1000); //=== Show Success Message==
          $('#contactform').each(function(){
            this.reset();
          });
        },
        error:function(data){
          $("#error").show().fadeIn(1000); //===Show Error Message====
        }
      });
    }
    e.preventDefault();
  });

  /*===============================================
    Google Maps
  ===============================================*/
  var markerIcon = "images/marker.png";
  // Map Initial Location
  var initLatitude = -37.812154; // <- Latitude here
  var initLongitude = 144.954619; // <- Longitude here
  
  var map = new GMaps({
    el: '#map-canvas',
    lat: initLatitude,
    lng: initLongitude,
    zoom: 16,
    scrollwheel: false
  });
  map.addMarker({
    lat : initLatitude,
    lng : initLongitude,
    icon: markerIcon
  });
  /*===============================================
    end Google Maps
  ===============================================*/

});