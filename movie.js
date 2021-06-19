const form=document.querySelector("form");
const email=form.elements.email;
const movie=form.elements.movie;
const ticket = form.elements.ticket;
const booking = document.querySelector(".booking");
const table= document.createElement("table");
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
form.addEventListener("submit",function(e){
    e.preventDefault();
    booking.appendChild(table);
    document.querySelector("table").innerHTML="<th>Name</th><th>Email Id</th><th>Movie</th><th>Ticket</th><th>Price</th>";
    document.querySelector("table").insertRow(1).innerHTML=`<td>${form.elements.name.value}</td><td>${email.value}</td><td>${movie.value}</td><td>${ticket.value}</td><td>${calculatePrice(ticket.value)}</td>`;
})