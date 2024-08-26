let readline = require('readline');

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('¿Cuál es tu nombre?', (nombre) => {
    rl.question('¿Cuál es tu apellido?', (apellido) => {
        console.log(`¡Hola, ${nombre} ${apellido}!`);
        rl.close();
    });
});
