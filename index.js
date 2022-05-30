let txt = "Jumping in miercolas nicholaS pikachus Hello world, Howdy!";
let regex1 = /Hello/;
let regex2 = /world/;
let regex3 = /s\s/gi;

console.log(regex3.exec(txt));
console.log(regex3.exec(txt));
console.log(txt.match(regex3));