
/* jquery*/
$(document).ready(function () {
    $("#form1").submit(function (e) {
        e.preventDefault();
        let mensajesMostrar = "";
        let entrar = false;
        var nombre = $("#nom").val();
        var contra1 = $("#con1").val();
        var contra2 = $("#con2").val();
        var letras = "ABCDEFGHIJKMNÑLOPQRSTUVWXYZ";
                



        if (nombre.length < 4 || nombre.length >10) {
            mensajesMostrar += "El nombre debe tener entre 4 y 10 caracteres. \n ";
            entrar = true;
        }
        var letraInicial = nombre.charAt(0);

        if (!esMayus(letraInicial)) {
            mensajesMostrar += "La primera letras del nombre debe ser Mayuscula.\n";
            entrar = true;
        }
        if ((/\d/.test(contra1) && isNaN(contra1))==false) {
            mensajesMostrar += "La contraseña debe tener al menos 1 numero y 1 letra.\n";
            entrar = true;
        }
        if (contra1.length < 8 || contra1.length >18) {
            mensajesMostrar += "La contraseña debe tener entre 8 y 18 caracteres \n ";
            entrar = true;
        }

        function tiene_mayus(texto){
            for(i=0; i<texto.length; i++){
           if (letras.indexOf(texto.charAt(i),0)!=-1){
            return 0;
                                                        }
                                    }
             return 1;
        }
    
        if(tiene_mayus(contra1)){
            mensajesMostrar += "La contraseña debe tener al menos una mayuscula\n";
            entrar = true;
        }

        if (/\s/.test(contra1)){
            mensajesMostrar += "La contraseña no puede tener espacios en blanco \n ";
            entrar = true;
         }

         function correlativo(texto){
            for(i=0; i<texto.length; i++){
               if (Number(texto.charAt(i))+1==Number(texto.charAt(i+1))){
                   return 0;
                   
               }
           
            }
        }

        if (correlativo(contra1)==0){
            mensajesMostrar += "La contraseña no puede tener 2 numero correlativos \n ";
            entrar = true;
            }

        if (contra1!=contra2){
             mensajesMostrar += "Las contraseñas no coinciden \n ";
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
