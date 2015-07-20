Users = Meteor.users

if (Meteor.isServer) {
  Meteor.publish('me',function(){
    return Users.find({_id:this.userId})
  })

  Meteor.publish('friends', function(friends) {
    return Users.find({
      _id: {
        $in: friends
      }
    }, {
      fields: {
        services: 1,
        profile:1,
        watching:1
      }
    })
  })
}
