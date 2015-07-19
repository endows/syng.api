Router.route('/home',{
  data:{
    status:function(){
      return Status.find()
    }
  },
  action:function(){
    if(!Meteor.userId()){
      Router.go('/login')
    }
    Meteor.subscribe('allStatus')
    Meteor.subscribe('users')
    this.render('home')
  }
})
