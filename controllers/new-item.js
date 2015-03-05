MayCusAuctions.NewItemController = Ember.ObjectController.extend({
  actions: {
    add: function() {
      var item = this.get('model');
      item.save();

      var controller = this;
      item.get('lot').then(function(lot) {
        lot.save();
        controller.transitionToRoute('lot', lot);
      });
    }
  }
})
