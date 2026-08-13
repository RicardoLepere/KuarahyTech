export interface Valor {
  title: string;
  desc: string;
  borderColor: 'sol' | 'amanecer' | 'cielo';
}

export const valores: Valor[] = [
  {
    title: '▸ Misión',
    desc: 'Potenciar a las empresas paraguayas a través de tecnología a medida, cercana y confiable. Desarrollamos software que simplifica el trabajo diario, cuidando cada detalle con un equipo humano que acompaña el crecimiento de nuestros clientes de principio a fin.',
    borderColor: 'sol',
  },
  {
    title: '▸ Visión',
    desc: 'Ser el aliado tecnológico de confianza para las organizaciones en Paraguay, reconocidos no solo por la calidad de nuestro código, sino por la calidez y permanencia en el vínculo que construimos con cada cliente.',
    borderColor: 'amanecer',
  },
  {
    title: '▸ Compromiso',
    desc: 'En Kuarahy Tech, nuestra palabra vale. Construimos soluciones reales y funcionales, manteniendo una relación de transparencia total. Nos comprometemos con tu proyecto como si fuera nuestro, porque creemos que la mejor tecnología es aquella que se crea con dedicación, honestidad y un equipo que siempre está ahí para ti.',
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
    role: 'Full-stack Developer ▸ Arquitectura backend, APIs e integraciones. Modelado de datos.',
    stack: ['ASP.NET CORE', 'ENTITY FRAMEWORK', 'BLAZOR', 'SQL SERVER', 'TAILWIND'],
    avatarAlt: false,
  },
  {
    initial: 'R',
    name: 'RICARDO PEREZ',
    role: 'Full-stack Developer ▸ Backend, APIs, automatización. Modelado de datos. Inteligencia de negocios y diseño de Bases de datos.  ',
    stack: ['PHP', 'LARAVEL', 'JAVASCRIPT', 'PYTHON', 'N8N', 'POWER AUTOMATE', 'CRM', 'POSTGRESQL'],
    avatarAlt: true,
  },
  {
    initial: 'J',
    name: 'JAVIER LIVIERES',
    role: 'Security Administrator - Gestión de políticas, operaciones de seguridad y defensa empresarial',
    stack: ['SECOPS', 'POLICY MGMT', 'THREAT HUNTING', 'BLUE TEAM'],
    avatarAlt: true
  }
];
