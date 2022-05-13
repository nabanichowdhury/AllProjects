function updateCaseNumber(inutIdNumber,inputIdPrice,price,isIncreasing){
    const caseInput=document.getElementById(inutIdNumber);
    let caseNumber=caseInput.value; 
    if(isIncreasing){
        caseNumber=parseFloat(caseNumber)+1;
    }
    else if(caseNumber>0){
        caseNumber=parseFloat(caseNumber)-1

    }
    caseInput.value=caseNumber;


    const caseTotal=document.getElementById(inputIdPrice);
    caseTotal.innerText=caseNumber*price;
}






document.getElementById("case-plus").addEventListener("click",function(){
    updateCaseNumber("case-number","case-total",59,true);

})

document.getElementById("case-minus").addEventListener("click",function(){
    updateCaseNumber("case-number","case-total",59,false);
})

document.getElementById("phone-plus").addEventListener("click",function(){
    updateCaseNumber("phone-number","phone-total",1219,true)
})
document.getElementById("phone-minus").addEventListener("click",function(){
    updateCaseNumber("phone-number","phone-total",1219,false)
})