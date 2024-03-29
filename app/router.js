import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('homes', function() {
    this.route('home', {path: '/:home_id'}, function() {
      this.route('edit');
      this.route('host');
    });
  });

  this.route('towns', function() {
    this.route('new');
    this.route('town', {path: '/:town_id'}, function() {
      this.route('edit');
    });
  });

  this.route('town', {path: '/:town_name'}, function() {
    this.route('suburbs', function() {
      this.route('suburb', {path: '/:slug'});
    });
    this.route('new');
  });

  this.route('suburbs', function() {
    this.route('edit', {path: '/:slug/edit'});
  });

  this.route('suburb', {path: '/s/:slug'}, function() {
    this.route('new-deputy', {path: 'new'});
  });

  this.route('new-host', {path: '/p/new'});
  this.route('host', {path: '/p/:host_id'}, function() {
    this.route('homes');
    this.route('new');
  });
});

export default Router;
