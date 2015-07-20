Router.route('/visiters',{
  data:{
    content:function(){
      return Contents.findOne()
    }
  },
  action:function(){
    Meteor.subscribe('me')
    Meteor.subscribe('friends',Meteor.user().friends)
    Meteor.subscribe('content',this.params.query.url)

    Session.set('current_url',this.params.query.url)
    Session.set('current_title',this.params.query.title)

    Meteor.call('watch',Session.get('current_url'),Session.get('current_title'))
    this.render('visiters')
  }
})
