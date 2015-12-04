import Ember from 'ember';
import config from 'apartment/config/environment';

export default Ember.Component.extend({
  classNames: ['map', 'mapbox-map'],
  attributeBindings: ['id'],

  id: 'map',

  didInsertElement() {
    this._super(...arguments);
    
    L.mapbox.accessToken = config.MAPBOX_ACCESS_TOKEN;
    let map = L.mapbox.map('map', 'mapbox.streets');

    if (Ember.isArray(this.get('town.geoCoords')) && this.get('town.geoCoords').length === 2) {
      map.setView(this.get('town.geoCoords'), 15);
    }
  },

  willDestroyElement() {
  }

});
