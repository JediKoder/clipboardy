var inherit = require('inherit'),
  sprintf = require('sprintf-js').sprintf;

module.exports = inherit({

  __constructor: function(id) {

    /**
     * The unique source id
     */
    this.id = id;

    /**
     * The DOM element of the source code
     */
    this.source = null;

    /**
     * The DOM element where the iframe container exists
     */
    this.iframeContainer = null;

    /**
     * The iframe where buttons are rendered
     */
    this.iframe = null;
  },

  getIframeContainer: function () {
    if (!this.iframeContainer) {
      this.iframeContainer = document.querySelector(sprintf('[iframe-source-id="%s"]', this.id));
    }
    return this.iframeContainer;
  },

  getIframe: function() {
    if (!this.iframe) {
      this.iframe = this.getIframeContainer().querySelector('iframe');
    }
    return this.iframe;
  },

  getSource: function() {
    if (!this.source) {
      this.source = document.querySelector(sprintf('[data-source-id="%s"]', this.id));
    }
    return this.source;
  },

  initialize: function() {

  }
}, {

  instances: {},

  createInstance: function(id) {
    var instance = new this(id);
    instance.initialize();
    this.instances[id] = instance;
    return instance;
  },

  getInstance: function(id) {
    if (!(id in this.instances)) {
      throw Error(sprintf('Instance with id %s does not exist', id));
    }
    return this.instances[id];
  }
});