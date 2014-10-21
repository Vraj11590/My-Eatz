var eatz =  eatz || {};

// note View-name (HomeView) matches name of template HomeView.html
eatz.DishAddView = Backbone.View.extend({

    el: this.el,


	initialize: function() {

//        var template =  $("#dish_form").html();

		console.log(this.model);
//        console.log(this.template());
	    console.log(this.el);
			this.render();
    },


    events:{
    	'click #create' : "createDish",
    	'click #cancel' : "redirect"
    },

    createDish:function(e){
    },
    redirect:function(){
    	app.navigate('#home',true);
    },
    //render the empty fields with the data from a sample dish model
    render: function() {
//		console.log(m.toJSON());
		this.$el.html(this.template(this.model.toJSON()));  // create DOM content for HomeView
		return this;    // support chaining
    }
});
