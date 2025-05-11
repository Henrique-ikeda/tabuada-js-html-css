//recebendo inf
const multiplicationForm = document.querySelector("#multiplication-form");
const  numero = document.querySelector("#number");
const quantidade = document.querySelector("#multiplicator");
const multiplicationTitle = document.querySelector(".multiplication-title span")
const multiplicationTable = document.querySelector("#multiplication-operations");

//-----------------------------------------------------------------------------------

const createTable=(numero1,quantidade1)=>{
    multiplicationTable.innerHTML="";
    for(let i=0 ; i<=quantidade1 ;i++){
        const resultado = numero1*i;
        multiplicationTable.innerHTML +=`<p class="row"> ${numero1} x ${i} = ${resultado}</p>`;
    }
}


//-----------------------------------------------------------------------------------
//evento para validação
multiplicationForm.addEventListener("submit",(e)=>{
    e.preventDefault();

    const numero1 = +numero.value;

    const quantidade1 = +quantidade.value;

    if(!quantidade1 || !numero1){
        return
    } /*ao fazer isso, o botão nao tera resposta se nao tiver algum resultado*/ 

    createTable(numero1,quantidade1);
})
