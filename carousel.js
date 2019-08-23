(function($) {
    // Dynamically render carousel controls
    var $carousels = $('.carousel');
    
    if ($carousels.length > 0) {
        $carousels.each(function(index, carousel) {
            $carousel = $(carousel);
    
            var carouselId = `#${$carousel.attr('id')}`;
    
            var numberOfSlides = $carousel.find('.carousel-item').length;
    
            if (numberOfSlides > 1) {
                $carousel.append('<ol class="carousel-indicators"></ol>');
            
                var $indicators = $carousel.find('.carousel-indicators');
                
                $carousel.find('.carousel-inner').children('.carousel-item').each(function(index, _) {   // '_' denotes unused prop
                    index === 0 ? 
                        $indicators.append(`<li data-target=${carouselId} data-slide-to=${index} class='active'></li>`) :
                        $indicators.append(`<li data-target=${carouselId} data-slide-to=${index}></li>`);
                });
    
                $carousel.append('<div class="carousel-controls"></div>');
                var $controls = $carousel.find('.carousel-controls');
    
                $controls.append(`
                    <div class="carousel-control-prev" href=${carouselId} role="button" data-slide="prev">
                        <div class="carousel-control-box">
                            <span class="carousel-control-prev-icon"></span>
                        </div>
                    </div>
                    <div class="carousel-control-next" href=${carouselId} role="button" data-slide="next">
                        <div class="carousel-control-box">
                            <span class="carousel-control-next-icon"></span>
                        </div>
                    </div>`
                );
            }
        });
    }
})(jQuery);
