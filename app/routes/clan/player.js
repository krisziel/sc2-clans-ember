import Ember from 'ember';

export default Ember.Route.extend({
  model:function(params){
    return params;
  },
  setupController: function (controller, model) {
    var _this = this;
    Ember.$('.ladders').fadeOut();
    Ember.$('#laddersLoading').css({display:'block'});
    controller.set('model', model);
    controller.set('ladderData',[]);
    var params = this.get('controller.model');
    Ember.$('.player-row').removeClass('active');
    Ember.$('.player-row[name="' + params.player.toLowerCase() + '"]').addClass('active');
    setTimeout(function(){ Ember.$('.player-window').css({display:'inherit'}); },500);
    Ember.$('#memberColumn').addClass('left');
    var player;
    Ember.$.each(this.modelFor('clan').players,function(i,p){
      if(p.name.toLowerCase() === params.player.toLowerCase()) {
        player = p;
      }
      p.ggplayer.top = [
        {
          league:league(p.ggplayer.solo_league),
          rank_range:rank(p.ggplayer.solo_rank),
          rank:p.ggplayer.solo_rank,
          type:"1v1"
        },
        {
          league:league(p.ggplayer.twos_league),
          rank_range:rank(p.ggplayer.twos_rank),
          rank:p.ggplayer.twos_rank,
          type:"2v2"
        },
        {
          league:league(p.ggplayer.threes_league),
          rank_range:rank(p.ggplayer.threes_rank),
          rank:p.ggplayer.threes_rank,
          type:"3v3"
        },
        {
          league:league(p.ggplayer.fours_league),
          rank_range:rank(p.ggplayer.fours_rank),
          rank:p.ggplayer.fours_rank,
          type:"4v4"
        }
      ];
    });
    player.clanTag = this.modelFor('clan').tag;
    this.set('controller.model',player);
    Ember.$.getJSON('http://sc2clanapi.herokuapp.com/middleman/?url=https://us.api.battle.net/sc2/profile/' + player.bnet_id + '/' + player.region + '/' + player.name + '/ladders?locale=en_US&apikey=u6asyvg57kuru6gbsu37wxbmfd4djv9y',function(response){
      var ladderData = {
        HOTS:[[],[],[],[]],
        WOL:[[],[],[],[]]
      };
      Ember.$.each(response.currentSeason,function(i,ladder){
        if(ladder.ladder.length > 0) {
          var characters = [];
          Ember.$.each(ladder.characters,function(i, char){
            characters.push(char.displayName);
          });
          Ember.$.each(ladder.ladder,function(i,random_ladder){
            var ladder = parseLadder(random_ladder,characters);
            ladderData[ladder.expansion][ladder.insertIndex].push(ladder.ladder);
          });
        }
      });
      var wol = []
      wol = wol.concat.apply(wol, ladderData["WOL"]);
      var hots = []
      hots = hots.concat.apply(hots, ladderData["HOTS"]);
      ladderData = {
        "WOL":wol,
        "HOTS":hots
      }
      _this.set('controller.ladders',ladderData);
    }).then(function(){
      Ember.$('#laddersLoading').css({display:'none'});
      Ember.$('.ladders').fadeIn();
    });
  }
});
