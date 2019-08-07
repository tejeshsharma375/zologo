
// properties-slider here

$('.properties-slider').slick({
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false
          }
        }
       
      ]
    });

    // our-client-say slider here
    
 $('.client-slider').slick({
            centerMode: true,
            centerPadding: '0px',
            slidesToShow: 3,
            autoplay: true,
            autoplaySpeed: 2000,
            responsive: [
              {
                breakpoint: 768,
                settings: {
                  arrows: false,
                  centerMode: true,
                  centerPadding: '40px',
                  slidesToShow: 1
                }
              }
             
            ]
          });
 // wow slider here
          new WOW().init();
 // wow slider CLOSE here


 // on scroll 
 
 $(document).ready(function() {
  // Custom 
  var stickyToggle = function(sticky, stickyWrapper, scrollElement) {
    var stickyHeight = sticky.outerHeight();
    var stickyTop = stickyWrapper.offset().top;
    if (scrollElement.scrollTop() >= stickyTop){
      stickyWrapper.height(stickyHeight);
      sticky.addClass("is-sticky");
    }
    else{
      sticky.removeClass("is-sticky");
      stickyWrapper.height('auto');
    }
  };
  
  // Find all data-toggle="sticky-onscroll" elements
  $('[data-toggle="sticky-onscroll"]').each(function() {
    var sticky = $(this);
    var stickyWrapper = $('<div>').addClass('sticky-wrapper'); // insert hidden element to maintain actual top offset on page
    sticky.before(stickyWrapper);
    sticky.addClass('sticky');
    
    // Scroll & resize events
    $(window).on('scroll.sticky-onscroll resize.sticky-onscroll', function() {
      stickyToggle(sticky, stickyWrapper, $(this));
    });
    
    // On page load
    stickyToggle(sticky, stickyWrapper, $(window));
  });
});


// search page filter hide and show

$(document).ready(function(){

            $('#del-btn').on('click',function() {
              $('.search-items-container, .filter-items-container').toggle()
            });

            $('#filter-btn').on('click',function() {
              $('.search-items-container, .filter-items-container').toggle()
            });

             });


// Home detail slider

$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots: false,
  centerMode: true,
  centerPadding: '0px',
  focusOnSelect: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
      
      }
    }
   
  ]
});

// Chart Js


var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['1000-2000 sqft', '1000-2000 sqft', '1000-2000 sqft', '1000-2000 sqft'],
        datasets: [{
            label: 'Price by House Size',
            data: [200,500,900,700],
            backgroundColor: [
                '#0033AA',
                '#0033AA',
                '#0033AA',
                '#0033AA'
            ]
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtzero: true,
                    callback: function(value, index, values) {
                      return '$' + value * 2 ;
                  }
                }
            }]
            
        }
    }
});
		




