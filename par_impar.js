// const rl=require('readline').createInterface({input:process.stdin, output:process.stdout})
// console.log("======IF ELSE======")
// rl.question('escribe un numero: ', (n)=>{
//     const numero=Number(n);
//     if (isNaN(numero)){
//         console.log("entrada invalida")
//         return
//     }else if(numero%2===0){
//         console.log("es par")
//     }else{
//         console.log("es impar")
//     }
//     rl.close()
// })
// console.log("____________________")
console.log("======SWITCH======")

const option = 2;

switch (option) {
    case 1:
        console.log("Medico");
        break;

    case 2:
        console.log("Odontologia");
        break;

    case 3:
        console.log("Cirujano");
        break;

    default:
        console.log("No existe esta opcion");
        break;
}

console.log("____________________")
console.log("======FOR======")

for (let i = 1; i <= 5; i++) {
    console.log("vuelta número:", i);
}

console.log("____________________")
console.log("======WHILE======")

let i = 1;

while (i <= 5) {
    console.log(" vuelta con while número:", i);
    i++;
}

