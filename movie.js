const form=document.querySelector("form");
const email=form.elements.email;
const movie=form.elements.movie;
const ticket = form.elements.ticket;
const booking = document.querySelector(".booking");
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
    booking.append(`Hi, ${form.elements.name.value}, you have booked ${ticket.value} ticket of ${movie.value}. It will cost you ${calculatePrice(ticket.value)}. Ticket has been sent to your mail id ${email.value}`)
})