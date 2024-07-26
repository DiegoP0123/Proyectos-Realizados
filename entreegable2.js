function llenardatos() {
    let cli = document.getElementById('cliente').value;
    let des = document.getElementById('destino');
    let selectedOption = des.options[des.selectedIndex];
    let selectedOptionText = selectedOption.text;
    let selectedOptionValue = parseFloat(selectedOption.value); // Convertimos el valor a número

    let tipoPago = "";
    let radios = document.getElementsByName('pago');
    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            tipoPago = radios[i].nextElementSibling.textContent;
            break;
        }
    }

    let costoTotal = selectedOptionValue;

    if (tipoPago === "Efectivo") {
        costoTotal = costoTotal - (costoTotal * 0.05);
    } else if (tipoPago === "Tarjeta de crédito") {
        
        costoTotal = costoTotal + (costoTotal * 0.06);
    }

    document.form2.comentario.value = "Hola " + cli + ", el destino es " + selectedOptionText + 
    ", el tipo de pago es: " + tipoPago + ", y el costo total es: "+ costoTotal.toFixed(2); 
}