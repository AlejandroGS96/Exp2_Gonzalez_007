function Cumple() {
    var fechaNac = new Date(document.getElementById('fechaNac').value);
    var diaNac = fechaNac.getDate()+1;
    var mesNac = fechaNac.getMonth();
    
    var fecha = new Date(Date.now());
    var dia = fecha.getDate();
    var mes = fecha.getMonth();

    if(dia == diaNac && mes == mesNac) {
        alert("Feliz Cumpleaños");
    }
}

function validaRegistrarse() {
    var run = document.getElementById('run').value;
    var nombres = document.getElementById('nombres').value;
    var apellidos = document.getElementById('apellidos').value
    var fechaNac = document.getElementById('fechaNac').value;
    var contrasena = document.getElementById('contrasena').value;

    if(!(run.length >= 9) || run == null || !(run.includes("-"))) {
        alert('¡Error! Debe ingresar un RUN válido');
        document.getElementById('run').value = "";
        document.registro.run.focus();
        return false;
    }

    if(nombres == null || nombres.length==0 || /^\s+$/.test(nombres)) {
        alert('¡Error! Debe ingresar los nombres.');
        document.getElementById('nombres').value="";
        document.registro.nombres.focus();
        return false;
    }

    if(apellidos == null || apellidos.length==0 || /^\s+$/.test(apellidos)) {
        alert('¡Error! Debe ingresar los apellidos.');
        document.getElementById('apellidos').value="";
        document.registro.apellidos.focus();
        return false;
    }

    if(fechaNac.length == 0) {
        alert('¡Error! Debe seleccionar una fecha.');
        document.registro.fechaNac.focus();
        return false;
    }

    if(!(contrasena.length >= 8)) {
        alert('¡Error! Debe ingresar más de 7 carácteres');
        document.getElementById('contrasena').value = "";
        document.registro.contrasena.focus();
        return false;
    }

    return true;
}