const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingrese una frase: ', (frase) => {
    const palabras = frase.trim().split(/\s+/);
    const numeroDePalabras = palabras.length;

    console.log(`El número de palabras en la frase es: ${numeroDePalabras}`);
    rl.close();
});
