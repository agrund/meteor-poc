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

	// Inserting article, saving into db
	publishArticle: function(options){

		// here should be checking of user etc.

		return Articles.insert({
			title: options.title,
			content: options.content
		});
	}
});