const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingrese una frase: ', (frase) => {
    const fraseCapitalizada = frase
        .split(' ')
        .map(palabra => palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase())
        .join(' ');

    console.log(`La frase con la primera letra de cada palabra en mayúscula es: ${fraseCapitalizada}`);
    rl.close();
});
