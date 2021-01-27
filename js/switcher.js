let btn1 = document.getElementById("formButton1");
let btn = document.getElementById("formButton");
let bank = document.getElementById("form2");
let card = document.getElementById("form0");
let but1 = document.getElementById("but1");

btn1.addEventListener('click', () => {
  if (bank.style.display === "none") {
    bank.style.display = "block";
    card.style.display = "none";
    but1.style.display = "none";
  } else {
    bank.style.display = "none";
  }
})

// btn.addEventListener('click', () => {
 
//     bank.style.display = "none";
//     card.style.display = "block";
//     but1.style.display = "block";
  
// })


btn.addEventListener('click', () => window.location.reload());
  