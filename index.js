let txt = "Hello world, Howdy!";
let regex1 = /Hello/;
let regex2 = /world/;

// console.log(regex1.exec(txt));
// console.log(regex2.exec(txt));
console.log(txt.search(regex2));
console.log(txt.replace(regex1, 'hola'));