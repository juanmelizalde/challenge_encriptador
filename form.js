
function botonencriptar() {
    
    document.getElementById("imagen").style.visibility = "hidden";
    document.getElementById("resultado").style.visibility = "visible";
    let texto= document.getElementById("texto").value;
    document.getElementById("textoEncriptado").value=texto.replace(/[e]/g,'enter').replace(/[i]/g,'imes').replace(/[a]/g,'ai').replace(/[o]/g,'ober').replace(/[u]/g,'ufat');
    Swal.fire({
      imageUrl:"imagenes/encrip.png",
      showConfirmButton: false,
      background:"#021f4200",
      timer: 3000,
      })  
}
function  botondesencriptar(){
  let texto= document.getElementById("texto").value;
  document.getElementById("textoEncriptado").value=texto.replace(/enter/gi,'e').replace(/imes/gi,'i').replace(/ai/gi,'a').replace(/ober/gi,'o').replace(/ufat/gi,'u');;
  Swal.fire({
    imageUrl:"imagenes/desencriptar.png",
    showConfirmButton: false,
    background:"#021f4200",
    timer: 3000,
    }) 
}
function copiar(){
  let texto= document.getElementById("textoEncriptado").value;
  document.getElementById("texto").value=texto;
  document.getElementById("textoEncriptado").value="";
}
function entradaDeTexto(){
  document.getElementById("texto").value="";
  document.getElementById("textoEncriptado").value="";
}

function mayuscula(){  /* funcion Validar que el texto no contenga mayscúlas*/
let expReg = /([A-ZáéíóúäëïöüÁÉÍÓÚ])/g;
let letra=document.getElementById("texto").value;
let validar=expReg.exec(letra);
   if(validar){
      letra = letra.substring(0, letra.length - 1); 
      document.getElementById("texto").value=letra; 

      Swal.fire({
      title: 'No se permite el uso de Mayúsculas y Acentos.',
      icon:'error',
      background:"#0A3871",
      
      showConfirmButton: false,
      timer: 3000,
      })
      
   }
}

  

