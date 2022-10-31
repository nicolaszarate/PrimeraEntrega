alert("Ingrese la opcion del producto que desea llevar")
let seleccionarProductos = Number(prompt( "\n1 - Buzo $3000 \n2 - Remera $1500 \n3 - Jean $5000 \n4 - Zapatillas $6000 \nIngrese 0 para finalizar su compra"))
let seleccionarCantidad;
let total = 0;


const cantidad = (cant, precio) => {
  return cant * precio
}


while (seleccionarProductos != 0) {
  switch (seleccionarProductos) {
    case 1:
      seleccionarCantidad= Number(prompt("el producto seleccionado es Buzo, indique la cantidad"))
            total += cantidad(seleccionarCantidad, 3000)
      break;
      case 2:
        seleccionarCantidad = Number(prompt("el producto seleccionado es Remera, indique la cantidad"))
        total += cantidad(seleccionarCantidad, 1500)
      break;
    case 3:
      seleccionarCantidad = Number(prompt("el producto seleccionado es Jean, indique la cantidad"))
      total += cantidad(seleccionarCantidad, 5000)
    break;
    case 4:
      seleccionarCantidad = Number(prompt("el producto seleccionado es Zapatillas, indique la cantidad"))
      total += cantidad(seleccionarCantidad, 6000)
    break;

    default:
        alert("Elegiste una opcion invalida")
      break;
  }
  seleccionarProductos = Number(prompt( "\n1 - Buzo $3000 \n2 - Remera $1500 \n3 - Jean $5000 \n4 - Zapatillas $6000 \nIngrese 0 para finalizar su compra"))
}

alert("El total de la compra es de: " + total)


const envio = () => {
    if (total >= 10000) {
      alert("El envio es gratuito")
    }else{
      total += 1000
      alert("el costo de envio es de 1000, el total es: " + total)
    }
}

