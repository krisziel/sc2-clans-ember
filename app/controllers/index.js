import Ember from 'ember';

export default Ember.Controller.extend({
  clanTag:"",
  tag:"",
  actions:{
    searchClans:function(){
      var _this = this;
      var tag = _this.get('clanTag');
      this.set('tag',tag);
      if(Ember.$('#searchClanButton').html() === 'Save Clan') {
        Ember.$('#savingClan').css({display:'block'});
        Ember.$('#clanNotFound').css({display:'none'});
        Ember.$.ajax({url:'http://sc2clanapi.herokuapp.com/clan/' + tag + '/add',type:'json',timeout:180000}).then(function(response){
          if(response.error) {
            Ember.$('#searchClanButton').removeClass('blue').addClass('green').html('Save Clan');
            Ember.$('.clan-search input').on('change',function(){ Ember.$('#searchClanButton').removeClass('green').addClass('blue').html('Search for Clan'); });
            Ember.$('#clanNotFound').css({display:'block'});
          } else if(response.tag) {
            _this.transitionToRoute('clan',response.tag);
          }
        });
      } else {
        Ember.$.getJSON('http://sc2clanapi.herokuapp.com/clan/' + tag).then(function(response){
          if(response.error) {
            Ember.$('#searchClanButton').removeClass('blue').addClass('green').html('Save Clan');
            Ember.$('.clan-search input').on('change',function(){ Ember.$('#searchClanButton').removeClass('green').addClass('blue').html('Search for Clan'); });
            Ember.$('#clanNotFound').css({display:'block'}).find('p').html('Click save clan to create the clan\'s website');
          } else if(response.clan) {
            _this.transitionToRoute('clan',response.clan[0]);
          }
        });
      }
    }
  }
});
