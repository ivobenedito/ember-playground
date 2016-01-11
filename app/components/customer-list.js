import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    remove(item) {
      item.deleteRecord();
      item.save();
    }
  }
});
