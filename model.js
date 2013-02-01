Articles = new Meteor.Collection("articles")

/**
* Working with articles
*/
Articles.allow({
	insert: function(userId, article){
		// no, no .. use  function
	}, 
	remove: function(userId, article){
		// not now babe
	},
	update: function(userId, article){
		// not now
	}
});

/*
* Global methods for working with model
*/
Meteor.methods({

});