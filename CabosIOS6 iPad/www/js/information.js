var app = {
    initialize: function() {
        this.bind();
        /*document.body.addEventListener('touchmove', function(e) {
                                       e.preventDefault();
                                       }, false);*/
								
		var $faqdd = $("#faq dd");
		var $faqdt = $("#faq dt");
		
		$("#btn-return").click(function(){
			history.back();
		});
        $faqdd.hide();
        $faqdt.bind("click",function(ev){
			if($(this).next().is(":visible")) {
				$(this).next().hide();
				$(this).removeClass("open-question").addClass("closed-question");
			}
			else {
				$faqdd.hide();
				$faqdt.removeClass("closed-question");
				$faqdt.removeClass("open-question").addClass("closed-question");
				$(this).next().show();
				$(this).removeClass("closed-question").addClass("open-question");
			}
		});
        $(".searchbar input").keydown(function(ev){
			var tx = $.trim(this.value);
			$faqdt.each(function(){
				$(this).show();
				//(this).next().hide();
			});
			if(tx == "") return; 
			$faqdt.each(function(){
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
