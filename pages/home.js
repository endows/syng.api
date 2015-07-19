Router.route('/home',{
  // waitOn:function(){
  //   return [Meteor.subscribe('allStatus'),Meteor.subscribe('users')]
  // },
  data:{
    status:function(){
      return Status.find()
    }
  },
  action:function(){
    Meteor.subscribe('allStatus')
    Meteor.subscribe('users')
    // if(!Meteor.userId()){
    //   Meteor.loginWithTwitter()
    // }
    this.render('home')
  }
})
