// 1st assingment
function anaToVori(ana){
    if(typeof ana !="number"){
        return "Please enter a valid number!!!";
    }
    let vori=ana/16;
    return vori;

}


// 2nd assingment
function pandaCost(singara,somusa,jilapi){
    if(typeof singara !="number" || typeof somusa !="number" ||typeof jilapi !="number"){
        return "Please enter a valid number!!!";
    }
    if(singara<0 || somusa<0 || jilapi<0){
        return "we cannot give u negative food!!";
    }
    const singaraPrice=7;
    const somusaPrice=10;
    const jilapiPrice=15;
    let total=(singaraPrice*singara)+(somusaPrice*somusa)+(jilapiPrice*jilapi);
    return  total;

}
let cost=pandaCost(200, 10, 5)
console.log(cost)

// 3rd assingment
function picnicBudget(numberOfPerson){
    let moneyPerPerson100=5000;
    let moneyPerPerson200=4000;
    let moneyPerPersonmorethan200=3000;
    if(typeof numberOfPerson !="number"){
        return "Please enter a valid number!!!";
    }
    else if(numberOfPerson<0){
        return "Number of person cannot be negative!!"
    }

    else if(numberOfPerson<=100){
        
        let total=moneyPerPerson100*numberOfPerson;
        return total;
    }
    else if(numberOfPerson<=200){
        let first100Person=moneyPerPerson100*100;
        let restPerson=numberOfPerson-200;
        let total=(restPerson*moneyPerPerson200)+first100Person;
        return total;

    }
    else if (numberOfPerson>200){
        let first100Person=moneyPerPerson100*100;
        let second100Person=moneyPerPerson200*100;

        let restPerson=numberOfPerson-200;
        let total=(restPerson*moneyPerPersonmorethan200)+first100Person+second100Person;
        return total;
    }
}






// 4th assingment

function oddFriend(friends){
    if(typeof friends != "object"){
        return "Enter an array of friends !!!!"
    }
    let oddName="";
    for(let i=0;i<friends.length;i++){
        let element=friends[i];
        let len=element.length;
        
        if(len%2!=0){
            oddName=element;
            return oddName;
            
        }
    }
    
    return "there is no odd friends"
}
 let friends=['ini0','ujuo','hiphop']
 console.log(oddFriend(friends))
