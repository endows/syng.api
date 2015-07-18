Router.route('/visiters',{
  waitOn:function(){
    return [
      Meteor.subscribe('users',Meteor.user().profile.friends),
      Meteor.subscribe('status',this.params.query.url)
    ]
  },
  data:{
    watchers:function(){
      watchers_list = Status.find({url:Session.get('current_url'),type:'watching'}).map(function(doc){
        return doc.user
      })
      return Users.find({_id:{$in:watchers_list}})
    }
  },
  action:function(){
    if(!Meteor.userId()){
      Meteor.loginWithTwitter()
    }
    Session.set('current_url',this.params.query.url)
    Meteor.call('watch',Meteor.userId(),Session.get('current_url'))
    this.render('visiters')
  }
})
