const tarjeta = document.querySelector('#tarjeta'),
  btnAbrirFormulario = document.querySelector('#btn-abrir-formulario'),
  formulario = document.querySelector('#formulario-tarjeta');

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



import validator from './validator.js';

console.log(validator);
