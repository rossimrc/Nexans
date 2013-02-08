var app = {
    initialize: function() {
        this.bind();
        /*document.body.addEventListener('touchmove', function(e) {
                                       e.preventDefault();
                                       }, false);*/
		$("#btn-return").click(function(){
			history.back();
		});
        $("#faq dd").hide();
        $("#faq dt").bind("click",function(ev){
			if($(this).next().is(":visible")) {
				$(this).next().hide();
				$(this).removeClass("open-question").addClass("closed-question");
			}
			else {
				$("#faq dd").hide();
				$("#faq dt").removeClass("closed-question");
				$("#faq dt").removeClass("open-question").addClass("closed-question");
				$(this).next().show();
				$(this).removeClass("closed-question").addClass("open-question");
			}
		});
        $(".searchbar input").keydown(function(ev){
			var tx = $.trim(this.value);
			$("#faq dt").each(function(){
				$(this).show();
				//(this).next().hide();
			});
			if(tx == "") return;
			$("#faq dt").each(function(){
				if($(this).text().toUpperCase().search(tx.toUpperCase())==-1){
					$(this).hide();
					$(this).next().hide();
				}
			});
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
