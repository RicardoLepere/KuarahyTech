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
    desc: 'El ecosistema de tu gestión financiera. Clientes, cobros y vencimientos en un solo panel: sabé quién debe, cuánto y cuándo cobrás.',
    feats: [
      'Cartera de clientes ordenada',
      'Seguimiento de cobros y pagos',
      'Accesible desde cualquier dispositivo',
    ],
    ctas: [
      { label: 'PROBAR LA DEMO ▸', href: 'https://cobranza360.up.railway.app/login', primary: true },
      { label: 'CONSULTAR ▸', href: waLink('Hola! Quiero saber más sobre Cobranzas 360'), primary: false },
    ],
  },
  {
    badge: 'SAAS ▸ INGRESOS',
    soon: true,
    title: 'CUADRE ▸',
    desc: 'Cuadrá tus números sin planillas. Registrá tus ingresos, mirá el promedio real de tu negocio y decidí con datos, no con corazonadas.',
    feats: [
      'Registro simple de ingresos',
      'Promedios claros al instante',
      'Pensado para pymes y comercios',
    ],
    ctas: [
      { label: 'VER CUADRE ▸', href: 'https://cuadre.up.railway.app/', primary: true },
      { label: 'CONSULTAR ▸', href: waLink('Hola! Quiero saber más sobre Cuadre'), primary: false },
    ],
  },
];
