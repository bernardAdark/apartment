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
  assert
} = Ember;

export default Component.extend({
  classNames: ['file-picker'],
  classNameBindings: ['multiple:multiple:single'],
  accept: '.jpg,.jpeg,.webp',
  multiple: true,
  preview: true,
  dropzone: true,
  progress: true,
  selectOnClick: true,
  count: 0,
  errors: [],
  acceptedFileFormats: 'image/jpeg image/jpg image/webp'.w(),
  action: 'imageLoaded',

  progressStyle: computed('progressValue', function() {
    let __width = this.get('progressValue') || 0;
    return htmlSafe(`width: ${__width}%;`);
  }),

  // When the component was inserted.
  didInsertElement() {
    // Cache Drag'n'Drop elements, because traversing the DOM is fucking expensive
    // but reading properties of a Component isn't.
    this.dropzoneElement = this.$('.file-picker__dropzone');
    this.previewElement = this.$('.file-picker__preview .wrapper');
    this.progressElement = this.$('.file-picker__progress');
    this.fileInputElement = this.$('.file-picker__input');

    this.fileInputElement.on('change', bind(this, 'filesSelected'));

    this.hidePreview();
    this.hideProgress();
    this.fileInputElement.hide();
  },

  willDestroyElement() {
    this.fileInputElement.off('change', bind(this, 'filesSelected'));
  },

  /**
   * When the file input changed (a file got selected)
   * @param {Event} event The file change event.
   */
  filesSelected(event) {
    this.handleFiles(event.target.files);
  },

  handleFiles(files) {
    this.updatePreview(files);

    for (let i = 0; i < files.length; i++) {
      this.readFile(files[i]).then((file) => {
        this.sendAction('action', file.data)
      });
    }
  },

  updatePreview(files) {
    !this.get('multiple') && this.clearPreview();

    for (let i = 0; i < files.length; i++) {
      this.readFile(files[i]).then(bind(this, 'addPreviewImage'));
    }

    this.showPreview();
  },

  addPreviewImage(image) {
    let img = this.$(`<div class="col-lg-6"><img src="${image.data}" class="file-picker__preview__image multiple img img-responsive"></div>`);
    this.hideProgress();
    this.previewElement.append(img);
  },

  /**
   * Reads a file.
   * @param {File} file a file
   * @return {Promise}
   */
  readFile(file) {
    const reader = new FileReader();
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

      return reader.readAsDataURL(file);
    });
  },

  /**
   * Hides the element that contains the preview of the uploaded files.
   */
  hidePreview() {
    this.previewElement.hide();
  },

  /**
   * Shows the element that contains the preview of uploaded files.
   */
  showPreview() {
    this.previewElement.show();
  },

  /**
   * Hides the progress bar.
   */
  hideProgress() {
    this.progressElement.hide();
  },

  /**
   * Empty the preview element.
   * In case multiple uploads are not allowed, each new upload requires that
   * we empty the preview element, to make way for the newly uploaded file.
   */
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
        this.fileInputElement.trigger('click');
      }
    }
  },


  // During Drag'n'Drop only activate DropZone(r) if the file
  // has the right MIME Type.
  isImage(file) {
    return this.get('acceptedFileFormats').indexOf(file.type) > -1;
  },

  /**
  * Drag and drop events.
  * See https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Drag_and_drop
  * for details on Drag 'n' Drop events and how to handle 'em.
  */

  drop(event) {
    // The drop event is fired on the element where the drop occurred at the
    // end of the drag operation. A listener would be responsible for retrieving
    // the data being dragged and inserting it at the drop location. This event
    // will only fire if a drop is desired. It will not fire if the user cancelled
    // the drag operation, for example by pressing the Escape key, or if the mouse
    // button was released while the mouse was not over a valid drop target
    // See https://developer.mozilla.org/en-US/docs/DragDrop/Drag_Operations#drop

    this.dropzoneElement.css('background', '#FFFFFF');
    event.stopPropagation();
    event.preventDefault();

    for (let i = 0; i < event.dataTransfer.files.length; i++) {
      assert("Only JPEG image format is accepted", this.isImage(event.dataTransfer.files[i]));
    }

    this.handleFiles(event.dataTransfer.files);
  },

  dragOver(event) {
    event.stopPropagation();
    event.preventDefault();
  },

  dragEnter(event) {
    // Fired when the mouse enters an element while a drag is occurring.
    // A listener for this event should indicate whether a drop is allowed
    // over this location. If there are no listeners, or the listeners
    // perform no operations, then a drop is not allowed by default. This
    // is also the event to listen for in order to provide feedback that
    // a drop is allowed, such as displaying a highlight or insertion marker.
    // See https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Drag_and_drop

    // Only cancel default behavior if the drag data has the appropriate type.
    // TODO: A visual indication that this is a dropzone. Perhaps add a class
    // or something. [assigned to Precious :p].
    if (event.dataTransfer.types[0].toLowerCase() === "files") {
      event.stopPropagation();
      event.preventDefault();

      this.dropzoneElement.css('background', '#EAEAEA');
      !this.get('multiple') && this.clearPreview();

      event.dataTransfer.effectAllowed = 'copy';
      event.dataTransfer.dropEffect = 'copy';
    }
  },

  dragLeave(event) {
    // This event is fired when the mouse leaves an element
    // while a drag is occurring. Listeners should remove any
    // highlighting or insertion markers used for drop feedback.
    // See https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Drag_and_drop
  }
});
