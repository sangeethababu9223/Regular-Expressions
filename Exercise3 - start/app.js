/*
Validate phone numbers entered into the text field. As the number is entered, check to see if it matches these formats: (nnn)-nnn-nnnn, nnn.nnn.nnnn, nnn-nnn-nnnn, nnnnnnnnnn, (nnn)nnn-nnnn. If the number matches, change the text color from red to green.

Use several different phone numbers to test.

HINT: You can use the keyup event to respond to entered text. There is a CSS Class for red and green.
*/
(function(){
    let phoneField = document.getElementById('phone');
    let phnReg = /^\(?\d{3}\)?[-.]?\d{3}[-.]?\d{4}$/;
    phoneField.addEventListener('keyup', checkReg)
    function checkReg(){
        let phnumberVal = phoneField.value;
        if(phnReg.test(phnumberVal)){
            phoneField.classList.add('green');
            phoneField.classList.remove('red');
        }else{
            phoneField.classList.add('red');
            phoneField.classList.remove('green');
        }
    }
})();

