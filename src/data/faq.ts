export interface FaqItem {
  pregunta: string;
  respuesta: string;
}

export const faq: FaqItem[] = [
  {
    pregunta: '¿CUÁNTO CUESTA UNA LANDING PAGE?',
    respuesta: 'Depende del alcance. En la primera reunión te damos un precio cerrado, sin sorpresas.',
  },
  {
    pregunta: '¿EN CUÁNTO TIEMPO ENTREGAN?',
    respuesta: 'Una landing page entre 1 y 2 semanas. Un sitio institucional entre 3 y 6 semanas, dependiendo de la complejidad y la velocidad de feedback.',
  },
  {
    pregunta: '¿DE QUIÉN ES EL CÓDIGO UNA VEZ ENTREGADO?',
    respuesta: 'Tuyo, 100%. Te entregamos el repositorio con todo el código y acceso completo al hosting.',
  },
  {
    pregunta: '¿INCLUYEN HOSTING Y DOMINIO?',
    respuesta: 'El hosting está incluido en todos los planes. El dominio lo podés registrar vos o te ayudamos a gestionarlo.',
  },
];
