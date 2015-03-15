MayCusAuctions.NewLotController = Ember.Controller.extend({
  actions: {
    save: function() {
      var newLot = this.store.createRecord('lot', {
        lotName: this.get('lotName'),
        sessionTime: this.get('sessionTime'),
        location: this.get('location'),
        picture: this.get('picture')
      });

      newLot.save();
      this.transitionToRoute('lots');
    }
  }
});
