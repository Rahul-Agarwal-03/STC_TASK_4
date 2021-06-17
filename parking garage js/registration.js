const student = document.querySelector("#name");
const reg = document.querySelector("#Register_number");
const email = document.querySelector("#email");
const number = document.querySelector("#Mobile_Number");
const form = document.querySelector("form");
const letters = /^[A-Za-z]+$/;
const letterno = /^[0-9a-zA-Z]+$/;
const phoneno = /^\d{10}$/;
const mail = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
form.addEventListener("submit",function(e){
      e.preventDefault();
      console.log(`${form.elements.student.value}`);
      console.log(`${form.elements.reg.value}`);
      console.log(`${form.elements.date.value}`);
      console.log(`${form.elements.prog.value}`);
      console.log(`${form.elements.email_id.value}`);
      console.log(`${form.elements.number.value}`);
    
})
student.addEventListener("change",function(){
    if(!(form.elements.student.value.length<=30 && letters.test(form.elements.student.value)))
    {
       alert("Student Name Should consist only of letter and should be less than 30 characters");
    }
})
reg.addEventListener("change",function(){
    if(!(letterno.test(form.elements.reg.value)))
    {
        alert("Registration number should have alphabets and numbers only");
    }
})
email.addEventListener("change",function(){
    if(!(mail.test(form.elements.email_id.value)))
    {
        alert("Please enter a valid mail id");
    }
})
number.addEventListener("change",function(){
    if(!(phoneno.test(form.elements.number.value)))
    {
        alert("Please Enter A valid No.");
    }
})



