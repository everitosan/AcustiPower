Polymer({
  is: "temperatura-component",

  observers: [
    'valueChanged(value)'
  ],

  properties: {
    value: {
      type: Number,
    },
    type: {
      type: String
    }
  },
  valueChanged: function() {
    if(this.type !== undefined) {
      var event = 'temperatureChange-' + this.type;
      this.fire(event,{temperature: this.value});
    }
  }
});