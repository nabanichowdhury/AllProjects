function myGrade(num){
    if(num>=90 && num<=100){
        return 'A+';
    }
    else if(num>=80 ){
        return 'A';

    }
    else if(num>=70 ){
        return 'B';

    }
    else if(num>=60 ){
        return 'C';

    }
    else if(num>=50 ){
        return 'D';

    }
    return 'F';
}

var mygrade=myGrade(90);
console.log(mygrade);