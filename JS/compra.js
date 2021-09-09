cargaDatos();
$("#img").hide();

window.addEventListener('load', function () {
    javascript:window.print();
    // this.setTimeout(function(){
    //     location.href="comprar.html";
    // },5000);
  })

function cargaDatos(){
    mostrarFecha();
    mostrarNombre();
    mostrarDatosTurno();

    this.setTimeout(function(){
        $("#img").slideDown();
        $("#imgHide").hide();
    },100);

}

function mostrarFecha(){
    const fecha = new Date();
    const dia = fecha.getDate();
    const mes = fecha.getMonth()+1;
    const año = fecha.getFullYear();

    console.log(dia);
    console.log(mes);
    console.log(año);
    
    let mostrarFecha = document.getElementById("fecha");
    mostrarFecha.textContent = ("Fecha: "+ dia + "/"+ mes + "/" + año );
}

function mostrarNombre(){
    if ((localStorage.getItem("Nombre") != null) && (localStorage.getItem("Apellido") != null)){
    let mostrarUsuario = document.getElementById("usuario");    
    var nombre = localStorage.getItem("Nombre");
    var apellido = localStorage.getItem("Apellido");

    tamNombre=nombre.length;
    tamApellido=apellido.length;
    mostrarUsuario.textContent = ("Usuario: "+ nombre.substr(1,tamNombre-2) + " " +  apellido.substr(1,tamApellido-2));
    } else{
        console.log("xd");
    }
}

function mostrarDatosTurno(){
    var Total = localStorage.getItem("Total");
    $("<tr id='precioTotal'><td></td><td>Total estimado</td><td>U$S "+Total+"</td></tr>").insertAfter("#datosRecibo");
    for (let i=1; i<5; i++){
        if (localStorage.getItem("Servicio"+i) != null){
            var turno = localStorage.getItem("Servicio"+i);
            var fTurno = localStorage.getItem("Cantidad"+i);
            var hTurno = localStorage.getItem("Precio"+i);
            tamT=turno.length-2;
            $("<tr id='datosReciboTr'><td id='turno'>"+fTurno+"</td><td id='fechaTurno'>"+turno.substr(1,tamT)+"</td><td id='horarioTurno'>U$S "+hTurno+"</td></tr>").insertAfter("#datosRecibo");
        }
        }
   }
