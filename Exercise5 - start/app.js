/*
Iterate through the data provided. Use a regular expression to store the names in a new array but change the order of the name so first name is listed first and last name is last. 
*/

let data = ["Jensen, Dale", "Smith, Andrea", "Jorgensen, Michael", "Vasefi, Annika", "Lopez, Monica", "Crockett, Steven"];
let regExp = /(\w+), (\w+)/;
let res;
// data.forEach(function(item,index){
//     res = regExp.exec(item);
//     let revItem = res[2]+", "+res[1];
//     revdata.push(revItem);
// });
let revdata = data.map(val => {
    res = regExp.exec(val);
    if(res!==null){
       return res[2]+" "+res[1];
    }else {
        return null;
    }
})
console.log(revdata);