//Funcion que simula una solicitud de datos 
function solicitarDatosDelServidor(){
    return new Promise((resolve,reject)=>{
        let exito = false;//Simula si la solicitud es exitosa o no 

        setTimeout(() =>{
            if(exito){
                //Si la solicitud tiene exito , resuelve con los datos 
                resolve({
                    id: 1,
                    nombre: "Misael Juarez",
                    edad:"19",
                })
            }else {
                //Si la solicitud falla, se rechaza con un mensaje de error
                reject("error al obtener los datos del servidor");
            }
        }, 2000)
    })
}

//Consumo de la promesa 
solicitarDatosDelServidor()
.then((datos)=>{
    console.log("Datos recibidos",datos)
})
.catch((error)=>{
    console.error(error)
})