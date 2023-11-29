//card name
const cardname = document.getElementById('cardname');
const person = document.getElementById('jane');

cardname.addEventListener('input', function(){
    person.textContent = cardname.value;
});


//card number
const cardnumber = document.getElementById('cardnumber');
const number = document.getElementById('number');

cardnumber.addEventListener('input', function(){
    number.textContent = cardnumber.value;
})

//expiry month
const month = document.getElementById('month');
const expMonth = document.getElementById('expMonth');

month.addEventListener('input', function(){
    expMonth.textContent = month.value;
})

//expiry year
const year = document.getElementById('year');
const expYear = document.getElementById('expYear');

year.addEventListener('input', function(){
    expYear.textContent = year.value;
})




//cvc

const cvc = document.getElementById('cvc');
const cvcnumber = document.getElementById('cvcnumber')

cvc.addEventListener('input', function(){
    cvcnumber.textContent = cvc.value;
})

/**
 * 
 * const number = document.getElementById('cardnumber');

const month = document.getElementById('year');

const year = document.getElementById('month');
const cvc = document.getElementById('cvc')

 */
            



