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