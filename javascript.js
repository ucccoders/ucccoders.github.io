$(function() {
  $('.nav-disappear').on('click', function(){ 

      
      if($('.navbar-toggler').css('display') !='none'){
          $('.navbar-toggler').trigger( "click" );
      }
  });
});