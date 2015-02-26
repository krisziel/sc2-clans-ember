import Ember from 'ember';

export default Ember.Route.extend({
  model:function(params){
    var _this = this;
    Ember.$('.ladder-row').removeClass('active');
    return Ember.$.getJSON('http://localhost:3000/middleman/?url=https://us.api.battle.net/sc2/ladder/' + params.ladder_id + '?locale=en_US&apikey=u6asyvg57kuru6gbsu37wxbmfd4djv9y',function(ladderData){
      _this.controllerFor('clan.player').set('ladderData',parseFullLadder(ladderData.ladderMembers))
      if(Ember.$('.ladder-row')) {
        Ember.$('.ladder-row[data-id=' + params.ladder_id + ']').addClass('active');
      }
      return parseFullLadder(ladderData.ladderMembers);
    });
  }
});
