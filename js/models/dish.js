      // name,  // dish name, which will headline it's display in browse view
      // venue,  // establishment where the dish was prepared/sampled/ordered
      // info,   // string of descriptive terms, such as: takeout, burgers, etc
      // numbr,  // venue's street-address number - defaults to "1265"
      // street,  // venue's street name - defaults to "Military Trail"
      // city,   // venue's city name - defaults to "Scarborough"
      // province,  // venue's 2-letter province abbreviation - defaults to ON
      // url  // venue's Web-page address


var eatz =  eatz || {};

eatz.Dish = Backbone.Model.extend({

    idAttribute: "_id",
  
    defaults: {
      // ADD YOUR CODE HERE
      name: "",
      venue:"",
      info:"",
      numbr:"1265",
      street:"Military Trail",
      city:"Scarborough",
      province:"ON",
      url:""
    },
    toggle: function() {
    	console.log("toggle?");
    },
    validate: function(attr){

        var errors = [];
        //name regex

//      var nameRegEx = /[^A-Z]a-z0-9 ]/ ; //Check for any other characters except A-Z, a-z and 0-9

        var nameRegEx = /^[\w\-\s]+$/; //word, - and spaces

        if(nameRegEx.test(attr.name) == false){ //string failed validation!
            errors.push({field:'name', message:"Please Enter a proper name."});
        }

        //return the errors array if the size is >= 1.
        return errors.length > 0 ? errors : false;
    }
});