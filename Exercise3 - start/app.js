/*
Validate phone numbers entered into the text field. As the number is entered, check to see if it matches these formats: (nnn)-nnn-nnnn, nnn.nnn.nnnn, nnn-nnn-nnnn, nnnnnnnnnn, (nnn)nnn-nnnn. If the number matches, change the text color from red to green.

Use several different phone numbers to test.

HINT: You can use the keyup event to respond to entered text. There is a CSS Class for red and green.
*/

function myFunction(){
    let PhoneField = document.getElementById('phone');
    let phnumber = PhoneField.value;
    let phnReg = /\(?\d{3}\)?[-.]?\d{3}[-.]?\d{3}/;
    if(phnReg.test(phnumber)){
        PhoneField.classList.add('green');
        PhoneField.classList.remove('red');
    }else{
        PhoneField.classList.add('red');
        PhoneField.classList.remove('green');
    }
}
