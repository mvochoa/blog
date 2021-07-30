export function formatDate(date) {
  if (!date) return 'Fecha no valida'

  if (!date.includes('T')) {
    date += 'T00:00:00'
  }
  return new Date(date).toLocaleDateString('es-MX', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
