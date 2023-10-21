function mostrar() {
    // escribimos los valores selecionados en el menu de platos y bebidas mediante variables 
    var platoSeleccionado = document.getElementById("platos").value;
    var bebidaSeleccionada = document.getElementById("bebidas").value;
 
    //mediante unas variables ingresamos la cantidad de platos y bebidas registradas por el usuario
    var numeroPlatos = parseInt(document.getElementById("n1").value);
    var numeroBebidas = parseInt(document.getElementById("n2").value);

    //ponemos unas variables para los precios de los platos y bebidas 
    var precioPlato;
    var precioBebida;

    switch (platoSeleccionado) { 
        case "1":
            precioPlato = 13000; //precio del plato caldo de costilla
            break; 
        case "2":
            precioPlato = 18000; ///precio del plato bandeja paisa
            break;
        case "3":
            precioPlato = 20000; //precio del plato sushi
            break;
        case "4":
            precioPlato = 23000; //precio del plato chuletas de cerdo
            break;
        case "5":
            precioPlato = 15000; //precio del plato arepas rellenas 
            break;
        default:
            precioPlato = 0; // ingreso cero ya que si no selecciona el usuario unplato por defecto el precio no es valido
    }

    switch (bebidaSeleccionada) { 
        case "1":
            precioBebida = 9000; //precio de la bebida refajo 
            break;
        case "2":
            precioBebida = 13000; //precio de la bebida champus
            break;
        case "3":
            precioBebida = 5000; //precio de la bebida limonada
            break;
        case "4":
            precioBebida = 3000; //precio de la bebida cafe 
        case "5":
            precioBebida = 10000; //precio de la bebida mojito cubano
            break;
        default:
            precioBebida = 0; // ingreso cero ya que si no selecciona el usuario una bebida por defecto el precio no es valido
    }
    
    //utilizamos unas variables para poder calcular el total a pagar 
    var totalPlatos = numeroPlatos * precioPlato;
    var totalBebidas = numeroBebidas * precioBebida;
    var totalAPagar = totalPlatos + totalBebidas; 

    //aca ya mostramos al usuario el resultado de su pedido 
    document.getElementById("resultado").textContent = "Total a pagar: $" + totalAPagar;
    document.getElementById("respuesta").style.display = "block";
}
