
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
            mensajesMostrar += "La primera letra del nombre debe ser mayúscula.\n";
            entrar = true;
        }
        if ((/\d/.test(contra1) && isNaN(contra1))==false) {
            mensajesMostrar += "La contraseña debe tener al menos 1 número y 1 letra.\n";
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
            mensajesMostrar += "La contraseña debe tener al menos una mayúscula\n";
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

    

$("#form2").submit(function (e) {
  e.preventDefault();
  let mensajesMostrar = "";
  let entrar = false;
  var nombre = $("#nom2").val();
  var letras = "ABCDEFGHIJKMNÑLOPQRSTUVWXYZ";
          



  if (nombre.length < 4 || nombre.length >10) {
      mensajesMostrar += "El nombre debe tener entre 4 y 10 caracteres. \n ";
      entrar = true;
  }
  var letraInicial = nombre.charAt(0);

  if (!esMayus(letraInicial)) {
      mensajesMostrar += "La primera letra del nombre debe ser mayúscula.\n";
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

  

   function correlativo(texto){
      for(i=0; i<texto.length; i++){
         if (Number(texto.charAt(i))+1==Number(texto.charAt(i+1))){
             return 0;
             
         }
     
      }
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
              title: "Sesión iniciada",
              text: "",
              confirmButtonText: "OK",
              type: "success"
          }, function() {
              window.location ="principal.html";})
      
      
  }
});


$("#form_perf").submit(function (e) {
  e.preventDefault();
  let mensajesMostrar = "";
  let entrar = false;
  var contra1 = $("#con3").val();
  var contra2 = $("#con4").val();
  var nombre = $("#nom2").val();
  var letras = "ABCDEFGHIJKMNÑLOPQRSTUVWXYZ";
          



  if (nombre.length < 4 || nombre.length >10) {
      mensajesMostrar += "El nombre debe tener entre 4 y 10 caracteres. \n ";
      entrar = true;
  }
  var letraInicial = nombre.charAt(0);

  if (!esMayus(letraInicial)) {
      mensajesMostrar += "La primera letra del nombre debe ser mayúscula.\n";
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

  

   function correlativo(texto){
      for(i=0; i<texto.length; i++){
         if (Number(texto.charAt(i))+1==Number(texto.charAt(i+1))){
             return 0;
             
         }
     
      }
  }

 

  if ((/\d/.test(contra1) && isNaN(contra1))==false) {
    mensajesMostrar += "La contraseña debe tener al menos 1 número y 1 letra.\n";
    entrar = true;
}
if (contra1.length < 8 || contra1.length >18) {
    mensajesMostrar += "La contraseña debe tener entre 8 y 18 caracteres \n ";
    entrar = true;
}





if(tiene_mayus(contra1)){
  mensajesMostrar += "La contraseña debe tener al menos una mayúscula\n";
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
              title: "Cambios confirmados",
              text: "",
              confirmButtonText: "OK",
              type: "success"
          }, function() {
              window.location ="principal.html";})
      
      
  }
});





    
});





$(document).ready(function () {
    $("#boton").click(function () {
        $.get("https://api.jikan.moe/v4/top/anime", function (inf_guardar) {
          $("#cardss").empty();
            $.each(inf_guardar.data, function (i, item) {
              if (item.title.length>30){
                item.title=item.title.slice(0, 35)+"..."
              };
                $("#cardss").append(
                "  <div class='flip-card' style='margin-right: 2%; margin-bottom: 2%;'> <div class='flip-card-inner'> <div class='flip-card-front'>  <img src='"+item.images.jpg.image_url+
                  " ' alt='Avatar' style='width:300px;height:300px;'> </div> <div class='flip-card-back'><h1> "+(i+1)+".- "+item.title+
                    "</h1> <p style='font-size: 120%;'> Puntuación: "+item.score+
                      "</p> <p> episodios: "+item.episodes+
                        "</p> <div style='padding-left: 2vw;'> <a  href='"+ item.url+"'target='_blank'> Link My anime list</a> </div> </div> </div> </div>"
                    
                    );
            });


        });
    });


});
$(document).ready(function () {
  
  $("#boton1").click(function () {
      var n=$("#nom_anime").val();
      $.get("https://api.jikan.moe/v4/anime?q="+n, function (inf_guardar) {
        $("#cardss").empty();
          $.each(inf_guardar.data, function (i, item) {
              if (item.title.length>30){
                item.title=item.title.slice(0, 35)+"..."
              };

              $("#cardss").append(
              " <div class='flip-card' style='margin-right: 2%; margin-bottom: 4%;'> <div class='flip-card-inner'> <div class='flip-card-front'>  <img src='"+item.images.jpg.image_url+
                " ' alt='Avatar' style='width:300px;height:300px;'>  </div> <div class='flip-card-back'>  <h1 style=''> "+item.title+
                  "</h1> <p style='font-size: 120%;'> Puntuación: "+item.score+
                    "</p> <p> episodios: "+item.episodes+
                      "</p> <div style='padding-left: 2vw;'> <a  href='"+ item.url+"'target='_blank'> Link My anime list</a> </div> </div> </div> </div> "
                  
                  );
          });


      });
  });


});

var input = document.getElementById("nom_anime");
    input.addEventListener("keypress", function(event) {
      if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("boton1").click();
      }
    });

