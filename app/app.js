import Ember from 'ember';
import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';
import config from './config/environment';

let Apartments;

Ember.MODEL_FACTORY_INJECTIONS = true;

Apartments = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver: Resolver
});

loadInitializers(Apartments, config.modulePrefix);

export default Apartments;
