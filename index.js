precio = 400000

precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio

function mas ( ){ 
 const buttonmas = document.querySelector(".cantidad") 
buttonmas.innerHTML = Number (buttonmas.innerHTML)+1
 total = document.querySelector(".valor-total")
 total.innerHTML = 400000 * Number (buttonmas.innerHTML) }

function menos ( ){ 
 const buttonmenos = document.querySelector(".cantidad") 
buttonmenos.innerHTML = Number (buttonmenos.innerHTML)-1;
total = document.querySelector(".valor-total")
total.innerHTML = 400000 * Number (buttonmenos.innerHTML)
if(buttonmenos.innerHTML<0) { buttonmenos.innerHTML=0} }