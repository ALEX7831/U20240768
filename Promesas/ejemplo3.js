let descuento = DESCUENTO2024

function validarCodigo(codigo) {
    return new Promise((resolve, reject) => {
        if (codigo === descuento){
            resolve("Código de descuento valido");
        } else {
            reject("Código de descuento invalido");
        }
    })
}

validarCodigo(descuento)
.then(mensaje=>{
    console.log(`mensaje:`+ mensaje)
})
.catch(error =>{
    console.log(`Error:`+ error)
})