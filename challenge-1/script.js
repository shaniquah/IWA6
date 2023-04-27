const primaryPhone = 'O748105141'
const secondaryPhone = '0219131568'

// Only change below this line

const primaryValid = typeof  parseInt(primaryPhone) === 'number'    /* console should return NaN because the first character of the string is a non-numeric character */
const secondaryValid = typeof parseInt(secondaryPhone) === 'number' /* console can only parseInt() a numerical string */

console.log('Primary phone is valid numerical string:', primaryValid);
console.log('Secondary phone is valid numerical string:', secondaryValid);
