document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("botonBinario").addEventListener("click", convertirBinario);
    document.getElementById("botonOctal").addEventListener("click", convertirOctal);
    document.getElementById("botonHexadecimal").addEventListener("click", convertirHexadecimal);
    document.getElementById("decimal").addEventListener("input", limpiarResultados);
});

const limpiarResultados = () => {
    document.getElementById("mensajeError").textContent = "";
    document.getElementById("resultados").style.display = "none";

    document.getElementById("binarioResultado").textContent = "";
    document.getElementById("contResultBin").style.display = "none";

    document.getElementById("octalResultado").textContent = "";
    document.getElementById("contResultOctal").style.display = "none";

    document.getElementById("hexadecimalResultado").textContent = "";
    document.getElementById("contResultHexadecimal").style.display = "none";
};

const validarValorDecimal = (valor) => {
    if (valor === null || isNaN(valor)) { 
        document.getElementById("mensajeError").textContent = "Ingresa un decimal por favor";
        document.getElementById("mensajeError").style.display = "block"; 
        return false;
    } else {
        document.getElementById("mensajeError").textContent = "";
        document.getElementById("mensajeError").style.display = "none";
        return true;
    }
};

const convertirBinario = () => {
    let valorDecimal = parseInt(document.getElementById("decimal").value);
    if (!validarValorDecimal(valorDecimal)) return; 

    let binario = "";
    while (valorDecimal > 0) {
        binario = (valorDecimal % 2) + binario;
        valorDecimal = Math.floor(valorDecimal / 2);
    }

    document.getElementById("resultados").style.display = "block";
    document.getElementById("binarioResultado").textContent = binario || "0";
    document.getElementById("contResultBin").style.display = "block";
};


const convertirOctal = () => {
    let valorDecimal = parseInt(document.getElementById("decimal").value);
    if (!validarValorDecimal(valorDecimal)) return;

    let octal = "";
    while (valorDecimal > 0) {
        octal = (valorDecimal % 8) + octal;
        valorDecimal = Math.floor(valorDecimal / 8);
    }

    document.getElementById("resultados").style.display = "block";
    document.getElementById("octalResultado").textContent = octal || "0";
    document.getElementById("contResultOctal").style.display = "block";
};

const convertirHexadecimal = () => {
    let valorDecimal = parseInt(document.getElementById("decimal").value);
    if (!validarValorDecimal(valorDecimal)) return;

    const hexChars = "0123456789ABCDEF";
    let hex = "";
    while (valorDecimal > 0) {
        hex = hexChars[valorDecimal % 16] + hex;
        valorDecimal = Math.floor(valorDecimal / 16);
    }

    document.getElementById("resultados").style.display = "block";
    document.getElementById("hexadecimalResultado").textContent = hex || "0";
    document.getElementById("contResultHexadecimal").style.display = "block";
};
