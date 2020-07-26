(function(app) { 
	'use strict'; 
	
	var Functions = function() {};
  
	Functions.prototype.init = function() {
        Functions.prototype.inView();
        Functions.prototype.dataExtractionForAccordion();
	};
    // My Default script for transtion animation
    Functions.prototype.inView = function() {
        $('.animated').one('inview', function(event, isInView) {
            var _this = $(this);
            var animatedChildren = _this.find('.animated-child');
            if(isInView){
                if(animatedChildren.length > 0) {
                    TweenMax.staggerTo(animatedChildren, 0.4, { y: 0, opacity: 1, delay: 0.1}, 0.2)
                }
            }
        });
    }

    Functions.prototype.setActiveStateForAccordion = function(){
        var flag = false;

        if($(window).outerWidth() < 767){
            flag = true;
        }

        $(".tabs-item").on("click", function(){
            
            TweenMax.set($(this).find("p, li"), {opacity: 0});
            TweenMax.to($(this).find("p, li"), .5, {opacity: 1, ease: Expo.easeInOut});
            if(flag){
                $(this).siblings().removeClass("active");
                $(this).toggleClass("active");
                
            }else {
                $(".tabs-item").removeClass("active");
                $(this).addClass("active");
            }
            
        })
    }

    Functions.prototype.dataExtractionForAccordion = function(){
        var data = obj
        data.forEach( function(e) {
            $(".tabs-wrapper").append("<div class='tabs-item '><div class='tab-header'><h3>"+e.title+"</h3><img src='https://img.icons8.com/windows/64/000000/expand-arrow.png'/></div><div class='tabs-content-container'><div class='tabs-content-wrapper'>"+e.content+"</div></div></div>")
        });
        $(".tabs-item:first-child").addClass("active");
        TweenMax.to($(".tabs-item:first-child").find("p"), .5, {opacity: 1, ease: Expo.easeInOut});
    }

    app.Functions = Functions;

    app.ready(function () {
        console.log('Functions Ready');
        Functions.prototype.init()
    })

    app.onLoad(function(){
        console.log('Functions Load');

        // added a delay since sometimes this laods first before ready
        setTimeout(function(){
            app.Functions.prototype.setActiveStateForAccordion();
        },100)
        
    })


})(window.app);