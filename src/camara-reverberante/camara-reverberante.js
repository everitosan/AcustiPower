Polymer({
  is: 'camara-reverberante',

  listeners: {
    'add-reverberante':'addRow',
    'temperatureChange-reverberante': 'updateTemp',
    'volumeChange-reverberante': 'updateVolume'
  },

  properties: {
    nRows: {
      type: Number,
      value: 0,
      readOnly: false
    },
    dataRows: {
      type: Array,
      value: [],
      notify: true
    },
    isFull: {
      type: Boolean,
      notify: true,
      value: false
    },
    temperature:{
      type: Number,
      value: 25,
      notify: true
    },
    volume: {
      type: Number,
      value: 100,
      notify: true
    }
  },

  addRow: function(e) {
    if(this.isFull === false) this.isFull = true;
    this.nRows ++;
    this.push('dataRows', {item : this.nRows});
  },

  updateTemp: function(e) {
    this.temperature = e.detail.temperature;
  },

  updateVolume: function(e) {
    this.volume = e.detail.volume;
  }


});