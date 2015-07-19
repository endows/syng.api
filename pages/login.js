Router.route('/login',{
  action:function(){
    if(Meteor.user()){
      Router.go('/home')
    }
    this.render('login')
  }
})
