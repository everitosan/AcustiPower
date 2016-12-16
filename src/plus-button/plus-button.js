Polymer({
  is: "plus-button",
  properties: {
    type: {
      type: String,
      value: ""
    }
  },
  addCallback: function() {
    var eventName = 'add-'+this.type;
    this.fire(eventName, {});
  }
});