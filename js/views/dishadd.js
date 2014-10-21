var eatz =  eatz || {};

// note View-name (HomeView) matches name of template HomeView.html
eatz.DishAddView = Backbone.View.extend({
	initialize: function (m) {
		console.log(m);

		this.render(m);
    },

    events:{
    	'click #create' : "createDish",
    	'click #cancel' : "redirect"
    },

    createDish:function(e){
    	console.log(e.currentTarget.form);
        //eatz.dishes.create()
    	//create the model

    },
    redirect:function(){
    	app.navigate('',true);
    },
    render: function (m) {
		console.log(m.toJSON());
		this.$el.html(this.template());  // create DOM content for HomeView
		return this;    // support chaining
    }
});
