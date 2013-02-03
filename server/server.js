// Publishing data
Meteor.publish("articles", function() {
	return Articles.find({});
});

Meteor.publish("userData", function () {
  return Meteor.users.find({_id: this.userId},
                           {fields: {'other': 1, 'things': 1}});
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

	// create admin user account
	// using Account module
	if (Meteor.users.find({}).count() == 0){
		Accounts.createUser({
			username: "admin",
			email: "admin@admin.com",
			password: "admin"
		});
	}

});