const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingrese una frase: ', (frase) => {
    rl.question('Ingrese la palabra a reemplazar: ', (palabraVieja) => {
        rl.question('Ingrese la nueva palabra: ', (palabraNueva) => {
            const fraseReemplazada = frase.replace(new RegExp(palabraVieja, 'g'), palabraNueva);
            console.log(`La nueva frase es: ${fraseReemplazada}`);
            rl.close();
        });
    });
});
