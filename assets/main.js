//defino fx
function calcularTotal() {
    // Obtener valores de los inputs utilizando querySelector
    const cantidad = document.querySelector('#cantidad').value;
    const color = document.querySelector('#color').value;
    const precio = 8000;

    // Calcular total
    const total = cantidad * precio;

    // Renderizar valores en el checkout utilizando innerHTML
    document.querySelector('#total').innerHTML = '$' +  total;
    document.querySelector('#cantidadDisplay').innerHTML = cantidad;

    // Actualiza círculo color
    const colorCircle = document.querySelector('#colorCircle');
    colorCircle.style.backgroundColor = color;
}