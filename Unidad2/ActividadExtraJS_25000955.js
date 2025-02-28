function jugar() {
    const numeroComputadora = Math.floor(Math.random() * 9) + 1;
  
    let numeroUsuario;
    let nombreUsuario;
    let numeroCarnet;
    
    nombreUsuario = prompt("Nombre: ");
    numeroCarnet = prompt("Numero de carnet: ");

    do {
      numeroUsuario = parseInt(prompt("Adivine el número de la computadora (1-9): "));
      if (numeroUsuario < 1 || numeroUsuario > 9) {
        alert("Por favor, ingrese un número entre 1 y 9.");
        numeroUsuario = 0;
      }
    } while (numeroUsuario < 1 || numeroUsuario > 9);

    let resultado;
    if (numeroUsuario > numeroComputadora) {
      resultado = "MAYOR";
    } else if (numeroUsuario < numeroComputadora) {
      resultado = "MENOR";
    } else {
      resultado = "IGUAL";
    }

    let opcion = prompt("Adivina! ¿Tu elección fue (mayor), (menor) o (igual)?").toUpperCase();
    
    if(opcion == resultado){
      alert(`La computadora eligió ${numeroComputadora}, usted eligió ${numeroUsuario}. Su elección es ${resultado}. ¡Ha adivinado!`);
    }
    else if(opcion != resultado){
      alert(`La computadora eligió ${numeroComputadora}, usted eligió ${numeroUsuario}. Su elección es ${resultado}. ¡Inténtelo de nuevo!`);
    }
    else{
      alert("error");
    }

    let jugarDeNuevo = prompt("¿Quieres jugar otra vez? (SI/NO)").toUpperCase();
    if (jugarDeNuevo === "SI") {
      jugar(); 
    } else {
      alert("Gracias por jugar. ¡Hasta luego!");
      alert(`Nombre: ${nombreUsuario}\nCarnet: ${numeroCarnet}`); 
    }
  }

  jugar();