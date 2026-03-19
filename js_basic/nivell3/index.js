/*NIVEL 3*/
//11. Afegir classe
document.querySelector("#boto1").addEventListener("click", function(){
    document.querySelector("#paragraf").classList.add("vermell")
});

//12. Treure classe
document.querySelector("#boto-remove").addEventListener("click", function(){
    document.querySelector("#paragraf").classList.remove("vermell")
});

//13. Alternar amb contains
let texto = document.querySelector("#paragraf")
let btnAltenar = document.querySelector("#alternar")

console.log(texto.classList.contains("vermell"))

btnAltenar.addEventListener("click", function(){
    if(texto.classList.contains("vermell") == false){
        document.querySelector("#paragraf").classList.add("vermell")
    }else{
        document.querySelector("#paragraf").classList.remove("vermell")
    }
});

//14. Classe d’error en input
let email = document.querySelector("#mail")

document.querySelector("#validar").addEventListener("click", function(){
    if(email.value.trim() === ""){
        document.querySelector("#mail").classList.add("error")
    }
});

//15. Amagar/mostrar amb classe
document.querySelector("#amagar").addEventListener("click", function(){
    document.querySelector("#panell").classList.add("amagat")
});

document.querySelector("#mostrar").addEventListener("click", function(){
    document.querySelector("#panell").classList.remove("amagat")
});