const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingrese una palabra: ', (palabra) => {
    const palabraLimpia = palabra.replace(/\s+/g, '').toLowerCase();
    const palabraInvertida = palabraLimpia.split('').reverse().join('');
    
    if (palabraLimpia === palabraInvertida) {
        console.log('La palabra es un palíndromo.');
    } else {
        console.log('La palabra no es un palíndromo.');
    }
    
    rl.close();
});
