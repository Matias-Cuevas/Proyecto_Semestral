
/* jquery*/
$(document).ready(function () {
    $("#form1").submit(function (e) {
        e.preventDefault();
        let mensajesMostrar = "";
        let entrar = false;
        var nombre = $("#nom").val();
        if (nombre.length < 4 || nombre.length >10) {
            mensajesMostrar += "El nombre debe tener entre 4 y 10 caracteres. \n ";
            entrar = true;
        }
        var letraInicial = nombre.charAt(0);

        if (!esMayus(letraInicial)) {
            mensajesMostrar += "La primera letras debe ser Mayuscula.";
            entrar = true;
        }
        if (entrar) {
             swal({
                    title: "Error",
                    text: (mensajesMostrar),
                    type: "error"
                });
          
            
        }
        else {
                swal({
                    title: "Cuenta creada",
                    text: "",
                    confirmButtonText: "OK",
                    type: "success"
                }, function() {
                    window.location ="principal.html";})
            
            
        }
    });
    function esMayus(letra) {
        return letra == letra.toUpperCase();
    }
});
