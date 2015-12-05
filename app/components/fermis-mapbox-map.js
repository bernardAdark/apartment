import Ember from 'ember';
import config from 'apartment/config/environment';

export default Ember.Component.extend({
  classNames: ['map', 'mapbox-map'],
  mapCenter: config.ACCRA_GEO_COORDS,
  markers: [],

  didInsertElement() {
    this._super(...arguments);

    L.mapbox.accessToken = config.MAPBOX_ACCESS_TOKEN;

    const map = L.mapbox.map('map', this.get('mapType') || config.MAP_DEFAULT_TYPE).
      setView(this.get('mapCenter'), this.get('zoomLevel') || config.MAP_DEFAULT_ZOOM_LEVEL);

    if (this.get('town')) {
      this.set('mapCenter', this.get('town.geoCoords'));

      this.get('town').get('suburbs').forEach((s) => {
        this.get('markers').push({
          'type': 'Feature',
          'geometry': {
            'type': 'Point',
            'coordinates': s.get('geoCoords')
          },
          'properties': {
            'title': s.get('name'),
            'description': s.get('description'),
            'marker-size': config.MAP_MARKER_SIZE,
            'marker-color': config.MAP_MARKER_COLOR,
            'marker-symbol': config.MAP_MARKER_SYMBOLS.TOWN
          }
        });
      });

      L.mapbox.featureLayer().setGeoJSON(this.get('markers')).addTo(map);
    }

    map.panTo(this.get('mapCenter'));
  },


  willDestroyElement() {
  }

});
