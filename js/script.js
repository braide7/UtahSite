form = document.getElementById('contact-form')
image = document.getElementById('img')
email = document.getElementById('email')
emailConfirm = document.getElementById('emailConf')
feedback = document.getElementById('feedback')
firstName = document.getElementById('firstName')


const randomNum = Math.floor(Math.random() * 5);

imgArray = ['arches', 'parkCity', 'slc', 'stGeorge', 'wasatchMtn']
altArray = ['Utah arches in summer', 'Park city at night in winter',  'Salt Lake city skyline at night',  'St. George Utah canyon', 'Wasatch Mountain range covered in snow']

image.src = 'images/' + imgArray[randomNum] + '.jpg'
image.alt = altArray[randomNum]

form.addEventListener('submit', (e) =>{
    e.preventDefault();
    if (email.value !== emailConfirm.value){
        alert("Emails do not match, please try again.")
    }else{
        n = firstName.value;
        form.reset();
        feedback.textContent =`Thank you ${n}, we will be contacting you shortly.`
    }
});



