console.log(typeof 123);  /* number */
console.log(typeof 'hello');    /* string */

// true
typeof 123 === 'number';

// false
typeof 123 === 'string';

// boolean
typeof true;

// boolean
typeof false;

// JavaScript primitive data types
strings / numbers / boolean / null / undefined

// type coercion
const value1 = 123;
console.log(value1);
/* 123 */
const newValue1 = value1.toString();
console.log(newValue1);
/* '123' */
/* coerced to string with .toString */

const value2 = '123';
console.log(value2);
/* '123' */
const newValue2 = parseInt(value2);
console.log(newValue2);
/* 123 */
/* coerced to numeral with parseInt() */


/* strict equality operators
 *
 * === strict equality
 * <== strict less than or equal to
 * >== strict greater than or equal to
 * 
 */

// why standard equality operators aren't reliable:
// unpredictability can introduce unintended bugs

"123" == 123 // true

null == undefined // true

true == 1 // true
"123" == "123" // true
123 == 123 // true

null  == null // true
undefined== undefined // true

true == true // true
true == false // true

// Alternatively, using the strict equality operator is more reliable:
// strict equality improves predictability

"123" === 123 // false

null === undefined // false

"123" === "123" // true
123 === 123 // true

null === null // true
undefined === undefined // true

true === true // true
true === false // false

/* 
 *save information such as phone numbers and ID numbers as strings in JavaScript
 * not strictly numbers by definition
 * don’t represent an actual amount of something
 * does not make sense to add or subtract to them
 * actual real numbers don't start with 0
 * since 0031 is effectively just 31
 * useful to still do validation on number to confirm that they only contain numerical characters (even if they are strings)
 * 
 */