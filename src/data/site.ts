// Cambiá a true para mostrar la página "Próximamente" en vez del sitio completo.
export const COMING_SOON = false;

export const WHATSAPP_NUMBER = '595985895895';
export const WHATSAPP_DISPLAY = '+595 985 895 895';
export const EMAIL = 'grupo@kuarahy-tech.com.py';

export function waLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`${message} ▸`)}`;
}

export const NAV_LINKS = [
  { label: 'SERVICIOS', href: '#servicios' },
  { label: 'PRODUCTOS', href: '#productos' },
  { label: 'CASOS', href: '#casos' },
  { label: 'NOSOTROS', href: '#nosotros' },
] as const;

export const FOOTER_LINKS = [
  { label: 'SERVICIOS', href: '#servicios' },
  { label: 'PRODUCTOS', href: '#productos' },
  { label: 'CASOS', href: '#casos' },
  { label: 'NOSOTROS', href: '#nosotros' },
  { label: 'FAQ', href: '#faq' },
  { label: 'CONTACTO', href: `https://wa.me/${WHATSAPP_NUMBER}`, external: true },
] as const;
