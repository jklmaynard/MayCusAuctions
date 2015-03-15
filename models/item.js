MayCusAuctions.Item = DS.Model.extend({
  description: DS.attr(),
  owner: DS.attr(),
  bidNumber: DS.attr(),
  startPrice: DS.attr(),
  history: DS.attr(),
  image: DS.attr(),
  lot: DS.belongsTo('lot', {async: true})
});
