import Ember from 'ember';

export default Ember.Controller.extend({
  memberSearchString:'',
  actions:{
    selectPlayer:function(player){
      this.transitionToRoute('clan.player', player.name);
    }
  },
  memberSearch: function() {
    var members = this.get('model');
    var filterString = this.get('memberSearchString').toLowerCase();
    return members.players.filter(function(member){
      return member.name.toLowerCase().indexOf(filterString) >= 0;
    });
  }.property('memberSearchString', 'model.@each'),
  memberSearchResults:function(){
    if(this.get('memberSearch').length === 0) {
      return false;
    } else {
      return true;
    }
  }.property('memberSearch')
});
