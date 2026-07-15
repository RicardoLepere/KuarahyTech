import { waLink } from './site';

export interface ProductoCta {
  label: string;
  href: string;
  primary: boolean;
}

export interface Producto {
  badge: string;
  soon: boolean;
  title: string;
  desc: string;
  feats: string[];
  ctas: ProductoCta[];
}

export const productos: Producto[] = [
  {
    badge: 'SAAS ▸ FINANZAS',
    soon: false,
    title: 'COBRANZAS 360 ▸',
    desc: 'Gestioná el ciclo completo de comisiones de cobranza: los cobradores suben sus comprobantes, contabilidad los aprueba y el sistema calcula todo solo, según la escala que vos definas.',
    feats: [
      'Carga de comprobantes con OCR automático',
      'Flujo de aprobación: cobrador ▸ contabilidad',
      'Escala de comisiones 100% configurable',
      'Dashboard de producción en tiempo real',
    ],
    ctas: [
      { label: 'PROBAR LA DEMO ▸', href: 'https://cobranza360.up.railway.app/login', primary: true },
      { label: 'CONSULTAR ▸', href: waLink('Hola! Quiero saber más sobre Cobranzas 360'), primary: false },
    ],
  },
  {
    badge: 'RPA ▸ INGRESOS',
    soon: true,
    title: 'CUADRE ▸',
    desc: 'Automatizá el cuadre a partir de tus extractos bancarios: el bot lee los documentos, calcula el promedio real de tus ingresos y te ahorra la planilla.',
    feats: [
      'Lee tus extractos bancarios automáticamente',
      'Calcula el promedio de ingresos sin cargar nada a mano',
      'Pensado para pymes y comercios',
    ],
    ctas: [
      { label: 'VER CUADRE ▸', href: 'https://cuadre.up.railway.app/', primary: true },
      { label: 'CONSULTAR ▸', href: waLink('Hola! Quiero saber más sobre Cuadre'), primary: false },
    ],
  },

  {
    badge: 'SAAS ▸ SOPORTE',
    soon: true,
    title: 'MesaPlus ▸',
    desc: 'Organizá el soporte de tu empresa en un solo lugar: tus clientes abren tickets, tu equipo los toma y los resuelve, y todo queda registrado. Con roles y permisos para que cada quien vea solo lo que le toca.',
    feats: [
      'Tickets con estados, asignación e historial',
      'Roles y permisos: cada quien ve solo lo suyo',
      'Panel de administración de usuarios',
    ],
    ctas: [
      { label: 'PRÓXIMAMENTE ▸', href: '', primary: true },
      { label: 'CONSULTAR ▸', href: waLink('Hola! Quiero saber más sobre MesaPlus'), primary: false },
    ],
  }
];
