function mularDam(quantity){
    if(typeof quantity != "number"){
      return "Please enter a valid quantity";
    }
    else if(quantity <= 0){
      return "Please enter a valid quantity";
    }
    else if(quantity > 20){
      return "Please want less than that";
    }
  
    let price = 0;
    if(quantity <= 2){
      price = quantity * 30;
    } else {
      price = quantity * 25;
    }
    return price;
  }
  
  console.log(mularDam("abd")) 

  const array = [1, 2, 3, 4, 5, 6, 7];

for (let i = 1; i < array.length; i++) {
 if (i == 5) {
  continue;
 }
 console.log(array[i]);
}

console.log(array.pop())

const str1 = 'Bangladesh is a beautiful country.'; console.log(str1.endsWith("country"));

console.log(Date())
// console.log(Date(today))
// console.log(Date.current())



const array1 = ["121", "12", "1", "112", "111"];

console.log(array1.sort());