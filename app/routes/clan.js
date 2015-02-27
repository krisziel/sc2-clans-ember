import Ember from 'ember';

export default Ember.Route.extend({
  model:function(params){
    return Ember.$.getJSON('http://sc2clanapi.herokuapp.com/clan/' + params.tag).then(function(response){
      var players = response.clan[2];
      $.each(players,function(i,player){
        player['ggplayer']['most_played_race'] = race[player['ggplayer']['most_played_race']];
        player['highest_league_type'] = league(player.ggplayer.highest_league_type);
        player['highest_league_rank'] = rank(player.ggplayer.highest_league_rank);
        player['lowercasename'] = player['name'].toLowerCase();
      });
      setTimeout(function(){
        updateHeight();
      },500);
      return {
        tag:response.clan[0],
        name:response.clan[1],
        players:players
      };
    });
  }
});
