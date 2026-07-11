export interface Caso {
  tag: string;
  title: string;
  problema: string;
  solucion: string;
  resultado: string;
  img?: { src: string; alt: string };
}

export const casos: Caso[] = [
  {
    tag: 'ESTUDIO ▸ WEB INSTITUCIONAL',
    title: 'AOTS PARAGUAY',
    problema: 'La asociación necesitaba una presencia digital moderna para difundir becas, cursos y actividades.',
    solucion: 'Sitio institucional rápido, responsive y fácil de mantener, con toda la información centralizada.',
    resultado: 'Una vidriera clara para socios y postulantes, accesible desde cualquier dispositivo.',
    img: { src: '/img/AOTS_Screen.png', alt: 'Captura del sitio web de AOTS Paraguay' },
  },
  {
    tag: 'ESTUDIO ▸ AUTOMATIZACIÓN',
    title: 'COMERCIO RETAIL',
    problema: 'Los pedidos se cargaban a mano, uno por uno: horas perdidas y errores de tipeo todas las semanas.',
    solucion: 'Automatizamos el registro de pedidos con integraciones que hacen el trabajo repetitivo solas.',
    resultado: 'Menos carga manual, menos errores y más tiempo para atender clientes.',
  },
  {
    tag: 'SAAS ▸ COBRANZAS 360',
    title: 'PYME DE SERVICIOS',
    problema: 'Las cuentas por cobrar vivían en planillas: cobros atrasados y plata que se perdía de vista cada mes.',
    solucion: 'Implementamos Cobranzas 360, nuestro ecosistema de gestión financiera, para ordenar clientes, cobros y vencimientos.',
    resultado: 'Visibilidad total de la cartera y decisiones tomadas con datos, no con intuición.',
  },
];
