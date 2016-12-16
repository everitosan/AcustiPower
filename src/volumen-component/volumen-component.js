Polymer({
  is: "volumen-component",

  observers: [
    'valueChanged(value)'
  ],

  properties: {
    type: {
      type: String
    },
    value: {
      type: Number
    }
  },

  valueChanged: function() {
    if(this.type !== undefined) {
      var event = 'volumeChange-' + this.type;
      this.fire(event,{volume: this.value});
    }
  }
});