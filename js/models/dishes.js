 var eatz =  eatz || {};

eatz.Dishes = Backbone.Collection.extend({
	model: eatz.Dish,
	localStorage: new Store('eatz'),

	initialize: function(){
		console.log("Collection initialized");
	}
});

