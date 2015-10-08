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
});

export default Router;
