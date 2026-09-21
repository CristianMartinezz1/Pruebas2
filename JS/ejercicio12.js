document.getElementById('btnConvertir').addEventListener('click', function(event) {
    event.preventDefault();

    const inputMxn = document.getElementById('inputMxn');
    const outputUsd = document.getElementById('outputUsd');
    const mensajeError = document.getElementById('mensajeError');

    const valorStr = inputMxn.value.trim();

    
    const mxn = parseFloat(valorStr);
    if (valorStr === "" || isNaN(mxn) || mxn <= 0) {
        mensajeError.style.display = 'block';
        inputMxn.style.border = '1px solid #000000';
        outputUsd.value = '';
        return;
    }

  
    mensajeError.style.display = 'none';
    inputMxn.style.border = '1px solid #000000';

  
    const tasaDeCambio = 0.055;
    const usd = mxn * tasaDeCambio;

 
    outputUsd.value = usd.toFixed(2);
});