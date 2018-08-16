$(function() {
  // Фикcированная шапка при скролле
      $("#header").removeClass("default");
      $(".head-anim").removeClass("default");
      $(window).scroll(function(){
        if ($(this).scrollTop() > 0 && $(window).width() > 768) {
          $("#header").addClass("default");
          $(".head-anim").addClass("default").fadeIn('fast');
        } else {
          $("#header").removeClass("default").fadeIn('fast');
          $(".head-anim").hide();
        };
      });

  //Кнопка меню
  
    $(".btn-topmenu").click(function() {
      $("this,.mobile-side,.btn-content").toggleClass("active");
    });

    if ($(window).width() < 768) {
      $('video[id=bgvideo]').remove();
      $(".main-header").addClass("mobile-back").fadeIn('fast');
    };

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Спасибо за сообщение!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

  $("img, a").on("dragstart", function(event) { event.preventDefault(); });

  // accordion
  var acc = document.getElementsByClassName("accordion");
  var i;

  for (i = 0; i < acc.length; i++) {
      acc[i].onclick = function(){
          this.classList.toggle("active");
          this.nextElementSibling.classList.toggle("show");
      }
  }
  
  // Carousel
 
  $("#owl-demo").owlCarousel({
 
    navigation: true, // Show next and prev buttons
    navigationText : ["<",">"],
    pagination: false,
    slideSpeed: 300,
    paginationSpeed: 400,
    singleItem:true

    // "singleItem:true" is a shortcut for:
    // items : 1, 
    // itemsDesktop : false,
    // itemsDesktopSmall : false,
    // itemsTablet: false,
    // itemsMobile : false

  });

  $(".doors-vekaslide__foto #owl-demo").owlCarousel({

      autoPlay: 3000, //Set AutoPlay to 3 seconds

      items : 2,
      itemsDesktop : [1199,2],
      itemsDesktopSmall : [979,1]

  });


  //Карта гугл
  $('#map, .footer-map').gMap({
    latitude: 55.844607,
    longitude: 37.574148,
    maptype: 'ROADMAP', // 'HYBRID', 'SATELLITE', 'ROADMAP' or 'TERRAIN'
    zoom: 13,
    controls: {
        panControl: true,
        zoomControl: true,
        mapTypeControl: true,
        scaleControl: false,
        streetViewControl: false,
        overviewMapControl: false
    },
    markers: [
  {
    latitude: 55.844607,
    longitude: 37.574148,
    icon: {
      image: "img/gmap_pin.png",
      iconsize: [26, 46],
      iconanchor: [12,46]
  }
      }]
  });

});



