// Publishing data
Meteor.publish("articles", function() {
	return Articles.find({});
});


Meteor.startup(function() {
	// Initialization of startup data 
	// if(Articles.find().count() 0) {
		Articles.remove({});

		Articles.insert({
			title: "Title of article",
			content: "text text"
		});
	// }
});