const rent = 400;
const tax = '8%';
const food = 51.7501;
const salary = 800;
const transport = 10.2;
const hourOfDay = 00;
const minuteOfDay = 00;

// Only change below this line

if ((hourOfDay !== null && minuteOfDay !== null) && (hourOfDay === 00 && minuteOfDay === 00)) {
	const taxAsDecimal = parseInt(tax) / 100; /* console.log(taxAsDecimal) === 0.08 */
    const startingAfterTax = salary - (salary * taxAsDecimal); /* console.log(startingAfterTax) === 736 */
	const balance = startingAfterTax - transport - food - rent; /* console.log(balance) === 274.0499 */
    console.log('R', balance.toFixed(2));
}    


/* BUG FIXES:
 * 
 * fixed if statement format, 
 * modified conditions, 
 * coerced tax to numeric value, 
 * rewrote '100' as number because strings can't divide, 
 * rewrote '1' as numeric value for valid multiplication, 
 * fixed typo in 'balance'('balace' was not going to fetch undeclared variable), 
 * moved 'console.log' inside block-scope to access 'balance' variable, 
 * modified '.toFixed(3)' to '.toFixed(2)' 
 * code only runs and calculates balance once all conditions in if boolean are met
 * corrected startingAfterTax calculations
 * Added 'R' prefix to final calculated balance
 * 
*/
