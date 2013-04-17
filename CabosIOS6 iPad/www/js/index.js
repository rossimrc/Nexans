onFSSuccess = function(){
    $("#main-menu li").css("background-color","#f00");
}

onError = function(){
    $("#main-menu li").css("background-color","#0f0");
}

var app = {
    initialize: function() {
        this.bind();
        //var menu = document.getElementById("main-menu");
        /*for(var i = 0; i < menu.childNodes.length; i++)
        {
            if(menu.childNodes.item(i).nodeName == "#text") continue;
            //menu.childNodes.item(i).style.backgroundColor = "black";
            menu.childNodes.item(i).addEventListener("touchstart",function()
            {
                menu.childNodes.item(i).style.backgroundColor = "black";
            });
        }*/
        /*$("#main-menu li").bind('touchstart mousedown',function(){
                                this.style.backgroundColor = "black";
                                });
        $("#main-menu li").bind('touchend mouseup',function(){
                                this.style.backgroundColor = "gray";
                                });*/
		document.body.addEventListener('touchmove', function(e) {
		    e.preventDefault();
	    }, false);
        $("#main-menu li").bind('click',function(){
			document.location.href = this.getAttribute('url');
		});
		
		window.onorientationchange = function() {
			if(window.orientation == 0) {
				$("body").removeClass("rotated");
			}
			else {
				$("body").addClass("rotated");
			}
		}
		
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
        // hide the .pending <p> and show the .complete <p>
    }
};

function shouldRotate()
{
	return "NO";
}
