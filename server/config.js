FlowRouter.setDeferScriptLoading(true);

Meteor.startup(function() {


    // console.log( Random.secret(120) )
    // console.log( Random.random(120) )
    // console.log( Random.hexString(120) )

    if ( Meteor.users.find().count() === 0 ) {
        var users = [
              {fname:'Josh', lname: 'Wade', email:'hello@yahoo.com'},
            ];
         
        _.each(users, function (user) {
          var id;
         
            id = Accounts.createUser({
                email: user.email,
                password: 'hellomonday',
                profile: { fname: user.fname, lname: user.lname }
            });

            Meteor.users.update(id, {$set: {"emails.0.verified" :true}});
            Roles.addUsersToRoles(id, 'super-admin', Roles.GLOBAL_GROUP);
         });
    }

});

