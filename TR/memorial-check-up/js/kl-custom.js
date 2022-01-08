var shown = 0;
var timeoutt = 0;
;(function($){
	"use strict";

	$(document).ready(function() {
    shown = 0; 
    timeoutt = 0;

	});// end of document ready

})(jQuery);

//show popup upon lost focus
function addEvent(obj, evt, fn) {
    if (obj.addEventListener) {
        obj.addEventListener(evt, fn, false);
    }
    else if (obj.attachEvent) {
        obj.attachEvent("on" + evt, fn);
    }
}
addEvent(window,"load",function(e) {
    addEvent(document, "mouseout", function(e) {
        e = e ? e : window.event;
        var from = e.relatedTarget || e.toElement;
        if (!from || from.nodeName == "HTML") {
            // stop your drag event here
            // for now we can just use an alert
            if (window.shown == 0) {
            document.getElementById('ctabutton').click();
            window.shown = 1;
                }
        }
    });
});

window.setTimeout(function(){
    if (window.timeoutt == 0) {
    document.getElementById('ctabutton').click();
    window.timeout = 1;
    }
}, 20 * 60 * 1000); 



// Scroll to top
	if(KallyasConfig.enableBackToTop){
		if ($('#goB').length) {
			var scrollTrigger = 200, // px
			backToTop = function () {
				var scrollTop = $(window).scrollTop();
				if (scrollTop > scrollTrigger) {
					$('#goB').addClass('show');
				} else {
					$('#goB').removeClass('show');
				}
			};
			backToTop();
			$(window).on('scroll', function () {
				backToTop();
			});
			$('#goB').on('click', function (e) {
				e.preventDefault();
				$('html,body').animate({
					scrollTop: 4000
				}, 700);
			});
		}
	}
// END Scroll to top