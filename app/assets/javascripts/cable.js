//= require action_cable
//= require_self
//= require_tree ./channels

(function() {
  this.App || (this.App = {});

  App.Cable = ActionCable.createConsumer();
  
}).call(this);
