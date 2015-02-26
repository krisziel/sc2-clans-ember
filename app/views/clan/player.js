import Ember from 'ember';

export default Ember.View.extend({
  didInsertElement: function(){
    $('#memberColumn').addClass('left');
    updateHeight();
  }
});
