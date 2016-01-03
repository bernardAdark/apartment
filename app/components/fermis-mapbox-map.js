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
  classNames: 'map mapbox-map col-xs-12 col-sm-7 col-md-7'.w(),
  mapCenter: config.ACCRA_GEO_COORDS,
  suburbPickerMarker: L.mapbox.featureLayer(),
  respondToClick: false,
  zoomLevel: config.MAP_DEFAULT_ZOOM_LEVEL,
  mapType: config.MAP_DEFAULT_TYPE,

  didInsertElement() {
    this._super(...arguments);

    L.mapbox.accessToken = config.MAPBOX_ACCESS_TOKEN;
    L.mapbox.config.FORCE_HTTPS = true;

    const map = L.mapbox.map('map', this.get('mapType'));
    map.tileLayer.setOpacity(0.3);

    if (this.get('model')) {
      this.set('mapCenter', [this.get('model.geoCoords').lat, this.get('model.geoCoords').lng]);
      const geojson = [];
      let suburbs = this.get('model').get('suburbs')

      if (suburbs) {
        suburbs.forEach((s) => {
          geojson.push({
            'type': 'Feature',
            'geometry': {
              'type': 'Point',
              'coordinates': [s.get('geoCoords').lng, s.get('geoCoords').lat]
            },
            'properties': {
              'title': s.get('name'),
              'description': s.get('description'),
              'marker-size': config.MAP_MARKER_SIZE,
              'marker-color': config.MAP_MARKER_COLOR,
              'marker-symbol': config.MAP_MARKER_SYMBOLS.TOWN
            },
            'id': s.get('id')
          });
        });
      } else {
        // TODO: This is a suburb. I think we should use the markers to mark
        // the available apartments.
        map.setView(this.get('mapCenter'), this.get('zoomLevel'));
      }

      if (!!geojson.length) {
        const markersLayer = L.mapbox.featureLayer();
        markersLayer.setGeoJSON(geojson).addTo(map);
        map.fitBounds(markersLayer.getBounds());
        markersLayer.on('dblclick', bind(this, 'doubleClickOnMarkerHandler'));
      }
    }

    this.get('respondToClick') && map.on('click', bind(this, 'clickOnMapHandler'));
  },


  doubleClickOnMarkerHandler(e) {
    let suburbId = e.layer.feature.id;
    this.sendAction('action', suburbId);
  },


  clickOnMapHandler(e) {
    this.get('suburbPickerMarker').setGeoJSON([
      {
        'type': 'Feature',
        'geometry': {
          'type': 'Point',
          'coordinates': [e.latlng.lng, e.latlng.lat]
        },
        'properties': {
          'title': 'New Surburb',
          'description': 'You\'re adding a new suburb. Good luck ;)',
          'marker-size': config.MAP_MARKER_SIZE,
          'marker-symbol': config.MAP_MARKER_SYMBOLS.TOWN,
          'marker-color': config.MAP_MARKER_COLOR
        }
      }
    ]).addTo(e.target);

    this.sendAction('action', e.latlng);
  },


  willDestroyElement() {
  }

});
