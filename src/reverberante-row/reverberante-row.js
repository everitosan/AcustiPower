Polymer({
  is: "reverberante-row",

  observers: [
    'calculateAfla(t1)',
    'calculateAfla(t2)',
    'calculateAfla(temp)',
    'calculateAfla(vol)'
  ],

  properties: {
    freq: {
      type: Number,
      value: 0
    },
    t1: {
      type: Number,
      value: 0
    },
    t2: {
      type: Number,
      value: 0
    },
    alfa: {
      type: Number,
      value: 0
    },
    temp: {
      type: Number,
      value: 0
    },
    vol: {
      type: Number,
      value: 0
    },
    sup: {
      type: Number,
      value: function() {
        return 1.22 * 2.44;
      }
    }
  },

  __getVelocitySound: function(temp) {
      return (331 + (0.607) * temp);
  },

  calculateAfla: function() {
    
    var t1 = parseFloat(this.t1);
    var t2 = parseFloat(this.t2);
    var c = this.__getVelocitySound(this.temp);

    var A1 = (55.3 * this.vol) / ( this.t1 * c );
    var A2 = (55.3 * this.vol) / ( this.t2 * c );

    this.alfa = (A2-A1) / this.sup;
  }

  

});