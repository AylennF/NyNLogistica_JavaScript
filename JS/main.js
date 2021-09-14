// INICIALIZACIONES --------------------------------------------------------------------------------//
$(".seccionCompraServicio").hide();
$(".seccionSeleccionFecha").hide();

window.addEventListener('load', function () {
$('.flexInicial__posicionamiento')
.slideUp(1)
.delay(100)
.fadeIn(1000)
.slideDown(1000)
.delay(1000);
})

{localStorage.clear();}

a=0;
b=0;
id=0;
total=0;
habilitaciones=0;
comExterior=0;
otros=0; 
logistico= 0;

preciohabilitaciones=0;
preciocomExterior=0;
preciootros=0; 
preciologistico= 0;

cantServicios = 0;
servicioSeleccionado="";

const meses = ["Enero", "Febrero", "Marzo", "Abril","Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
const servicioComprado = [];
const ArrayPrecios = [400, 300, 500, 7000];

let mostrarDias = document.createElement("select");
let mostrarHora = document.createElement("select");
let pHora = document.createElement("p");

let servicioLogistica = document.getElementById("Logistica");
let servicioHabilitaciones =document.getElementById("Habilitaciones2");
let servicioComExterior =document.getElementById("ComExterior");
let servicioOtros =document.getElementById("Otros2");

let compraLogistica = document.getElementById("Logistico");
let compraHabilitaciones =document.getElementById("Habilitaciones");
let compraComExterior =document.getElementById("Comercio");
let compraOtros =document.getElementById("Otros");

// FUNCIONES ----------------------------------------------------------------------------------------------//

function borrarComprados() {
  $(".tituloBoleta").remove();
  $("section").remove();
  $(".imprimir").remove();
  $(".divBoleta").remove();
  $(".seccionesTotalBoleta").remove();
  $(".seccionesBoleta").remove();
}

function borrarValores(){
  tam = servicioComprado.length;
  for (let i=0; i<tam; i++){
  servicioComprado[i] = "";
}
servicioComprado.splice(0,tam);
}

function mostrarTitulo(){
  let titulo = document.createElement("section");
    titulo.innerHTML = `<h3 class="tituloBoleta">DETALLES DE COMPRA</h3>
    <div class='imprimir'><div><h4><a href="boleta.html">IMPRIMIR COMPROBANTE</a></h4></div></div>
    <div class="seccionesBoleta">
      <h4>CANTIDAD</h4>
      <h4>DETALLE</h4>
      <h4>PRECIO</h4>
    </div>`
    document.body.appendChild(titulo);
}

function mostrarCompraSobreescribir(){
  tam=servicioComprado.length;
  for (let i=0; i<tam; i++){
    i=i+2;
  for (let c=1; c<=b; c++){
    let servicio2 = document.getElementsByClassName(("servicio"+ b));
    servicio2.textContent = (servicioComprado[i-1].toString());     
    
    let cantidad2 = document.getElementsByClassName(("cantidad"+b));
    cantidad2.textContent = (servicioComprado[i-2].toString());
  }
}
}

function mostrarCompra(){
  j=0;
  tam=servicioComprado.length;
  for (let i=0; i<tam; i++){
    i=i+2;
    j=j+1;
    if (servicioComprado[i-2] != 0){      
      localStorage.setItem("Precio"+j, JSON.stringify(servicioComprado[i]));
      localStorage.setItem("Servicio"+j, JSON.stringify(servicioComprado[i-1]));
      localStorage.setItem("Cantidad"+j, JSON.stringify(servicioComprado[i-2]));

      let compra = document.createElement("section");
        compra.innerHTML =
        `<div class="divBoleta">
        <h4 class="cantidad`+ b +`">${servicioComprado[i-2]}</h4>
        <h4 class="servicio`+ b +`">${servicioComprado[i-1]}</h4>
        <h4>U$S ${servicioComprado[i]}</h4>
        </div>
        `
      document.body.appendChild(compra);
      total=total+servicioComprado[i];
      b=b+1;
    }
    }
    localStorage.setItem("Total", JSON.stringify(total));
  }


function mostrarTotal(){
  let mostrarTotal = document.createElement("section");
  mostrarTotal.innerHTML = `
  <div class="seccionesTotalBoleta">
    <h4></h4>
    <h4>TOTAL</h4>
    <h4>U$S ${total}</h4>
  </div>`
  document.body.appendChild(mostrarTotal);
}


// COMPRA DE SERVICIOS --------------------------------------------------------------------------//
opcionClick=0;
let botonLogistica = document.getElementById("btnLogistica");
let botonHabilitaciones = document.getElementById("btnHabilitaciones");
let botonComExterior = document.getElementById("btnComExterior");
let botonOtros = document.getElementById("btnOtros");
var ServiciosPersona = [];

$(document).ready(function () {
  $('.compraServicio').click(function () {
    $.get("datos.txt", function (data) {
      $("#ajax").html(data);
    });
  });
});

botonLogistica.onclick = () => { 
  opcionClick=1,
  respuestaClick(opcionClick);
  compra();
}

botonHabilitaciones.onclick = () => { 
  opcionClick=2,
  respuestaClick(opcionClick);
  compra();
}

botonComExterior.onclick = () => { 
  opcionClick=3,
  respuestaClick(opcionClick);
  compra();
}

botonOtros.onclick = () => { 
  opcionClick=4,
  respuestaClick(opcionClick);
  compra();
}

function respuestaClick(op) {
  borrarValores();
  switch (op) {
    case 1: 
      inputServicio="Logistico";
      logistico=logistico+1;
      preciologistico=preciologistico+ArrayPrecios[0];
    break;

    case 2: 
      inputServicio="Habilitaciones";
      habilitaciones=habilitaciones+1;
      preciohabilitaciones=preciohabilitaciones+ArrayPrecios[1];
      break;

    case 3: 
      inputServicio="Comercio exterior";
      comExterior = comExterior+1;
      preciocomExterior=preciocomExterior+ArrayPrecios[2];
      break;

    case 4: 
      inputServicio="Otros"; 
      otros=otros+1;
      preciootros=preciootros+ArrayPrecios[3];
      break;
  }

  servicioComprado.push(logistico,"Logistico", preciologistico, habilitaciones,"Habilitaciones" , preciohabilitaciones, comExterior, "Comercio Exterior", preciocomExterior, otros, "Otros", preciootros);
  servicioLogistica.textContent = ("Cantidad: "+ logistico);
  servicioHabilitaciones.textContent = ("Cantidad: "+ habilitaciones);
  servicioComExterior.textContent = ("Cantidad: "+ comExterior);
  servicioOtros.textContent = ("Cantidad: "+ otros);
}

const arrayContenido = ["Nombre", "Apellido", "Email"]; 
let botonComprar = document.getElementById("btnComprar");
compro = 0;

function compra(){
  if (compro == 0){
    mostrarTitulo()
    mostrarCompra();
    mostrarTotal();
    compro = 1;
  } 
  
  else {
    borrarComprados();
    mostrarTitulo()
    mostrarCompra();
    mostrarTotal();
  }
}   

$("#form").submit(function (e) {
  e.preventDefault();
  let hijosFormulario = $(e.target).children();
  
  localStorage.setItem('Nombre', JSON.stringify(hijosFormulario[1].value));
  localStorage.setItem('Apellido', JSON.stringify(hijosFormulario[3].value));
  localStorage.setItem('Correo', JSON.stringify(hijosFormulario[5].value));
  
  $(".sectionInfoContacto").slideToggle();
  $(".seccionSeleccionFecha").fadeIn();
 
  cargarListas();

  mostrarHora.addEventListener('change', function(){
    var opcionHora = mostrarHora.options[mostrarHora.selectedIndex].text
    console.log(opcionHora);    
    localStorage.setItem('Hora', JSON.stringify(opcionHora));

    $(pHora).hide();
    $(mostrarHora).hide();
    $(".seccionCompraServicio").fadeIn();
    
    nombre=hijosFormulario[1].value;
    apellido=hijosFormulario[3].value;
    
    $("<h3 class='usuario'>Usuario activo: <span id='usuario'>"+ nombre + " " +apellido +"</span></h3>").insertAfter("#solicitar");
  }); 
  
});


function cargarListas(){
    // carga los meses y muestra el <p>
    let pMes = document.createElement("p");
    pMes.innerHTML += `<p id="pSelect">Seleccione mes: </p>`
    document.body.appendChild(pMes);

    let mostrarMeses = document.createElement("select");
    mostrarMeses.innerHTML += `
      <option>Seleccione una opción</option>`
      document.body.appendChild(mostrarMeses); 

    for (let i=1; i<=12; i++){
      mostrarMeses.innerHTML += `
      <option>`+meses[i-1]+`</option>`
      document.body.appendChild(mostrarMeses);  
    }

    mostrarMeses.addEventListener('change', function(){
      var opcionMes = mostrarMeses.options[mostrarMeses.selectedIndex].text
      console.log(opcionMes);
      localStorage.setItem('Mes', JSON.stringify(opcionMes));


      switch (opcionMes){
          case "Enero": case "Marzo": case "Mayo": case "Julio": case "Agosto": case "Octubre": case "Diciembre":
            diasMes=31;
          break;
  
          case "Febrero":
            diasMes=28;
          break;
  
          case "Abril": case "Junio": case "Septiembre": case "Noviembre":
            diasMes=30;
          break;
      }

      $(pMes).hide();
      $(mostrarMeses).hide();

      // carga los dias y muestra el <p>
      let pDia = document.createElement("p");
      pDia.innerHTML += `<p id="pSelect">Seleccione dia: </p>`
      document.body.appendChild(pDia);  

      for (let i=1; i<=diasMes; i++){
        mostrarDias.innerHTML += `<option id="opcionesDias">${i}</option>`
        document.body.appendChild(mostrarDias);  
      }

      mostrarDias.addEventListener('change', function(){
        var opcionDia = mostrarDias.options[mostrarDias.selectedIndex].text
        console.log(opcionDia);
        localStorage.setItem('Dia', JSON.stringify(opcionDia));

        
        $(pDia).hide();
        $(mostrarDias).hide();

      // carga hora y muestra <p>
        pHora.innerHTML += `<p id="pSelect">Seleccione hora: </p>`
        document.body.appendChild(pHora); 

        for (let i=7; i<=20; i++){
          for (let min=0; min<6; min++){
            mostrarHora.innerHTML += `<option id="opcionesHora">${i}:${min}0</option>`
            document.body.appendChild(mostrarHora);  
            min=min+2;
          }
        }
      });  
    });
}
