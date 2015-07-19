Users = Meteor.users

if (Meteor.isServer) {
  Meteor.publish('users', function(friends) {
    var current_user = Users.findOne(this.userId)
    return Users.find({
      // _id: {
      //   $in: current_user.profile.friends.map(String)
      // }
    }, {
      fields: {
        services: 1,
        profile:1,
        watching:1
      }
    })
  })
}
