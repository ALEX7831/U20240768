//Se crea una promesa que resuelve despues de un tiempo determinao (3 segundos)
const esperarTresSegundos = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve("Tiempo completado despues de 3 segundos")

    }, 3000)
})

//Consumo de la promesa 
esperarTresSegundos
.then((mensaje)=>{
    console.log(mensaje); //Mostrar ekl mensaje despues de 3 segundos 
})
.catch((error)=>{
    console.error(error); //Captura de errores en caso de fallo
})