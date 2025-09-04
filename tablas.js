//tsblsd de multiplicar
let cont1 = 1;

while (cont1 <= 10) {
    console.log(`Tabla del ${cont1}`);
    let cont2 = 1;
    while (cont2 <= 10) {
        console.log(`${cont1} x ${cont2} = ${cont1 * cont2}`);
        cont2++;
    }
    console.log("---------------------------");
    cont1++;
}
