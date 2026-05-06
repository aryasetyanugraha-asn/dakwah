function getInitials(name) {
  if (!name) return '';
  return name.split(' ').map(n => n[0]).join('').toUpperCase();
}
console.log(getInitials('Ustadz Ahmad Faris'));
