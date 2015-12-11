Posts = new Meteor.Collection('posts');
Things = new Meteor.Collection('things');


if(Meteor.isServer) {
  Posts.remove({});
  Things.remove({});

  Things.insert({
    _id: 'one', title: 'New Meteor Rocks', content: 'Yeah! Check our Meteor!'
  });
  Things.insert({
    _id: 'two', title: 'New Meteor Two', content: 'Hello'
  });

  Posts.insert({
    _id: 'one', title: 'New Meteor Rocks', content: 'Yeah! Check our Meteor Blog for more!', thingsID: 'two'
  });
  Posts.insert({_id: 'two', title: 'MeteorHa++', content: 'Something new soon.', thingsID: 'two'});
  Posts.insert({_id: 'three', title: 'My Secret Post', category: 'private',thingsID: 'two'});
}