import Ember from 'ember';

export default Ember.Controller.extend({
  actions:{
    selectPlayer:function(player){
      this.transitionToRoute('clan.player', player.name);
    }
  }
});
