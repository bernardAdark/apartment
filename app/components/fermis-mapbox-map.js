import Ember from 'ember';
import config from 'apartment/config/environment';

const {
  Component,
  run: {
    bind
  },
  String: {
    dasherize
  }
} = Ember;

export default Component.extend({
  classNames: ['map', 'mapbox-map'],
  mapCenter: config.ACCRA_GEO_COORDS,

  didInsertElement() {
    this._super(...arguments);

    L.mapbox.accessToken = config.MAPBOX_ACCESS_TOKEN;
    L.mapbox.config.FORCE_HTTPS = true;

    const map = L.mapbox.map('map', this.get('mapType') || config.MAP_DEFAULT_TYPE);

    if (this.get('town')) {
      this.set('mapCenter', this.get('town.geoCoords'));
      const geojson = [];

      this.get('town').get('suburbs').forEach((s) => {
        geojson.push({
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

      const markersLayer = L.mapbox.featureLayer();
      markersLayer.setGeoJSON(geojson).addTo(map);

      markersLayer.on('dblclick', bind(this, 'navigateToSuburb'));
    }

    return map.setView(this.get('mapCenter'), this.get('zoomLevel') || config.MAP_DEFAULT_ZOOM_LEVEL);
  },


  navigateToSuburb(e) {
    let suburbSlug = dasherize(e.layer.feature.properties.title);
    this.sendAction('action', suburbSlug);
  },


  willDestroyElement() {
  }

});
