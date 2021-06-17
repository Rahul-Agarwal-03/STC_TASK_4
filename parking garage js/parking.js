/*
const form = document.querySelector("form");
const receipt  = document.querySelector(".receipt");
const input = document.querySelector("input");
const btn = document.querySelector("button");
input.style.width ="100px";
function calculateCharges(v)
{
    if(v<=3)
    {
        return "2$";
    }
    else if(v>3&&v<19)
    {
        return `${2+(v-3)*0.5}$`
    }
    else
    {
        return "10$"
    }
}
form.addEventListener('submit', function(e){
    e.preventDefault();
    const value = form.elements.hours.value;   
    receipt.append(`You have to pay: ${calculateCharges(value)} for ${value} hours`);
    
})*/
const receipt  = document.querySelector(".receipt");
function calculateCharges(v)
{
    if(v<=3)
    {
        return "2$";
    }
    else if(v>3&&v<19)
    {
        return `${2+(v-3)*0.5}$`
  }
    else
    {
        return "10$"
    }
}
    const value =prompt("Please Enter No. of hours")   
    if(value>0&&value<=24){


    receipt.append(`You have to pay: ${calculateCharges(value)} for ${value} hours`);
    }
    else
    {
        receipt.append("You can only park for 0-24 hours!");
    }
