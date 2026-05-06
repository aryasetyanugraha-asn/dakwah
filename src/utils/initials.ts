export function getInitials(name: string | undefined): string {
  if (!name) return '';
  return name.split(' ').map(n => n[0]).join('').toUpperCase().substring(0, 3);
}
