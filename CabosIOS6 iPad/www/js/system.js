/*var currentImage = 0;
var numImages;

var interval;
var fn = function(){
    $($("#image-holder img")).hide();
    currentImage++;
    if(currentImage==numImages) currentImage = 0;
    $($("#image-holder img")[currentImage]).show();
    $("#image-index").html(currentImage);
};

var touchStartPosition = 200;
var touchCurrentPosition = 0;
var noChange = false;
var target = 0;*/

var app = {
    initialize: function() {
        //this.bind();
        
        /*$("#faq-button").click(function(){
			document.location.href = "information.html";
		});
        $("#image-holder img").hide();
        $($("#image-holder img")[0]).show();
        numImages = $("#image-holder div").size();
        
        var h = "";
        for(var i = 0; i < numImages; i++)
            h = h + "<div class='image-index-icon'></div>";
        $("#image-index #wrapper").html(h);
		$("#image-index #wrapper").css("position","relative");
        $("#image-index #wrapper").css("left",20*numImages/2);
        $($(".image-index-icon")[0]).addClass("icon-selected");*/
		
		$("#back-button").click(function(){
			history.back();
		});
        
        //window.setInterval(fn,1000);
        /*$(".app")[0].addEventListener('touchmove', function(e) {
			touchCurrentPosition = e.touches[0].pageX;
			e.preventDefault();
		}, false);
        $(".app")[0].addEventListener('touchstart', function(e) {
			if(e.touches[0].pageY < 120) noChange = true;
				touchStartPosition = e.touches[0].pageX;
				//e.preventDefault();
			}, false);
        $(".app")[0].addEventListener('touchend', function(e) {
			if(noChange) {
				noChange = false;
				return;
			}
			console.log(Math.abs(touchCurrentPosition-touchStartPosition));
			$($(".image-index-icon")[currentImage]).removeClass("icon-selected");
			$($("#image-holder img")[currentImage]).hide(200);
			var sign = 0.5;
			if(touchCurrentPosition < touchStartPosition) {
				currentImage++;
				if(currentImage == numImages) currentImage = 0;
			}
			else if (touchCurrentPosition > touchStartPosition) {
				currentImage--;
				sign = 2
				if(currentImage < 0) currentImage = numImages-1;
			}
			//$($("#image-holder img")[currentImage]).show(200);
			$($(".image-index-icon")[currentImage]).addClass("icon-selected");
			//window.scrollBy(297.5*currentImage-window.pageXOffset);
			target = 288*currentImage - 10 * sign;
		}, false);
		
		var interval = window.setInterval(function(){
			var dif = target-window.pageXOffset;
			
			if(dif < 0 ? dif >= 2 : dif <= 2) window.scrollBy(target-window.pageXOffset);
			else window.scrollBy(Math.round(dif/10)+1);
		},1);*/
    },
    bind: function() {
        document.addEventListener('deviceready', this.deviceready, false);
    },
    deviceready: function() {
        // note that this is an event handler so the scope is that of the event
        // so we need to call app.report(), and not this.report()
        app.report('deviceready');
    },
    report: function(id) { 
        console.log("report:" + id);
    }
};
