// alert("Hola este es mi Javascript")
const form = document.getElementById("form")
const nombre = Document.getElementById("nombre")
const alerta = document.getElementById("alertas")

function validarFormulario(){
    let warnings ="";
    let valido = true;
    alerta.innerHTML = "";
    
    if (nombre.value.lenght<4)
    {
        warnings += "El nombre debe contener mas de 4 caracteres"
        valido = false;
    }

    if (!valido ){
        alerta.innerHTML = warnings;
    }else{
        alerta.innerHTML = "enviado";
    }
    return valido;
}

form.addEventListener("submit",(e)=> {if (validarFormulario()){
    //si la validacion es exitosa, puedes enviar el formulario
    formulario.submit();  
    }
    else {
        e.preventDefault(); //evita que el formuario se envie automaticamente
    }
});