Router.route('/visiters',{
  waitOn:function(){
    Meteor.subscribe('users',Meteor.user().profile.friends)
  },
  data:{
    visiters:function(){
      return Users.find()
    }
  },
  action:function(){
    this.render('visiters')
  }
})
