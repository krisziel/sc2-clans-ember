import Ember from 'ember';

export default Ember.Controller.extend({
  clanTag:"",
  actions:{
    searchClans:function(){
      var _this = this;
      if(Ember.$('#searchClanButton').html() === 'Save Clan') {
        Ember.$('#savingClan').css({display:'block'});
        Ember.$('#clanNotFound').css({display:'none'});
        Ember.$.getJSON('http://localhost:3000/clan/' + _this.get('clanTag') + '/add').then(function(response){
          if(response.error) {
            Ember.$('#searchClanButton').removeClass('blue').addClass('green').html('Save Clan');
            Ember.$('.clan-search input').on('change',function(){ Ember.$('#searchClanButton').removeClass('green').addClass('blue').html('Search for Clan'); });
            Ember.$('#clanNotFound').css({display:'block'});
          } else if(response.tag) {
            _this.transitionToRoute('clan',response.tag);
          }
        });
      } else {
        Ember.$.getJSON('http://localhost:3000/clan/' + _this.get('clanTag')).then(function(response){
          if(response.error) {
            Ember.$('#searchClanButton').removeClass('blue').addClass('green').html('Save Clan');
            Ember.$('.clan-search input').on('change',function(){ Ember.$('#searchClanButton').removeClass('green').addClass('blue').html('Search for Clan'); });
            Ember.$('#clanNotFound').css({display:'block'});
          } else if(response.clan) {
            _this.transitionToRoute('clan',response.clan[0]);
          }
        });
      }
    }
  }
});
