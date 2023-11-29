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

 

//form validation with a pageload delay

        function validateForm(){

            let y = document.getElementById('cardname').value;

            let textname;
            if (y.length<6 ){
                textname = 'Please write a valid name'
                let message= document.getElementById('name-feedback')
                message.style.color='rgb(179, 64, 64)'
                
            }
            else{
                textname="You're good to go"
                let message= document.getElementById('name-feedback')
                message.style.color='green'
                
            }

            let x = document.getElementById('cardnumber').value;

            let text;
            if (isNaN(x) || x.length !==12){
                text= 'Wrong input, only twelve numbers allowed'
                let message= document.getElementById('number-feedback')
                message.style.color='rgb(179, 64, 64)'
                
                
            }
            else{
                text = "You're good to go!"
                let message= document.getElementById('number-feedback')
                message.style.color='green'
                
            }

            let z = document.getElementById('month').value;
            let textmonth;

            if (isNaN(z) || z.length !==2){
                textmonth = "Can't be blank"
                let message= document.getElementById('month-feedback')
                message.style.color='rgb(179, 64, 64)'
            }
            else{
                textmonth= 'valid'
                let message= document.getElementById('month-feedback')
                message.style.color='green'
            };
            

            let a = document.getElementById('year').value;
            let textyear;

            if(isNaN(a) || a.length <2 || a.length>2){
                textyear = "Can't be blank"
                let message= document.getElementById('year-feedback')
                message.style.color='rgb(179, 64, 64)'
            }

            else{
                textyear = 'valid'
                let message= document.getElementById('year-feedback')
                message.style.color='green'
            }

            let b = document.getElementById('cvc').value;
            let textcvc;

            if(isNaN(b) || b.length <3 || b.length>3){
                textcvc = "Can't be blank, three numbers only"
                let message= document.getElementById('cvc-feedback')
                message.style.color='rgb(179, 64, 64)'
            }
            else{
                textcvc= 'valid'
                let message= document.getElementById('cvc-feedback')
                message.style.color='green'
            }

            document.getElementById('name-feedback').textContent=textname;
            document.getElementById('number-feedback').textContent=text;
            document.getElementById('month-feedback').textContent=textmonth;
            document.getElementById('year-feedback').textContent=textyear;
            document.getElementById('cvc-feedback').textContent=textcvc;
        };

   