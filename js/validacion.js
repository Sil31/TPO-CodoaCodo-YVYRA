window.onload = iniciar;

function iniciar() {
    document.getElementById('send').addEventListener('click', validate, false);
}

function validar_nombre() {
    var elemento = document.getElementById('nombre');
    if (elemento.value == '') {
        alert('El campo nombre no puede estar vacío')
        return false
    }
    return true;
}

function validar_apellido() {
    var elemento = document.getElementById('apellido');
    if (elemento.value == '') {
        alert('El campo apellido no puede estar vacío')
        return false
    }
    return true; 
}

function valida_mail(){
    var elemento = document.getElementById('emailInfo'); 
	var re=/^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
	if(!re.exec(elemento.value)){
		alert('Email: ' + elemento.value + '   --> no es valido');
        return false
	}
    return true
	}

function validate(e) {
    if (validar_nombre() && validar_apellido() && valida_mail() && confirm('Formulario correcto, desea enviar?')) {
        return true;
    } else{
        e.preventDefault();
        return false
    }
}