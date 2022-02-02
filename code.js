// NOTE: please make sure you have a strong understanding of arrow functions before doing this activity

const originalArray = [5, 933, 26, 33, 20, 10, 555, 884, 2, 10];

// 1. Use "Array.map" to Show the Original Array Again
let answer1div = document.querySelector("#answer1");

let answer1 = originalArray.map((item) => {
    return item;
});
answer1div.textContent = answer1;

// is the same thing as a for loop:

let answer1Array = []
for(let i = 0; i < originalArray.length; i++) {
   answer1Array.push(originalArray[i]);
}

answer1div.textContent = answer1Array;


// 2. Use "Array.map" to Show the Original Array Multiplied by 2
let answer2div = document.querySelector("#answer2");

let answer2 = originalArray.map((item) => item * 2);
answer2div.textContent = answer2;

// or a for loop:

let answer2Array = []
for (let i = 0; i < originalArray.length; i++) {
    answer2Array.push(originalArray[i]*2);
}
answer2div.textContent = answer2Array;


// 3. Use "Array.filter" to Show Only the Number 26
let answer3div = document.querySelector("#answer3");

let answer3 = originalArray.filter((index) => index === 26);
answer3div.textContent = answer3;

// or a for loop:

// answer3Array = []
// for(let i = 0; i < originalArray.length; i++) {
//     answer3Array.push(originalArray[i] === 26);
// }

// answer3div.textContent = answer3Array // shows booleans of the whole originalArray with the 3rd spot, 26, being 'true', and the rest false. So it shows there is only one 26 in the array.

// 4. Use "Array.filter" to Show Even Numbers
// hint: explore the concept of 'modulus', which gives divides and gives the answer of the remainder
// for example,
// 5 % 2 === 1 (this reads as "5 modulus 2 is equal to 1")
// 4 % 2 === 0
// 3 % 2 === 1
// 2 % 2 === 0
// 1 % 2 === 1
// ... so any number % 2 that equals 0 is even
// ... and any number % 2 that equals 1 is odd
let answer4div = document.querySelector("#answer4");

let answer4 = originalArray.filter((index) => index % 2 === 0);
answer4div.textContent = answer4;

// 4. Use "Array.filter" to Show Odd Numbers
let answer5div = document.querySelector("#answer5");

let answer5 = originalArray.filter((index) => index % 2 === 1);
answer5div.textContent = answer5;

