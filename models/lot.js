MayCusAuctions.Lot = DS.Model.extend({
  lotName: DS.attr(),
  sessionTime: DS.attr(),
  location: DS.attr(),
  picture: DS.attr(),
  items: DS.hasMany('item', {async: true})
});
