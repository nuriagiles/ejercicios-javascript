/*NIVELL 2*/ 
//6. Click i console.log:
document.querySelector("#boto1").addEventListener("click", function(){
    console.log("Clic rebut!")
});

//7. Click i textContent
document.querySelector("#boto2").addEventListener("click", function(){
    document.querySelector("#missatge").textContent = "Has fet clic!"
});

//8. Click i innerHTML
let boto = document.querySelector("#boto3")
let zona = document.querySelector("#zona")

boto.addEventListener("click", function(){
    zona.innerHTML = "<strong>Contingut nou</strong>"
});

//9. Input i .value
let entrada = document.querySelector("#entrada")
let sortida = document.querySelector("#sortida")

entrada.addEventListener("input", valorInput)

function valorInput(){
    sortida.textContent = entrada.value
}

//10. Canviar .value des de JS
let camp = document.querySelector("#camp")
let btnClick = document.querySelector("#boto4")

btnClick.addEventListener("click", introduit)

function introduit(){
    camp.value = "Text introduït per JS"
}