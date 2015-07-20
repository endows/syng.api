Router.route('/visiters',{
  // data:{
  //   watchers:function(){
  //     watchers_list = Status.find({url:Session.get('current_url'),type:'watching'}).map(function(doc){
  //       return doc.user
  //     })
  //     return Users.find({_id:{$in:watchers_list}})
  //   }
  // },
  action:function(){
    // Meteor.subscribe('users')
    // Meteor.subscribe('content',this.params.query.url)

    Session.set('current_url',this.params.query.url)
    Session.set('current_title',this.params.query.title)
    Meteor.call('watch',Session.get('current_url'),Session.get('current_title'))
    this.render('visiters')
  }
})
