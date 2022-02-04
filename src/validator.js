const validator = {

  isValid(creditCardNumber){

    var cc = creditCardNumber.split('').reverse();
    var totalPares = 0;
    var totalImpares = 0;

    for (var i = 0; i < cc.length; i++) {
      if (i % 2 === 1) {
        if (cc[i] * 2 > 9) {
          totalImpares += cc[i] * 2 - 9
        } else {
          totalImpares += cc[i] * 2
        }
      }
      else {
        totalPares += parseInt(cc[i])
      }
    }


    return ((totalPares + totalImpares) % 10 === 0)
  },

  maskify(creditCardNumber){
    var cc = creditCardNumber.split('')
    for (var i = 0; i < cc.length - 4; i++) {
      cc[i] = "#"
    }
    cc = cc.join('')

    return cc

  }

};


export default validator;
