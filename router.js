MayCusAuctions.Router.map(function() {
  this.resource('lots', {path: '/'});
  this.resource('lot', {path: '/:lot_id'}, function() {
    this.resource('new-item');
  });
  this.resource('new-lot');
  this.resource('history');
  this.resource('contact');
});
