const form=document.querySelector("form");
let email=form.elements.email;
let movie=form.elements.movie;
let ticket = form.elements.ticket;
const booking = document.querySelector(".booking");
const table= document.createElement("table");
const row=document.createElement("tr");
let customer=0;
function calculatePrice(t)
{
    if(t==="platinum")
    {
        return "120Rs"
    }
    if(t==="gold")
    {
        return "100Rs"
    }
    if(t==="silver")
    {
        return "80Rs"
    }
}

booking.appendChild(table);
document.querySelector("table").innerHTML="<th>S No.</th><th>Name</th><th>Email Id</th><th>Movie</th><th>Ticket</th><th>Price</th>";
form.addEventListener("submit",function(e){
    e.preventDefault();
    customer++;
    document.querySelector("table").insertRow(customer).innerHTML=`<td>${customer}</td><td>${form.elements.name.value}</td><td>${email.value}</td><td>${movie.value}</td><td>${ticket.value}</td><td>${calculatePrice(ticket.value)}</td>`;
    form.elements.name.value="";
    email.value="";
    movie.value="";
    ticket.value="";
    
})