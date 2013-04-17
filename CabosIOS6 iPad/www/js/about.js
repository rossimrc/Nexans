var app = {
    initialize: function() {
        this.bind();
        document.body.addEventListener('touchmove', function(e) {
			//e.preventDefault();
		}, false);
		$("#return-btn").click(function(){
			history.back();
		});
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
