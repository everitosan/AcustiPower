Polymer({
  is: "table-head",
  properties: {
    dataTitles: {
      value: "table",
      type: String,
      readOnly: false
    }, 
    arrayTiles: {
      type: Array
    }
  },
  ready: function() {
    this.arrayTiles = this.dataTitles.split(" ");
  },

  isLastCol: function(index) {
    return (this.arrayTiles.length -1 === index);
  }
});