function validaCampCal(numero1,numero2) {
	if(numero1=="" || numero2==""){
		return "Campos vacios";
	}
	return null;
}

function calcula(numero1,numero2, operacion){
	numero1=parseFloat(numero1);
	numero2=parseFloat(numero2);
	switch(operacion){
		case "sumar": return numero1 + numero2;
		case "restar": return numero1 - numero2;
		case "multiplicar": return numero1 * numero2;
		case "dividir":
			if(numero2==0) return "No es posible dividir para 0"; 
			return numero1/numero2;
	}
}

function actualizarReCalc(mensaje){
	document.getElementById("calcResultado").textContent = mensaje;
}

document.querySelectorAll("#calculadora button").forEach(btn =>{
	btn.addEventListener("click", () => {
		const numero1 = document.getElementById("numero1").value;
		const numero2 = document.getElementById("numero2").value;
		const error = validaCampCal(numero1,numero2);
		if(error){
			actualizarReCalc(error);
		}
		const operacion = btn.id.replace("btn", "").toLowerCase();
		const resultado = calcula(numero1, numero2, operacion);
		actualizarReCalc(resultado);

	});
});

function validarFormulario(nombre, correo, contrasena, fechNac){
  if(!nombre || !correo || !contrasena || !fechNac){
    return "Campos vacíos, complételos";
  }
  if(nombre.length < 3) return "Nombre muy pequeño";
  if(contrasena.length < 6) return "Contraseña muy pequeña";
  const regexCorreo = /\S+@\S+\.\S+/;
  if(!regexCorreo.test(correo)) return "Correo inválido";
  return null;
}

function actualizarMensajeForm(mensaje, tipo){
  const p = document.getElementById("mensaje");
  p.textContent = mensaje;
  p.style.color = tipo === "error" ? "red" : "green";
}


document.getElementById("registroForm").addEventListener("submit", e =>{
	e.preventDefault();
	const nombre = document.getElementById("nombre").value.trim();
	const correo = document.getElementById("correo").value.trim();
	const contrasena = document.getElementById("contrasena").value.trim();
	const fechNac = document.getElementById("fechNac").value;
	
	const error = validarFormulario(nombre, correo, contrasena, fechNac);
	if(error){ 
		actualizarMensajeForm(error,"error");
		
	}else {
		actualizarMensajeForm("Registro exitoso","exitazo");
		
	}
});

function calcularDiferenciaFecha(fecha1, fecha2){
  const f1 = new Date(fecha1);
  const f2 = new Date(fecha2);
  const diffMs = Math.abs(f2 - f1);
  return diffMs / (1000 * 60 * 60 * 24);
}

function actualizarResultFecha(mensaje){
  document.getElementById("resultFecha").textContent = mensaje;
}

document.getElementById("btnCalcFechas").addEventListener("click", () => {
  const fecha1 = document.getElementById("fecha1").value;
  const fecha2 = document.getElementById("fecha2").value;
  if(!fecha1 || !fecha2){
    actualizarResultFecha("Debe seleccionar ambas fechas");
    return;
  }
  const dias = calcularDiferenciaFecha(fecha1, fecha2);
  actualizarResultFecha(`La diferencia es de ${dias} días.`);
});
