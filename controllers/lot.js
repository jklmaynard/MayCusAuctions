MayCusAuctions.LotController = Ember.ObjectController.extend({
  isEditing: false,
  actions: {
    delete: function() {
      if (confirm('Woah there. You wanna burn that bridge?')) {
        this.get('model').destroyRecord();
      };
      this.transitionToRoute('lots');
    },

    edit: function() {
      this.set('isEditing', true);
    },

    save: function() {
      this.set('isEditing', false);
    },
  }
});
