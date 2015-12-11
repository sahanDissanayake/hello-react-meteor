// Meteor.publish('posts', function(selector) {
//   return Posts.find(selector);
// });

Meteor.publish('singlePost', function(_id) {
  return Posts.find({_id: _id});
});


Meteor.publishComposite('posts', function(selector) {
    return {
        find: function() {
            // Find posts made by user. Note arguments for callback function
            // being used in query.
            return Posts.find(selector);
        },
        children: [
            // This section will be similar to that of the previous example.
        ]
    }
});