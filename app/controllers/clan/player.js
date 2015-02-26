import Ember from 'ember';

export default Ember.Controller.extend({
  ladderData:[],
  actions:{
    loadLadder:function(ladder){
      console.log(ladder);
      this.transitionToRoute('clan.player.ladder',ladder);
      setTimeout(function(){
        Ember.$('.player-window').scrollTop($('.ladder').offset().top-98);
      },500);
    }
  }
});
