Router.route('/visiters',{
  data:{
    visiters:function(){
      return Users.find()
    }
  },
  action:function(){
    this.render('visiters')
  }
})
