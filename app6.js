

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingrese una cadena: ', (cadena) => {
    rl.question('Ingrese la posición de inicio: ', (inicio) => {
        rl.question('Ingrese la posición de fin: ', (fin) => {
            const startIndex = parseInt(inicio, 10);
            const endIndex = parseInt(fin, 10);

           
            if (isNaN(startIndex) || isNaN(endIndex) || startIndex < 0 || endIndex < 0 || startIndex > endIndex || endIndex > cadena.length) {
                console.log('Posiciones inválidas. Asegúrese de que las posiciones sean números enteros no negativos y que la posición de inicio sea menor o igual a la posición de fin.');
            } else {
                const subcadena = cadena.substring(startIndex, endIndex);
                console.log(`La subcadena extraída es: "${subcadena}"`);
            }
            rl.close();
        });
    });
});
