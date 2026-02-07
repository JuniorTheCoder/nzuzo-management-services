jQuery( document ).ready(function( $ ) {


	"use strict";


    
        $(function() {
            $( "#tabs" ).tabs();
        });


        // Page loading animation

        $("#preloader").animate({
            'opacity': '0'
        }, 600, function(){
            setTimeout(function(){
                $("#preloader").css("visibility", "hidden").fadeOut();
            }, 300);
        });
        

        $(window).scroll(function() {
          var scroll = $(window).scrollTop();
          var box = $('.header-text').height();
          var header = $('header').height();

          if (scroll >= box - header) {
            $("header").addClass("background-header");
          } else {
            $("header").removeClass("background-header");
          }
        });
		if ($('.owl-partners').length) {
    $('.owl-partners').owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        items: 1, // Change this to the number of items you want to show
        margin: 30,
        autoplay: false,
        smartSpeed: 700,
        autoplayTimeout: 6000,
        responsive: {
            0: {
                items: 1,
                margin: 0
            },
            460: {
                items: 1,
                margin: 0
            },
            576: {
                items: 2,
                margin: 20
            },
            992: {
                items: 3, // Adjust this based on your design
                margin: 30
            }
        }
    });
}

        $(".Modern-Slider").slick({
            autoplay:true,
            autoplaySpeed:10000,
            speed:600,
            slidesToShow:1,
            slidesToScroll:1,
            pauseOnHover:false,
            dots:true,
            pauseOnDotsHover:true,
            cssEase:'linear',
           // fade:true,
            draggable:false,
            prevArrow:'<button class="PrevArrow"></button>',
            nextArrow:'<button class="NextArrow"></button>', 
        });

        function visible(partial) {
            var $t = partial,
                $w = jQuery(window),
                viewTop = $w.scrollTop(),
                viewBottom = viewTop + $w.height(),
                _top = $t.offset().top,
                _bottom = _top + $t.height(),
                compareTop = partial === true ? _bottom : _top,
                compareBottom = partial === true ? _top : _bottom;

            return ((compareBottom <= viewBottom) && (compareTop >= viewTop) && $t.is(':visible'));

        }

        $(window).scroll(function(){

          if(visible($('.count-digit')))
            {
              if($('.count-digit').hasClass('counter-loaded')) return;
              $('.count-digit').addClass('counter-loaded');
              
        $('.count-digit').each(function () {
          var $this = $(this);
          jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
            duration: 3000,
            easing: 'swing',
            step: function () {
              $this.text(Math.ceil(this.Counter));
            }
          });
        });
        }
    })
 
});

// Get all phone links
const phoneLinks = document.querySelectorAll('.phone-link');

// Add click event listener to each phone link
phoneLinks.forEach(link => {
    link.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default anchor behavior
    const phoneNumber = this.getAttribute('data-number'); // Get the phone number from data attribute
    window.location.href = `tel:${phoneNumber}`; // Redirect to the phone call app
    });
});

document.getElementById('email-link').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default anchor behavior
    const email = 'info@nzuzo.co.za';
    const subject = 'Your Subject Here'; // Optional: Set a default subject
    const body = 'Your message here'; // Optional: Set a default body
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(gmailUrl, '_blank'); // Open Gmail in a new tab
});

document.getElementById('view-map').addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default anchor click behavior
        // Open Google Maps with the specified location
        const location = '88 Marshall Street, Johannesburg'; // You can also use coordinates
        const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location)}`;
        window.open(googleMapsUrl, '_blank'); // Open in a new tab
    });

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Send email using EmailJS
    emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
        from_name: name,
        from_email: email,
        message: message
    })
    .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        alert('Message sent successfully!');
    }, function(error) {
        console.log('FAILED...', error);
        alert('Failed to send message. Please try again later.');
    });
});

document.getElementById('callback-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form values
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // Send email using EmailJS
    emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
        from_name: name,
        from_phone: phone,
        from_email: email,
        subject: subject,
        message: message
    })
    .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        alert('Your request has been sent successfully!');
    }, function(error) {
        console.log('FAILED...', error);
        alert('Failed to send your request. Please try again later.');
    });
});