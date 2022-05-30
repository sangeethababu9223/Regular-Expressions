let txt = "Jumping in Hello world, Howdy!";
let regex1 = /Hello/;
let regex2 = /world/;
let regex3 = /\s/;

// console.log(regex1.exec(txt));
// console.log(regex2.exec(txt));
console.log(txt.split(regex3));