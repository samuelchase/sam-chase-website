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

  $(".menu li a, .arrow-down a, #sun a").on("click", function(e) {
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
  var initLatitude = 40.678832; // <- Latitude here
  var initLongitude = -73.950677; // <- Longitude here
  

  var path= [
    [40.6849333, -74.0353846
    ],
    [40.6806868, -74.0230036
    ],
    [40.6881392, -74.0102363
    ],
    [40.6989909, -74.0030909
    ],
    [40.7020818, -74.0002155
    ],
    [40.7037573, -73.9971685
    ],
    [40.7046194, -73.9937139
    ],
    [40.7049285, -73.9894009
    ],
    [40.7063437, -73.9770412
    ],
    [40.7090926, -73.9727068
    ],
    [40.7092878, -73.9704967
    ],
    [40.7175339, -73.967557
    ],
    [40.7233397, -73.9629221
    ],
    [40.7256977, -73.9618492
    ],
    [40.7282995, -73.9612055
    ],
    [40.7309662, -73.9613557
    ],
    [40.7322995, -73.9623213
    ],
    [40.7339418, -73.9623857
    ],
    [40.735145, -73.9617205
    ],
    [40.7365595, -73.962214
    ],
    [40.7388763, -73.9580083
    ],
    [40.7393641, -73.956002
    ],
    [40.7394047, -73.9539635
    ],
    [40.739047, -73.9516568
    ],
    [40.7363644, -73.9434707
    ],
    [40.7355433, -73.9417648
    ],
    [40.7342669, -73.9406919
    ],
    [40.7335759, -73.9403915
    ],
    [40.7325272, -73.9399624
    ],
    [40.7309581, -73.9391363
    ],
    [40.7299499, -73.9377415
    ],
    [40.7293076, -73.9363468
    ],
    [40.7288279, -73.9346623
    ],
    [40.7285434, -73.9329243
    ],
    [40.7283239, -73.9311218
    ],
    [40.7280149, -73.9297593
    ],
    [40.7274539, -73.9288259
    ],
    [40.7258034, -73.9273238
    ],
    [40.7216728, -73.9255428
    ],
    [40.7203556, -73.9243948
    ],
    [40.7182414, -73.9241481
    ],
    [40.7172818, -73.9231396
    ],
    [40.7162735, -73.9227533
    ],
    [40.7152651, -73.9242983
    ],
    [40.7141307, -73.9239711
    ],
    [40.7138867, -73.9240408
    ],
    [40.7128254, -73.9222813
    ],
    [40.7111014, -73.9217341
    ],
    [40.7105321, -73.920747
    ],
    [40.7094016, -73.9218736
    ],
    [40.7073684, -73.9184725
    ],
    [40.7034157, -73.9117777
    ],
    [40.7023908, -73.9128828
    ],
    [40.7010651, -73.9106512
    ],
    [40.6999426, -73.9117134
    ],
    [40.6981368, -73.9085913
    ],
    [40.6956315, -73.9042354
    ],
    [40.6940859, -73.9057696
    ],
    [40.6916292, -73.9013922
    ],
    [40.6911411, -73.9018643
    ],
    [40.6881555, -73.9004401
    ],
    [40.687946, -73.9009792
    ],
    [40.683508, -73.8970739
    ],
    [40.6826802, -73.8963819
    ],
    [40.6835833, -73.8956845
    ],
    [40.6841853, -73.8952124
    ],
    [40.684763, -73.8946223
    ],
    [40.6854057, -73.8940215
    ],
    [40.6835345, -73.8926268
    ],
    [40.6849745, -73.8901913
    ],
    [40.6842911, -73.8895798
    ],
    [40.6847386, -73.8885713
    ],
    [40.6859264, -73.8874233
    ],
    [40.6876348, -73.8836038
    ],
    [40.6917512, -73.8789475
    ],
    [40.6945414, -73.8740981
    ],
    [40.6950702, -73.8688517
    ],
    [40.6911737, -73.8680685
    ],
    [40.6897907, -73.8677359
    ],
    [40.6884565, -73.8674569
    ],
    [40.6853894, -73.8666201
    ],
    [40.6840877, -73.8664055
    ],
    [40.6819073, -73.8659763
    ],
    [40.6823954, -73.8641524
    ],
    [40.6811181, -73.8638306
    ],
    [40.6790596, -73.8632941
    ],
    [40.6791735, -73.8623071
    ],
    [40.6766023, -73.8617277
    ],
    [40.6712156, -73.8604188
    ],
    [40.6716468, -73.85764
    ],
    [40.6637938, -73.8556552
    ],
    [40.663452, -73.8584018
    ],
    [40.6601152, -73.8576078
    ],
    [40.6596187, -73.8609016
    ],
    [40.6594153, -73.8606977
    ],
    [40.6590327, -73.8605905
    ],
    [40.6587316, -73.8608265
    ],
    [40.658577, -73.861084
    ],
    [40.6582514, -73.8610411
    ],
    [40.6582107, -73.8606656
    ],
    [40.6584305, -73.8599575
    ],
    [40.6582921, -73.8596785
    ],
    [40.657934, -73.8597322
    ],
    [40.6578282, -73.8601077
    ],
    [40.6576084, -73.860172
    ],
    [40.6572747, -73.8600755
    ],
    [40.6571038, -73.8602364
    ],
    [40.6567294, -73.8609016
    ],
    [40.6567701, -73.8619423
    ],
    [40.6565422, -73.8623285
    ],
    [40.6562736, -73.8625109
    ],
    [40.6559073, -73.8624358
    ],
    [40.655712, -73.8621998
    ],
    [40.6554515, -73.8617384
    ],
    [40.655069, -73.8600111
    ],
    [40.6529771, -73.8585305
    ],
    [40.6520736, -73.857404
    ],
    [40.648142, -73.8549685
    ],
    [40.6447419, -73.8541156
    ],
    [40.641833, -73.8534558
    ],
    [40.6425169, -73.8478875
    ],
    [40.6286922, -73.8351631
    ],
    [40.6068501, -73.8334465
    ],
    [40.5893844, -73.8469219
    ],
    [40.5742612, -73.8775635
    ],
    [40.5716534, -73.8908672
    ],
    [40.571197, -73.9046001
    ],
    [40.5664374, -73.9342117
    ],
    [40.5592649, -73.9791012
    ],
    [40.5496623, -74.0387938
    ],
    [40.578214, -74.035042
    ],
    [40.6038587, -74.0416718
    ],
    [40.6263038, -74.0495688
    ],
    [40.6517974, -74.0557058
    ]
  ]
  var map = new GMaps({
    el: '#map-canvas',
    lat: initLatitude,
    lng: initLongitude,
    zoom: 12,
    scrollwheel: false
  });

  map.drawPolygon({
    paths: path,
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#FF0000',
    fillOpacity: 0.35
  });
  // map.addMarker({
  //   lat : initLatitude,
  //   lng : initLongitude,
  //   icon: markerIcon
  // });
  /*===============================================
    end Google Maps
  ===============================================*/

});