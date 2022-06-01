let data = "allthingsjavascript.com google.com youtube.com";

let reg = /\w+(?=\.com)/g,
    arr = data.match(reg);

