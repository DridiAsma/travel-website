// $( function() {
//     $( "#speed" ).selectmenu();
 
   
//   } );




  var p_carousel_3 = $('.explore');
  if (p_carousel_3.length > 0) {
  
      p_carousel_3.owlCarousel({
          loop: true,
          dots: true,
          margin: 20,
          responsive: {
              0: {
                  items: 1
              },
              320: {
                  items: 1
              },
              480: {
                  items: 1
              },
              600: {
                  items: 1
              },
              767: {
                  items: 1
              },
              992: {
                  items: 2
              },
  
              1024: {
              items: 4,
             
                },
          }
      });
  
     
  }