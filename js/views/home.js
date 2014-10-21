var eatz =  eatz || {};

// note View-name (HomeView) matches name of template HomeView.html
eatz.HomeView = Backbone.View.extend({

    initialize: function () {
	this.render();
    },
    events:{
    	'click #browsebtn' : "browse",
    	'click #addbtn' : "add"
    },

    browse:function(){
    	console.log("browse");
    	app.navigate("browse",true);
    },
    add:function(){
    	console.log("add");
    	app.navigate("dishes/add",true);
    },
    render: function () {
	this.$el.html(this.template());  // create DOM content for HomeView
	return this;    // support chaining
    }

});
