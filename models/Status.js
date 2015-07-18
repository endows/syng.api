Status = new Meteor.Collection('status')

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
}
