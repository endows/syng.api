Router.route('/home',{
  data:{
    contents:function(){
      result = {}
      return Status.find().fetch().map(function(stat){
        result[stat.url]
      })
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
