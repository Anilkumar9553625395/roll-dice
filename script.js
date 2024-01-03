
const val=document.getElementById("nd");
const roll =document.getElementById("roll");

const result=document.getElementById("result");
const iresult=document.getElementById("iresult");



roll.onclick=function r()
{


    let numd=Number(val.value);
   
    let rnumbers=[];
    let images=[];

    for(let i=0;i<numd;i++){

        const random=Math.floor(Math.random()*6)+1;

        rnumbers.push(random);
        images.push(`<img src="dice-images/${random}.png">`);

       
    }
    result.textContent=rnumbers.join("-");
    iresult.innerHTML=images.join("");

                        

                                 


}

