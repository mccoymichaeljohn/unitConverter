/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input) {
    let nums = input.match(/^[\d\/.]+/)
    let divisor = nums[0].match(/\//gi)
    
    if (divisor !== null) {
      let numbers = input.match(/[\d.]+/gi)
      let divided = numbers[0]/numbers[1];
      return divided
    }
    
    if (nums !== null)  return parseFloat(nums[0]);
    return 'invalid number'
  };
  
  this.getUnit = function(input) {
    let unit = input.match(/[a-zA-Z]+/gi)
    
    return unit;
  };
  
  this.getReturnUnit = function(initUnit) {
    if (initUnit === 'mi') return 'km'
    if (initUnit === 'km') return 'mi'
    if (initUnit === 'gal') return 'L'
    if (initUnit === 'L') return 'gal'
    if (initUnit === 'lbs') return 'kg'
    if (initUnit === 'kg') return 'lbs'
  };

  this.spellOutUnit = function(unit) {
    if (unit === 'mi') return 'miles'
    if (unit === 'km') return 'kilometers'
    if (unit === 'gal') return 'gallons'
    if (unit === 'L') return 'liters'
    if (unit === 'lbs') return 'pounds'
    if (unit === 'kg') return 'kilograms'
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
  
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let string = `${initNum} ${initUnit} converts to ${returnNum} ${returnUnit}`
    return string
  };
  
}

module.exports = ConvertHandler;
