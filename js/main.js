var eatz =  eatz || {};
var dishes = new eatz.Dishes();
eatz.AppRouter = Backbone.Router.extend({

    routes: {
        "": "home",
        "home" : "home",
        "about" : "about",
        "browse" : "browseDishes",
        "dishes/add" : "dishAdd",
        "dishes/:id" : "dishFind"
    },

    initialize: function() {
        this.header();
        this.home();
    },
    dishAdd : function () {
        console.log("Loading dishAdd function");
        var dish = new eatz.Dish();
        if(!this.dishAddView){
            this.dishAddView = new eatz.DishAddView(dish);
        }
        $('#content').html(this.dishAddView.el); 

    },    

    browseDishes : function () {
        console.log("Loading BrowseView function");
        if(!this.browseView){
            this.browseView = new eatz.BrowseView();
        }
        $('#content').html(this.browseView.el); 

    },

    home : function () {
        console.log("Loading homeView function");
        if(!this.homeView){
            this.homeView = new eatz.HomeView();
        }
        $('#content').html(this.homeView.el); 

    },

    header: function () {
        console.log("loading header view");
        if (!this.headerView) {
            this.headerView = new eatz.HeaderView();
        };
        $('#header').html(this.headerView.el);
    },

    about: function(){

        if (!this.aboutView) {

            this.aboutView = new eatz.AboutView();
        };
        $('#content').html(this.aboutView.el);
    }

});

eatz.utils.loadTemplates(['HomeView', 'HeaderView', 'AboutView', 'BrowseView' , 'DishAddView'], function() {
    app = new eatz.AppRouter();
    Backbone.history.start();
});