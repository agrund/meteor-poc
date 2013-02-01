Meteor.subscribe("articles");

Meteor.startup(function(){

});

// Templates


Template.mainPage.allArticles = function() {
	return Articles.find().fetch();
};


