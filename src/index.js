import validator from './validator.js';

// PRIMERA PANTALLA
document.getElementById('screen-two').style.display = 'none';
// document.getElementById('screen-one').style.display = 'none';
// document.getElementById('screen-two').style.display = 'flex';

const myUserAge = document.querySelector('input[type="date"]');

const showAge = (bornDate) => {
  var today = new Date();
  var birthday = new Date(bornDate);
  var age = today.getFullYear() - birthday.getFullYear();
  var monthAge = today.getMonth() - birthday.getMonth();
  if (monthAge <0 || (monthAge ===0 && today.getDate() < birthday.getDate())) {
    age--;
  }
  return age
}

const entryButton = document.getElementById('entryButton');
entryButton.addEventListener('click', () => {
  if(myUserAge.value == ''){
    alert('Por favor ingrese fecha')
    process.exit();
  }
  if(showAge(myUserAge.value)>= 18){
    document.getElementById('screen-one').style.display = 'none';
    document.getElementById('screen-two').style.display = 'flex'
  }
  else{
    alert('Lo sentimos, servicio solo disponible para mayores de 18 años');
  }
})

// SEGUNDA PANTALLA

const formulario = document.querySelector('#form-tarjeta');
const numeroTarjeta = document.querySelector('.numero-grupo .numero');
const nombreTarjeta =document.querySelector('.datos-grupo .nombre');
const mesExpiracion = document.querySelector('.expiracion .mes');
const yearExpiracion = document.querySelector('.expiracion .year');
const btnValidarTarjeta = document.querySelector('#btnValidarTarjeta');
const numeroTarjetaUsuario = document.getElementById('inputNumero');

//* Select del mes generado dinámicamente
for (let i = 1; i <= 12; i++) {
  let opcion = document.createElement('option');
  opcion.value = i;
  opcion.innerText = i;
  formulario.selectMes.appendChild(opcion);
}

//* Select del año generado dinámicamente
const yearActual = new Date().getFullYear();
for (let i = yearActual - 8; i <= yearActual + 8; i++) {
  let opcion = document.createElement('option');
  opcion.value = i;
  opcion.innerText = i;
  formulario.selectYear.appendChild(opcion);
}

// //* Input numero de Tarjeta
formulario.inputNumero.addEventListener('keyup', (e) => {
  let valorInput = e.target.value;
  formulario.inputNumero.value = valorInput
    //* eliminar espacios blancos
    .replace(/\s/g, '')
    //* eliminar letras
    .replace(/\D/g, '')
    //* eliminar el ultimo espacio
    .trim();

  numeroTarjeta.textContent = valorInput;

});

// //* Input nombre de la tarjerta
formulario.inputNombre.addEventListener('keyup', (e) => {
  let valorInput = e.target.value;
  formulario.inputNombre.value = valorInput.replace(/[0-9]/g, '');
  nombreTarjeta.textContent = valorInput;

  if (valorInput == '') {
    nombreTarjeta.textContent = 'SU NOMBRE';
  }
});

// //* Select mes
formulario.selectMes.addEventListener('change', (e) => {
  mesExpiracion.textContent = e.target.value;
});

// //* Select year
formulario.selectYear.addEventListener('change', (e) => {
  yearExpiracion.textContent = e.target.value.slice(2);
});

// VALIDACION DE TARJETA

function checkCC() {
  if (validator.isValid(numeroTarjetaUsuario.value) == true) {
    alert("Su tarjeta " + validator.maskify(numeroTarjetaUsuario.value) + " fue aceptada. Bienvenido a MONOPOLY CASINO")
  } else {
    alert("La tarjeta " + validator.maskify(numeroTarjetaUsuario.value) + " no es válida, vuelva a intentarlo")
  }
}

btnValidarTarjeta.addEventListener('click', checkCC)


// console.log(validator);
