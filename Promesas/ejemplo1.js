function validarNum(numero){
    return new Promise((resolve, reject)=>{
        if (numero ==5){
            resolve(`El numero es ${numero}`)
        }else{
            reject(`El número no es 5`)
        }   
    })
}

validarNum("5")
.then(mensaje=>{
    console.log(`mensaje:`+ mensaje)
})
.catch(error =>{
    console.log(`Error:`+ error)
})