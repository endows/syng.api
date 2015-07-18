Router.route('/home',{
  waitOn:function(){
    return Meteor.subscribe('allStatus')
  },
  data:{
    status:function(){
      return Status.find()
    }
  },
  action:function(){
    this.render('home')
  }
})
