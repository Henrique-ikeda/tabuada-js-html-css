const multiplicationForm = document.querySelector("#multiplication-form");
const numberInput = document.querySelector("#number");
const multiplicationInput = document.querySelector("#multiplicator");

//-------------------------------------------------------------------------------

multiplicationForm.addEventListener("submit",(e)=>{
    e.preventDefault();

    const multiplicationNumber = +numberInput.value;

    const multiplicatorNumber = +multiplicationInput.value;

    if(!multiplicatorNumber || !multiplicationNumber){
        return
    } /*ao fazer isso, o botão nao tera resposta se nao tiver algum resultado*/ 

    console.log(multiplicationNumber,multiplicatorNumber);
})