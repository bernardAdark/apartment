export function initialize(application) {
  let uuid = Ember.Object.extend({
    v4() {
      let d = new Date().getTime();
      let uuid = 'xxxxxxxx-xxxxx-4xxx-xxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
        let r = (d + Math.random()*16)%16 | 0;
        d = Math.floor(d/16);
        return (c==='x'?r:(r&0x3|0x8)).toString(16);
      });

      return uuid;
    }
  })

  application.register('uuid:main', uuid);
  application.inject('component', 'uuid', 'uuid:main');
}

export default {
  name: 'uuid',
  initialize
};
