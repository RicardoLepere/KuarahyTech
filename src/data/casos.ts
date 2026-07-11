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
    tag: 'RPA ▸ CUADRE',
    title: 'ENTIDAD FINANCIERA',
    problema: 'El equipo de verificación de créditos perdía horas promediando a mano los comprobantes de ingresos que mandaban los bancos.',
    solucion: 'Implementamos Cuadre, nuestro RPA que lee los comprobantes y calcula el promedio de ingresos automáticamente.',
    resultado: 'Lo que antes tomaba horas ahora se resuelve en segundos, sin errores de tipeo ni cuentas a mano.',
  },
  
  
  {
    tag: 'ESTUDIO ▸ AUTOMATIZACIÓN',
    title: 'COMERCIO RETAIL',
    problema: 'Mandaban los mensajes de WhatsApp a sus clientes uno por uno, a mano: horas perdidas todos los días.',
    solucion: 'Implementamos un bot RPA que envía los mensajes de forma automática, sin que nadie tenga que tipear nada.',
    resultado: 'El equipo se liberó de una tarea repetitiva y los mensajes salen siempre a tiempo.',
  },
  {
    tag: 'SAAS ▸ COBRANZAS 360',
    title: 'AREA DE COBRANZAS',
    problema: 'El cálculo de comisiones de cada cobrador vivía en un Excel: a fin de mes los supervisores hacían las cuentas a mano, y un solo número mal puesto le hacía perder trazabilidad a toda la comisión.',
    solucion: 'Creamos un ecosistema de cobranza donde se definen los parámetros y el sistema calcula solo, con seguimiento en tiempo real de metas y porcentajes para cobradores y supervisores.',
    resultado: 'Comisiones calculadas sin errores y un equipo que ve su rendimiento al instante, sin esperar al cierre de mes.',
  },
];
