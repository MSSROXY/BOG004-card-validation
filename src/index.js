
const tarjeta = document.querySelector('#tarjeta'),
  btnAbrirFormulario = document.querySelector('#btn-abrir-formulario'),
  formulario = document.querySelector('#formulario-tarjeta'),
  numeroTarjeta= document.querySelector('#tarjeta .numero'),
  nombreTarjeta= document.querySelector('#tarjeta .nombre'),
  logoMarca = document.querySelector('#logo-marca'),
  firma = document.querySelector('#tarjeta .firma p'),
  mesExpiracion = document.querySelector('#tarjeta #expiracion .mes'),
  yearExpiracion = document.querySelector('#tarjeta #expiracion .year'),
  ccv = document.querySelector('#tarjeta .ccv');

//* para voltear la tarjeta al frente
const mostrarfrente = () => {
  if (tarjeta.classList.contains('active')) {
    tarjeta.classList.remove('active');
  }
};

// * rotacion de la tarjeta
tarjeta.addEventListener('click', () => {
  tarjeta.classList.toggle('active');
});

//* boton de abrir formulario
btnAbrirFormulario.addEventListener('click', () => {
  btnAbrirFormulario.classList.toggle('active');
  formulario.classList.toggle('active');
});


//* Select del mes generado dinámicamente
for(let i = 1; i <=12; i++){
  let opcion = document.createElement('option');
  opcion.value = i;
  opcion.innerText = i;
  formulario.selectMes.appendChild(opcion);
}
//* Select del año generado dinámicamente
const yearActual= new Date().getFullYear ();
for(let i = yearActual - 8; i<= yearActual + 8; i++){
  let opcion = document.createElement('option');
  opcion.value = i;
  opcion.innerText = i;
  formulario.selectYear.appendChild(opcion);
}
//* Input numero de Tarjeta
formulario.inputNumero.addEventListener('keyup', (e) => {
  let valorInput = e.target.value;

  formulario.inputNumero.value = valorInput
  //* eliminar espacios blancos
  .replace(/\s/g, '')
   //* eliminar letras
  .replace(/\D/g, '')
  //* poner espacio cada 4 numeros
  //* no lo uso porque me cuenta los espacios .replace(/([0-9]{4})/g, '$1 ')
  //* eliminar el ultimo espacio
  .trim();

  numeroTarjeta.textContent= valorInput;

  if(valorInput == ''){
    numeroTarjeta.textContent = '#### #### #### ####';

    logoMarca.innerHTML = '';
  }

  if(valorInput[0] == 4){
    logoMarca.innerHTML = '';
    const imagen = document.createElement('img');
    imagen.src= 'img/logos/visa2.png';
    logoMarca.appendChild(imagen);
  }
  else if (valorInput[0] == 5){
    logoMarca.innerHTML = '';
    const imagen = document.createElement('img');
    imagen.src= 'img/logos/mastercard.png';
    logoMarca.appendChild(imagen);
  }
  //voltear la tarjeta para verse el frente
  mostrarfrente();
});

//* Input nombre de la tarjerta
formulario.inputNombre.addEventListener('keyup', (e) => {
  let valorInput = e.target.value;

  formulario.inputNombre.value= valorInput.replace(/[0-9]/g,'');
  nombreTarjeta.textContent= valorInput;
  firma.textContent= valorInput;

  if (valorInput =='') {
    nombreTarjeta.textContent = 'SU NOMBRE';
  }

  mostrarfrente();
});

//* Select mes
formulario.selectMes.addEventListener('change',(e) => {
  mesExpiracion.textContent= e.target.value;
  mostrarfrente();
});

//* Select year
formulario.selectYear.addEventListener('change',(e) => {
  yearExpiracion.textContent= e.target.value.slice(2);
  mostrarfrente();
});

//* Select CCV
formulario.inputCCV.addEventListener('keyup', () => {
  if(!tarjeta.classList.contains('active')){
    tarjeta.classList.toggle('active');
  }

  formulario.inputCCV.value = formulario.inputCCV.value
  //* eliminar espacios
  .replace(/\s/g,'')
  //* eliminar letras
  .replace(/\D/g, '');

  ccv.textContent = formulario.inputCCV.value;
});

import validator from './validator.js';

console.log(validator);
