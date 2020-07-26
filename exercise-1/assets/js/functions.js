(function(app) { 
	'use strict'; 
	
	var Functions = function() {};
  
	Functions.prototype.init = function() {
        Functions.prototype.inView();
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

    app.Functions = Functions;

    app.ready(function () {
        console.log('Functions Ready');
        Functions.prototype.init()
    })

    app.onLoad(function(){
        console.log('Functions Load');
        
    })


})(window.app);