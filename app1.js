let readline = require('readline');

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('¿Cuál es su nombre?', (nombre) => {
    console.log(`¡Hola, ${nombre}!`);
    rl.close();
});
