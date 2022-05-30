// let txt = "Jumping in miercolas nicholaS pikachus Hello world, Howdy!";
// let regex1 = /Hello/;
// let regex2 = /world/;
// let regex3 = /s\s/gi;

// console.log(regex3.exec(txt));
// console.log(regex3.exec(txt));
// console.log(txt.match(regex3));


// let phoneNums = ["801-766-9754", "801-545-5454", "435-666-1212", "801-796-8010", "435-555-9801", "801-009-0909", "435-222-8013", "801-777-6655"];
// let numExp = /801-/;
// let filtArray = phoneNums.filter(value => {
//     return numExp.test(value);
// });
// console.log("Main Array");
// console.log(phoneNums);
// console.log("Filtered Array");
// console.log(filtArray);
/*
Using the provided array, create a second array that only includes the numbers with the 801 area code. (The area code is the first 3 numbers.) Make sure that the phone numbers are valid (nnn-nnn-nnnn).
*/
let phoneNums = ["801-766-9754", "801-545-5454", "435-666-1212", "801-796-8010", "435-555-9801", "801-009-0909", "435-222-8013", "801-777-66553", "801-777-665-", "801-77A-6655", "801-778-665"];
let numExp = /801-\d{3}-\d{4}/;
let numberArray = phoneNums.filter(number => numExp.test(number));
console.log("Main Array");
console.log(phoneNums);
console.log("Filtered Array");
console.log(numberArray);