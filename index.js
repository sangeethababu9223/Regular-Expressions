let txt = "Hello world, Howdy!";
let regex1 = new RegExp("Hello");
let regex2 = /world/;

console.log(regex1.test(txt));
console.log(regex2.test(txt));