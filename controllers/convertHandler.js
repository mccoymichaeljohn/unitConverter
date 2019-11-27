/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input) {
    let index = input.search(/[A-Za-z]/)
    let divisor = input.search(/\//);
    if (divisor > 0) {
      let num1 = parseFloat(input.slice(0, divisor));
      let num2 = parseFloat(input.slice(divisor +1, index));
      return num1 / num2
    }
    if (index > 0) {
      let number = parseFloat(input.slice(0, index));
      if (isNaN(number)) return "invalid number"
      return number;
    }
    if (index === -1) {
      let num = parseFloat(input)
      if (isNaN(num)) return 'invalid number'
      return num;
    }
    return 1;
  
  };
  
  this.getUnit = function(input) {
    let unit = input.match(/[a-zA-Z]+/gi)
    if (unit === null) return 'invalid unit';
    if (unit[0] === 'mi' || unit[0] === 'km' || unit[0] === 'gal' || unit[0] === 'L' || unit[0] === 'lbs' || unit[0] === 'kg') return unit[0]
    return 'invalid unit';
  };
  
  this.getReturnUnit = function(initUnit) {
    if (initUnit === 'mi') return 'km'
    if (initUnit === 'km') return 'mi'
    if (initUnit === 'gal') return 'L'
    if (initUnit === 'L') return 'gal'
    if (initUnit === 'lbs') return 'kg'
    if (initUnit === 'kg') return 'lbs'
    if (initUnit === 'invalid unit') return 'invalid unit';
  };

  this.spellOutUnit = function(unit) {
    if (unit === 'mi') return 'miles'
    if (unit === 'km') return 'kilometers'
    if (unit === 'gal') return 'gallons'
    if (unit === 'L') return 'liters'
    if (unit === 'lbs') return 'pounds'
    if (unit === 'kg') return 'kilograms'
    if (unit === 'invalid unit') return 'invalid unit'
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    
    if (initUnit === 'mi') return initNum * miToKm
    if (initUnit === 'km') return initNum / miToKm
    if (initUnit === 'gal') return initNum * galToL
    if (initUnit === 'L') return initNum / galToL
    if (initUnit === 'lbs') return initNum * lbsToKg
    if (initUnit === 'kg') return initNum / lbsToKg
    if (initUnit === 'invalid unit') return initNum
  
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    if (initNum === 'invalid number' && initUnit === 'invalid unit') return 'invalid number and unit'
    if (initNum === 'invalid number') return 'invalid number'
    if (initUnit === 'invalid unit') return 'invalid unit'

    let string = `${initNum} ${initUnit} converts to ${returnNum.toFixed(5)} ${returnUnit}`
    return string
  };
  
}

module.exports = ConvertHandler;
