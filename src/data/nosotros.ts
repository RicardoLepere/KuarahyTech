export interface Valor {
  title: string;
  desc: string;
  borderColor: 'sol' | 'amanecer' | 'cielo';
}

export const valores: Valor[] = [
  {
    title: '▸ UNA SOLA MARCA',
    desc: 'El estudio y los productos comparten identidad: mismo logo, misma paleta, misma seriedad. Tratás con una empresa consolidada.',
    borderColor: 'sol',
  },
  {
    title: '▸ CERCANÍA REAL',
    desc: 'Hablás directo con quienes escriben el código. Sin intermediarios, sin jerga corporativa, sin vueltas.',
    borderColor: 'amanecer',
  },
  {
    title: '▸ DESDE EL DÍA UNO',
    desc: 'Entregamos cosas que funcionan. Frases cortas, verbos de acción y software que sale a producción.',
    borderColor: 'cielo',
  },
];

export interface TeamMember {
  initial: string;
  name: string;
  role: string;
  stack: string[];
  avatarAlt: boolean;
}

export const equipo: TeamMember[] = [
  {
    initial: 'L',
    name: 'LUCIANO MENDIETA',
    role: 'Frontend developer ▸ foco en frontend y atención a la lógica del programa.',
    stack: ['ASTRO', 'TAILWIND', 'ASP .NET CORE', 'BLAZOR'],
    avatarAlt: false,
  },
  {
    initial: 'R',
    name: 'RICARDO PEREZ',
    role: 'Backend developer ▸ backend, lógica de negocio e integraciones.',
    stack: ['LARAVEL', 'POSTGRES', 'JAVASCRIPT', 'N8N'],
    avatarAlt: true,
  },
];
