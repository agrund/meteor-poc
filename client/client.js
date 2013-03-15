Meteor.subscribe("articles");

// Routing, more pages ;-)
var Router = Backbone.Router.extend({
	routes: {
		"": "main",
		// this will be http://your_domain/
		"admin": "admin" // http://your_domain/help
	},

	main: function() {
		// Your homepage code
		Session.set('currentPage', 'homePage');
	},

	admin: function() {
		// Help page
		Session.set('currentPage', 'adminPage');

	}
});

var app = new Router();

Meteor.startup(function() {
	Backbone.history.start({
		pushState: true
	});
	console.log(Session.get('currentPage'));
});

// Templates
Template.homePage.allArticles = function() {
	return Articles.find().fetch();
};

Template.mainPage.currentPageContent = function() {
	var pageId = Session.get('currentPage');
	var template = Template[pageId];
	if (!template) return ""; //This page doesn't exist.
	return template();
};



// Events on pages
Template.adminPage.events({
	'click .save': function(event, template) {
		var title = template.find('.title').value;
		var content = template.find('.content').value;

		if(title.length && content.length) {
			Meteor.call('publishArticle', {
				title: title,
				content: content
			});
		}

		template.find('.title').value = "";
		template.find('.content').value = "";
	},

	'click .logout': function(event, template){
		Meteor.logout();
	},

	'click .login': function(event, template){
		var user = template.find('.loginName').value;
		var password = template.find('.password').value;
		Meteor.loginWithPassword(user, password);
	}



});