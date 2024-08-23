/** ches to see if number is prime number.
 * @ param (number) number. The number to check
 * 8 @ retruns True if a prime number, flase if otherwise.
 */
function isPrimeNumber(number) {
   for (let index = 2; index < number; index++){
    if (number % index === 0){
        return false;
    }
       }
       return true;
}

console.log('4 is a prime: ${ isPrimeNumber(4) }');
console.log('7 is a prime: ${ isPrimeNumber(7) }');
console.log('10 is a prime: ${ isPrimeNumber(10) }');
console.log('13 is a prime: ${ isPrimeNumber(13) }');
