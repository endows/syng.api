Router.route('/home',{
  data:{
    contents:function(){
      return Contents.find()
    }
  },
  action:function(){
    if(!Meteor.userId()){
      Router.go('/login')
    }
    Meteor.subscribe('allStatus')
    Meteor.subscribe('users')
    Meteor.subscribe('contents')
    this.render('home')
  }
})
