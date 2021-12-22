const input = document.getElementsByTagName("input");
const avertisment = document.getElementById("avertisment");
const tipButton = document.getElementsByClassName("button");
const reset = document.getElementById("end");
const results = document.getElementsByClassName("result");

let tipPerson;
let totalPerson;
let tipPercent;
let contor = 0;



function valid(){
    if(input[2].value<=0){
      avertisment.style.visibility = "visible";
    }
}

function tip(buton){
     tipPercent = 0;

    if(buton == tipButton[0])
    tipPercent = 5;

    if(buton == tipButton[1])
    tipPercent = 10;

    if(buton == tipButton[2])
    tipPercent = 15;

    if(buton == tipButton[3])
    tipPercent = 25;

    if(buton == tipButton[4])
    tipPercent = 50;

    if(buton == tipButton[5])
       tipPercent = tipButton[5].value;
    
    
}

function TotalPerson(){
    totalPerson = 0;
    let total = 0;
    total = parseInt(input[0].value) + parseInt((tipPercent/100) * input[0].value);
    totalPerson = total/input[2].value;
    totalPerson = totalPerson.toFixed(2);
}

function tipAmount(){
    tipPerson = 0;
    tipPerson = ((tipPercent/100) * input[0].value)/input[2].value;
    tipPerson = tipPerson.toFixed(2);
}

for(let i=0; i<5; i++){
    tipButton[i].addEventListener("click", ()=>{
     tip(tipButton[i]);
     tipButton[i].style.backgroundColor = "hsl(172, 67%, 45%)";   
    });
}

input[1].addEventListener("input",()=>{
    tip(tipButton[5]);
})

input[2].addEventListener("input",()=>{
    if(input[2].value<=0){
        avertisment.style.visibility = "visible";
        input[2].style.border = "solid 3px red";
      } else{
    tipAmount();
    TotalPerson();
    results[0].innerHTML = `${tipPerson}`;
    results[1].innerHTML = `${totalPerson}`;
    avertisment.style.visibility = "hidden";
    reset.style.backgroundColor = "hsl(172, 67%, 45%)";
    input[2].style.border = "none";
      }

})

reset.addEventListener("click",()=>{
    tipPerson = 0;
    totalPerson = 0;
    tipPercent = 0;
    results[0].innerHTML = `00.00`;
    results[1].innerHTML = `00.00`;

    reset.style.backgroundColor = "hsl(183, 64%, 26%)";
    
    for(let i = 0; i<3 ; i+=2){
        input[i].value = "" ;
    }

        input[1].value = "";


    for(let i=0; i<5; i++){
        tipButton[i].style.backgroundColor = "hsl(183, 100%, 15%)";
    }

    
})


