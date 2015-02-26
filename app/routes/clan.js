import Ember from 'ember';

export default Ember.Route.extend({
  model:function(params){
    return Ember.$.getJSON('http://sc2clanapi.herokaupp.com/clan/' + params.tag).then(function(response){
      var players = response.clan[2];
      $.each(players,function(i,player){
        player['ggplayer']['most_played_race'] = race[player['ggplayer']['most_played_race']];
        player['highest_league_type'] = league(player.ggplayer.highest_league_type);
        player['highest_league_rank'] = rank(player.ggplayer.highest_league_rank);
        player['lowercasename'] = player['name'].toLowerCase();
      });
      return {
        tag:response.clan[0],
        name:response.clan[1],
        players:players
      };
    });
  },
  actions:{
    searchMembers:function(){
      var query = $('#memberSearch').val().toLowerCase();
      if(query.length > 0) {
        $('.player-row').css({display:'none'});
        $('.player-row[name*="' + query + '"]').css({display:'block'});
      } else {
        $('.player-row').css({display:'block'});
      }
    }
  }
});
