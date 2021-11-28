const set1 = new Set([1,2,3,4]);
var a = 3;
switch(true) {
    case a === 3:
        console.log('mobile');
        break;
    case 4:
        console.log('tablet');
        break;
    case 5:
        console.log('desktop');
        break;
    default:
        console.log('default');
 }


 const convertToString = (Obj) => {

     const output = (Obj) => {
         if(typeof Obj != "object") {
         return "Invalid Input!";
         }

         let outputString = "";
         for (const i in Obj) {
             if (Obj.hasOwnProperty(i)) {
                 if(typeof Obj[i] == "object") {
                     outputString = outputString + output(Obj[i]);
                 } else {
                     outputString = outputString + ", " + Obj[i];
                 }
             }
         }

         return outputString;
     }

     let outputString = output(Obj);
     return outputString.slice(2, outputString.length);
     
 }
