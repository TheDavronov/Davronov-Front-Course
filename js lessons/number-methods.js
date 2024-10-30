// let numbersLesson
//! integer  =>  целая цыфра  =>  int       =>  1
//! float    =>  не целая цыфра  => float   =>  1.100
//! +	Addition
//! -	Subtraction
//! *	Multiplication
//! /	Division
//! **	Exponentiation (ES2016) => степень
//! %	Modulus (Division Remainder)  =>  остаток
//! ++	Increment
//! --	Decrement
//! =	  x = y	       x = y
//! +=	  x += y	   x = x + y
//! -=	  x -= y	   x = x - y
//! *=	  x *= y	   x = x * y
//! /=	  x /= y	   x = x / y
//! %=	  x %= y	   x = x % y
//! **=	 x **= y	   x = x ** y


//!  ==	equal to (проверяет только значения)
//!  ===	equal value and equal type
//!  !=	not equal
//!  !==	not equal value or not equal type
//!  >	    greater than
//!  <	    less than
//!  >=	greater than or equal to
//!  <=	less than or equal to

//!  &&	and  =>  и      ...ham
// ex:   1 == 1  &&  3 == 3  &&  5 == 5  =>  true
//       1 == 2  &&  3 == 3  &&  5 == 5  =>  false
//!  ||	or   =>  или    ... yoki ...
// ex:   1 == 1  ||  3 == 2  ||  5 == 2  =>  true
// ex:   1 == 2  ||  3 == 2  ||  5 == 2  =>  false
//!  !	not  =>  не ... ... emas
// ex:   1 != 1   =>  false
//       1 != 2   =>  true

//! typeof	    Returns the type of a variable
// ex:  typeof("John")   =>  string

//! The maximum number of decimals is 17.

//! NaN       =>  is a 'not a number'
//! parseInt(Number) => converts a number into Number() object
// RU:                 преобразует строку в целое число
// ex:  parseInt("10")  =>  10
//      parseInt("qwe") =>  NaN - Not a Number

//! isNaN() => checks if the object inside paratneses
//            appears to not be a Number
//            Returns a Boolean value that indicates whether
//            a value is the reserved value NaN (not a number)
// ex:   isNaN(10)     =>  false
//       isNaN("qwe")  =>  true

//! Division by 0 (zero) generates Infinity
// Infinity is a number: typeof Infinity returns number


//! .toFixed()	    Returns a number written with a number of decimals
// ex: 10.345.toFixed(2)  =>  10.35

//!  .toPrecision()	Returns a number written with a specified length
//  ex: 10.345.toPrecision(2)  =>  10


// let num1 = 4
// let num2 = 2

// console.log(num1 **= num2);
// console.log(num1 = num2);
// console.log(num1 += num2);
// console.log(num1 *= num2);
// console.log(num1 /= num2);
// console.log(num1 -= num2);


// console.log(Number.isInteger(12.213));
// console.log(Number.isInteger(12));
// console.log(2 + 2);
// console.log(2 - 2);
// console.log(2 * 2);
// console.log(2 / 2);
// console.log(2 ** 3);
// console.log(2 > 2);
// console.log(2 >= 2);
// console.log('2' == 2);
// console.log('2' === 2);
// console.log(10%2);
// console.log(5 !== 2);
// console.log(2 !== 2);
// console.log(100%56);

// console.log(4 > 2 && -1 && 10 && '2' == 2);
// console.log(4 > 2 && -1 && 10 && 0);


// console.log( -1 || 10 || 50);
// console.log( '' || null || 1 || false || undefined);

// console.log(isNaN(123));
// console.log(!isNaN(123));
// console.log(123 / 0);
// console.log(123 / -0);
// console.log(123.12345.toFixed(2));
// console.log(123.12345.toPrecision(4));

// console.log(typeof(parseInt('1234.234')));


let num = 5

// console.log(num++);
// console.log(num++);
console.log(num--);
console.log(num--);
// console.log(--num);
// console.log(++num);













