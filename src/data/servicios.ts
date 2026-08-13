import { waLink } from './site';

export interface Servicio {
  num: string;
  title: string;
  desc: string;
  feats: string[];
  ctaHref: string;
}

export const servicios: Servicio[] = [
  {
    num: 'S1',
    title: 'LANDING PAGES',
    desc: 'Una página enfocada en convertir. Ideal para lanzamientos o campañas.',
    feats: ['Diseño a medida', 'Optimizada SEO', 'Entrega en 1-2 semanas'],
    ctaHref: waLink('Hola! Quiero cotizar una landing page'),
  },
  {
    num: 'S2',
    title: 'SITIOS INSTITUCIONALES',
    desc: 'Presencia online completa. Múltiples secciones y panel editable.',
    feats: ['5 a 10 secciones', 'CMS editable', 'SEO basico incluido'],
    ctaHref: waLink('Hola! Quiero cotizar un sitio institucional'),
  },
  {
    num: 'S3',
    title: 'SISTEMAS & AUTOMATIZACIONES',
    desc: 'Paneles, integraciones y bots que eliminan el trabajo manual y los errores de carga.',
    feats: ['Integraciones a medida', 'Procesos automáticos', 'Datos centralizados'],
    ctaHref: waLink('Hola! Quiero cotizar un sistema o automatización'),
  },
  {
    num: 'S4',
    title: 'MANTENIMIENTO',
    desc: 'Tu sitio siempre rápido, seguro y al día. Plan mensual con soporte.',
    feats: ['Actualizaciones de seguridad', 'Mejoras menores', 'Soporte por WhatsApp'],
    ctaHref: waLink('Hola! Quiero un plan de mantenimiento'),
  },
    {
    num: 'S5',
    title: 'CRM',
    desc: 'Un lugar único para gestionar clientes, seguimientos y ventas, sin planillas sueltas.',
    feats: ['Seguimiento de clientes', 'Historial centralizado', 'Reportes en tiempo real'],
    ctaHref: waLink('Hola! Quiero cotizar un CRM'),
  }
];

