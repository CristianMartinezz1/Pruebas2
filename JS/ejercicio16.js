const sumar = (a, b) => a + b;
const restar = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => b !== 0 ? a / b : 'Error: División por cero';

const calcularOperacion = (operacion) => {
    const input1 = document.getElementById('numero1').value.trim();
    const input2 = document.getElementById('numero2').value.trim();
    const cajaResultado = document.getElementById('resultado');

    if (input1 === "" || input2 === "" || isNaN(input1) || isNaN(input2)) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Por favor, ingresa números válidos en ambos campos.',
            confirmButtonColor: '#000000'
        });
        cajaResultado.value = '';
        return;
    }

    const num1 = parseFloat(input1);
    const num2 = parseFloat(input2);
    let resultado = 0;

    switch (operacion) {
        case 'sumar':
            resultado = sumar(num1, num2);
            break;
        case 'restar':
            resultado = restar(num1, num2);
            break;
        case 'multiplicar':
            resultado = multiplicar(num1, num2);
            break;
        case 'dividir':
            resultado = dividir(num1, num2);
            if (resultado === 'Error: División por cero') {
                Swal.fire({
                    icon: 'warning',
                    title: 'Atención',
                    text: 'No se puede dividir entre cero.',
                    confirmButtonColor: '#000000'
                });
                cajaResultado.value = '';
                return;
            }
            break;
        default:
            resultado = 0;
    }

    cajaResultado.value = resultado;
};