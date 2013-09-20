(function($) {

   $.fn.scroll = function() {

       return this.each( function() {


                                   //Get the scroll attr of this clicked item
                                  //Change "." to "#" if using id instead of class

                                var  pos = "."+$(this).attr("scroll");
                                  
								  // animate to move to that element
								   $("html, body").animate({ scrollTop: $(pos).offset().top }, 500);

	   });
   }
                                   
    
  
   
  

}(jQuery))

$(function(){$(".scroll").on('click',function(event) {

$(this).scroll();
});

});
