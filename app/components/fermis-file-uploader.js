import Ember from 'ember';

const {
  Component,
  RSVP,
  computed,
  observer,
  run: {
    bind
  },
  String: {
    htmlSafe
  },
  $,
  assert
} = Ember;


export default Component.extend({
  classNames: ['file-picker'],
  classNameBindings: ['multiple:multiple:single'],
  accept: '.jpg,.jpeg,.webp',
  multiple: false,
  preview: true,
  dropzone: true,
  progress: true,
  hideFileInput: true,
  readAs: 'readAsDataURL',
  selectOnClick: true,
  count: 0,
  errors: [],

  progressStyle: computed('progressValue', function() {
    var __width = this.get('progressValue') || 0;
    return htmlSafe(`width: ${__width}%;`);
  }),

  // When the component was inserted.
  didInsertElement() {
    // Cache Drag'n'Drop elements, because traversing the DOM is fucking expensive
    // but reading properties of a Component isn't.
    this.dropzoneElement = this.$('.file-picker__dropzone');
    this.previewElement = this.$('.file-picker__preview');
    this.progressElement = this.$('.file-picker__progress');
    this.fileInputElement = this.$('.file-picker__input');

    if (this.get('hideFileInput')) {
      this.hideInput();
    }
    this.hidePreview();
    this.hideProgress();

    this.fileInputElement.on('change', bind(this, 'filesSelected'));
  },

  willDestroyElement() {
    this.fileInputElement.off('change', bind(this, 'fileSelected'));
  },

  /**
   * When the file input changed (a file got selected)
   * @param {Event} event The file change event.
   */
  fileSelected(event) {
    this.handleFiles(event.target.files);
  },

  handleFiles(files) {
    if (typeof this.filesAreValid === 'function') {
      if (!this.filesAreValid(files)) {
        return;
      }
    }
    this.updatePreview(files);
    if (this.get('multiple')) {
      this.sendAction('filesLoaded', files);
    } else {
      this.readFile(files[0], this.get('readAs')).
        then((file) => { return this.sendAction('filesLoaded', file) });
    }
  },

  updatePreview(files) {
    if (this.get('multiple')) {
      // TODO
    } else {
      this.clearPreview();
      this.progressElement.show();
      this.readFile(files[0], 'readAsDataURL').then(bind(this, 'addPreviewImage'));
      this.dropzoneElement.hide();
    }

    this.previewElement.show();
  },

  addPreviewImage(image) {
    var img = this.$(`<img src="" class="file-picker__preview__image multiple">`);
    this.hideProgress();
    this.previewElement.append(img);
  },

  /**
   * Reads a file.
   * @param {File} file a file
   * @param {String} readAs One of
   * - readAsArrayBuffer
   * - readAsBinaryString
   * - readAsDataURL
   * - readAsText
   * @return {Promise}
   */
  readFile(file, readAs) {
    const reader = new FileReader();
    assert(`readAs method ${readAs} not implemented`, reader[readAs] && readAs !== 'abort');

    return new RSVP.Promise((resolve, reject) => {
      reader.onload = (event) => {
        resolve({
          fileName: file.name,
          type: file.type,
          data: event.target.result,
          size: file.size
        });
      };

      reader.onabort = () => {
        reject({
          event: 'onabort'
        });
      };

      reader.onerror = (error) => {
        reject({
          event: 'onerror',
          error: error
        });
      };

      reader.onprogress = (event) => {
        this.set('progressValue', event.loaded/event.total*100);
      };

      return reader[readAs](file);
    });
  },

  hideInput() {
    this.$('.file-picker__input').hide();
  },

  hidePreview() {
    this.previewElement.hide();
  },

  hideProgress() {
    this.progressElement.hide();
  },

  clearPreview() {
    this.previewElement.html('');
    this.hidePreview();
    this.dropzoneElement.show();
    this.set('removePreview', false);
  },

  removePreviewDidChange: observer('removePreview', function() {
    return this.get('removePreview') && this.clearPreview();
  }),

  /** Handles DOM events.
   * Trigger an input click to open file dialog
   * @param {Event} event A click event
   */
  click(event) {
    if (this.get('selectOnClick')) {
      if (!$(event.target).hasClass('file-picker__input')) {
        this.$('.file-picker__input').trigger('click');
      }
    }
  },

  /**
  * Drag and drop events.
  * See https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Drag_and_drop
  * for details on Drag 'n' Drop events and how to handle 'em.
  */
  dragOver(event) {
    event.stopPropagation();
    event.preventDefault();
    event.dataTransfer.dropEffect = 'copy';
  },

  drop(event) {
    // The drop event is fired on the element where the drop occurred at the
    // end of the drag operation. A listener would be responsible for retrieving
    // the data being dragged and inserting it at the drop location. This event
    // will only fire if a drop is desired. It will not fire if the user cancelled
    // the drag operation, for example by pressing the Escape key, or if the mouse
    // button was released while the mouse was not over a valid drop target
    // See https://developer.mozilla.org/en-US/docs/DragDrop/Drag_Operations#drop

    event.stopPropagation();
    event.preventDefault();

    this.handleFiles(event.dataTransfer.files);
  },

  dragEnter(event) {
    // Fired when the mouse enters an element while a drag is occurring.
    // A listener for this event should indicate whether a drop is allowed
    // over this location. If there are no listeners, or the listeners
    // perform no operations, then a drop is not allowed by default. This
    // is also the event to listen for in order to provide feedback that
    // a drop is allowed, such as displaying a highlight or insertion marker.
    // See https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Drag_and_drop

    // TODO: A visual indication that this is a dropzone. Perhaps add a class
    // or something. [assigned to Precious :p].
    event.stopPropagation();
    event.preventDefault();

    this.dropzoneElement.text('');
    this.dropzoneElement.css('background', '#ccc');
    !this.get('multiple') && this.clearPreview();
  },

  dragLeave(event) {
    // This event is fired when the mouse leaves an element
    // while a drag is occurring. Listeners should remove any
    // highlighting or insertion markers used for drop feedback.
    // See https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Drag_and_drop
    event.stopPropagation();
    event.preventDefault();

    this.dropzoneElement.css('background', '#fff');
    this.dropzoneElement.text('Drag here or click to upload the banner image');
  }
});
