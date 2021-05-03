function validaContactanos() {
    var nombre = document.getElementById('nombre').value;
    var edad = document.getElementById('edad').value
    var nac = document.getElementById('nacionalidad').selectedIndex;
    var tel = document.getElementById('fono').value;
    var coment = document.getElementById('comentarios').value;

    if(nombre == null || nombre.length==0 || /^\s+$/.test(nombre)) {
        alert('¡Error! Debe ingresar un nombre.');
        document.getElementById('nombre').value="";
        document.contact.nombre.focus();
        return false;
    }

    if(isNaN(edad) || edad.length == 0) {
        alert('¡Error! Debe ingresar una edad válida.');
        document.getElementById('edad').value="";
        document.contact.edad.focus();
        return false;
    }

    if(nac == null || nac == 0) {
        alert('¡Error! Debe seleccionar una opción.');
        document.contact.nacionalidad.focus();
        return false;
    }

    if(!(/^\d{9}$/.test(tel)) ) {
        alert('¡Error! Debe ingresar un teléfono válido.');
        document.getElementById('fono').value="";
        document.contact.fono.focus();
        return false;
    }

    if(coment == null || coment.length==0) {
        alert('¡Error! Debe ingresar un comentario');
        document.contact.comentarios.focus();
        return false;
    }

    return true;
}