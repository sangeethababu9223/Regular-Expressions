let data = "allthingsjavascript.com google.com youtube.com";

let regx = /\w+(?=\.com)/g;
let res = regx.exec(data);
let res2 = data.match(regx);
console.log(res);
console.log(res2);
