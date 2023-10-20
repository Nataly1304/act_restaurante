function mostrar() {
    var platoSeleccionado = document.getElementById("platos").value;
    var bebidaSeleccionada = document.getElementById("bebidas").value;

    var numeroPlatos = parseInt(document.getElementById("n1").value);
    var numeroBebidas = parseInt(document.getElementById("n2").value);

    var precioPlato;
    var precioBebida;

    switch (platoSeleccionado) { 
        case "1":
            precioPlato = 13000; 
            break; 
        case "2":
            precioPlato = 18000; 
            break;
        case "3":
            precioPlato = 20000; 
            break;
        case "4":
            precioPlato = 23000; 
            break;
        case "5":
            precioPlato = 15000; 
            break;
        default:
            precioPlato = 0; 
    }

    switch (bebidaSeleccionada) { 
        case "1":
            precioBebida = 9000; 
            break;
        case "2":
            precioBebida = 13000; 
            break;
        case "3":
            precioBebida = 5000; 
            break;
        case "4":
            precioBebida = 3000; 
        case "5":
            precioBebida = 10000; 
            break;
        default:
            precioBebida = 0;
    }
    
    var totalPlatos = numeroPlatos * precioPlato;
    var totalBebidas = numeroBebidas * precioBebida;
    var totalAPagar = totalPlatos + totalBebidas; 


    document.getElementById("resultado").textContent = "Total a pagar: $" + totalAPagar;
    document.getElementById("respuesta").style.display = "block";
}
