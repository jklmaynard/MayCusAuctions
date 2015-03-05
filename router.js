MayCusAuctions.Router.map(function() {
  this.resource('home', {path: '/'})
  this.resource('lots');
  this.resource('lot', {path: '/:lot_id'}, function() {
    this.resource('new-item')
  });
  this.resource('item', {path: '/:item_id'});
  this.resource('new-lot');
  this.resource('history');
  this.resource('contact');
});
