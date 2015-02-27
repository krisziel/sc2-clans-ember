import Ember from 'ember';

export default Ember.View.extend({
  classNames:['player-window','nine','wide','column','page','grid'],
  didInsertElement: function(){
    $('#memberColumn').addClass('left');
    updateHeight();
  }
});
