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

function esRunValido(e) {
    if(!validaRun(e)) {
        alert('¡Error! Ingrese un RUN válido');
        document.getElementById('run').value = "";
        document.registro.run.focus();
    }
}

function validaRun(e) {
    var nums = [2, 3, 4, 5, 6, 7];
    var arrayRun = e.value.split("-");
    var runNormal = arrayRun[0];
    var digVer = arrayRun[1];
    var runVolt = "";


    for(var i=runNormal.length; i>=0; i--) {
        runVolt += runNormal.charAt(i);
    }

    var mult = 0;
    var cont = 0;

    for(var i=0; i<runVolt.length; i++) {
        mult += parseInt(runVolt.charAt(i)) * nums[cont];
        cont += 1;
        if(cont == 6) cont = 0;
    }

    var cuo = mult%11;
    var digVerResult = 11 - cuo;

    var digVerNum = parseInt(digVer);

    if(digVerResult == digVerNum) {
        return true;
    }else if(digVerResult == 11 && parseInt(digVer) == 0) {
        return true;
    }else if(digVerResult == 10 && (digVer.toLowerCase() == 'k')) {
        return true;
    }else {
        return false;
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