Contents = new Meteor.Collection('contents')
Contents._transform = function(doc){
  doc.watchers = Users.find({watching:doc._id})
  return doc
}

if(Meteor.isServer){
  Meteor.publish('contents',function(){
    return Contents.find()
  })
  Meteor.publish('content',function(url){
    return Contents.findOne({url:url})
  })
  Meteor.methods({
    'watch':function(url,title){
      func = Meteor.wrapAsync(function(callback){
        Contents.upsert({url:url},{url:url,title:title},callback)
      })
      func()
      content = Contents.findOne({url:url})
      Users.update({_id:this.userId},{$set:{watching:content._id}})
    }
  })
}
