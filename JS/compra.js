cargaDatos();
$("#img").hide();

window.addEventListener('load', function () {
    javascript:window.print();
  })

function cargaDatos(){
    mostrarFecha();
    mostrarNombre();
    mostrarDatosCompra();
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
    } 
}

function mostrarDatosCompra(){
    cantServicios=0;
    var Total = localStorage.getItem("Total");
    $("<tr id='precioTotal'><td></td><td>Total estimado</td><td>U$S "+Total+"</td></tr>").insertAfter("#datosRecibo");
    for (let i=1; i<5; i++){
        if (localStorage.getItem("Servicio"+i) != null){
            var servicio = localStorage.getItem("Servicio"+i);
            var Cantidad = localStorage.getItem("Cantidad"+i);
            var Precio = localStorage.getItem("Precio"+i);
            tamS=servicio.length-2;
            cantServicios=cantServicios+1;
            $("<tr id='datosReciboTr'><td id='turno'>"+Cantidad+"</td><td id='fechaTurno'>"+servicio.substr(1,tamS)+"</td><td id='horarioTurno'>U$S "+Precio+"</td></tr>").insertAfter("#datosRecibo");
        }
    }
}

function mostrarDatosTurno(){
    if (localStorage.getItem("Mes") != null){
        var mes = localStorage.getItem("Mes");
        var dia = localStorage.getItem("Dia");
        var hora = localStorage.getItem("Hora");
        tamDia=dia.length-2;
        tamMes=mes.length-2;
        tamHora=hora.length-2;

        totalTiempo = (cantServicios*30)/60;

        switch (totalTiempo){
            case 0.5:
            $("<tr id='datosReciboTr'><td id='fechaTurno'>"+dia.substr(1,tamDia)+" de "+mes.substr(1,tamMes)+"</td><td id='horarioTurno'>"+hora.substr(1,tamHora)+"</td><td>30min</td></tr>").insertAfter("#tablaTurnos");
            break;

            case 1:
                $("<tr id='datosReciboTr'><td id='fechaTurno'>"+dia.substr(1,tamDia)+" de "+mes.substr(1,tamMes)+"</td><td id='horarioTurno'>"+hora.substr(1,tamHora)+"</td><td>1hr</td></tr>").insertAfter("#tablaTurnos");
            break;

            case 1.5:
                $("<tr id='datosReciboTr'><td id='fechaTurno'>"+dia.substr(1,tamDia)+" de "+mes.substr(1,tamMes)+"</td><td id='horarioTurno'>"+hora.substr(1,tamHora)+"</td><td>1hr 30min</td></tr>").insertAfter("#tablaTurnos");
            break;

            case 2:
                $("<tr id='datosReciboTr'><td id='fechaTurno'>"+dia.substr(1,tamDia)+" de "+mes.substr(1,tamMes)+"</td><td id='horarioTurno'>"+hora.substr(1,tamHora)+"</td><td>2hr</td></tr>").insertAfter("#tablaTurnos");
            break;
        }
    }
}
