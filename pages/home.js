Router.route('/home',{
  data:{
    contents:function(){
      function watchersFilter(content){
        return (content.watchers.fetch().length > 0)
      }
      return Contents.find().fetch().filter(watchersFilter)
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
