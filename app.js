let datosMostrar = document.getElementById('calculo'); 
let operador = ''; 
let primerosNumeros = '';
let segundosNumeros = '';
let operadorSeleccion = false;

function datosCalculo(value) { 
    if (operador === '') {
        primerosNumeros += value;
        if (operadorSeleccion) { 
            datosMostrar.value = '';
            operadorSeleccion = false;
        }
        datosMostrar.value += value; 
    } else {
        segundosNumeros += value;
        datosMostrar.value = '';
    }
    datosMostrar.value += segundosNumeros;
} 

function operadorSeleccionado(operadorCalculo) { 
    operador = operadorCalculo; 
    operadorSeleccion = true;

    let botones = document.querySelectorAll('.boton-operador');
    botones.forEach(boton => boton.classList.remove('seleccionado'))

    let operadorSeleccionado = document.querySelector(`button[data-operador="${operador}"]`);

    operadorSeleccionado.classList.add('seleccionado');
} 

function calcular() { 
    let resultado;

    let operadorSeleccionado = document.querySelector(`button[data-operador="${operador}"]`);

    operadorSeleccionado.classList.remove('seleccionado');

    if (operador === "%") {
        resultado = parseFloat(primerosNumeros / 100)
    }
    else if (operador === "√") {
        resultado = Math.sqrt(primerosNumeros)
    } else {
        resultado = eval(primerosNumeros + operador + segundosNumeros);
    }
    datosMostrar.value = resultado; 
    operador = ''; 
    primerosNumeros = resultado.toString();
    segundosNumeros = '';
    operadorSeleccion = false;    
}

function limpiar() {
    let valorActual = datosMostrar.value;
    datosMostrar.value = valorActual.slice(0, -1)
}

function limpiarTodo() { 
    datosMostrar.value = ''; 
    operador = '';
    primerosNumeros = '';
    segundosNumeros = ''; 
    operadorSeleccion = false;
}