import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('homes', function() {
    this.route('new');
    this.route('show', {path: '/:home_id'});
    this.route('edit', {path: '/:home_id/edit'});
  });

  this.route('towns', function() {
    this.route('new');
    this.route('edit', {path: '/:town_id/edit'});
    this.route('show', {path: '/:town_id'});
  });
  this.route('town', {path: '/:town_name'}, function() {
    this.route('homes');
    this.route('suburbs', function() {
      this.route('suburb', {path: '/:suburb_slug'});
    });
  });

  this.route('suburbs', function() {
    this.route('new');
    this.route('edit', {path: '/:suburb_slug/edit'});
  });
});

export default Router;
