Status = new Meteor.Collection('status')
Status._transform = function(doc){
  doc.user = Users.findOne(doc.user)
  return doc
}

if(Meteor.isServer){
  Meteor.methods({
    'watch':function(user_id,url){
      Status.remove({user:user_id,url:url})
      Status.insert({user:user_id,url:url,type:'watching'})
    }
  })
  Meteor.publish('status',function(url){
    return Status.find({url:url})
  })
  Meteor.publish('allStatus',function(url){
    return Status.find()
  })
}
