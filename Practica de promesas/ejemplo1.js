//una funcion asincrona doTask que recibe un numero de iteraciones 
const doTask = (iteraciones)=>{


    //Retornamos una nueva promesa que contiene la logica 
    return new Promise((resolve,reject)=>{
        //Arreglo donde se almacenaran los numeros aleatorios 
        const numbers =[];

        //  Bucle que itera 'iteraciones' veces 

        for (let i =0; i< iteraciones; i++){
            //Genera un numero aleatorio entre 1 y 6
            const number = 1 + Math.floor(Math.random() *6);

            //Si el numero es 6, rechaza la promesa con un error y detiene el bucle 
            if (number ===6){
                reject({
                    error: true, //Indicador de error 
                    message: 'Se ha sacado un 6' //Mensaje de error
                })
                return; //Detiene la ejecucion de la funcion 
            }
        }
        //Si no se genera un 6 , resuelve la promesa con el arreglo de numeros
        resolve({
            error: false, //No hay error 
            value: numbers //Devuelve el arreglo de numeros generados 
        })
    })
}

//Imprimimos el resultado 
doTask(0)
.then(result => console.log("Tiradas correctas:", result.value))
.catch(err=> console.error("Ha ocurrido algo:",err.message))
