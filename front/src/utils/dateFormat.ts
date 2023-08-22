export const formatDate = (unixTimestamp: Date): string => {
  const date = new Date(unixTimestamp) // Convertir a milisegundos

  // Formateo de la fecha
  const day = `0${date.getDate()}`.slice(-2)
  const month = `0${date.getMonth() + 1}`.slice(-2)
  const year = `${date.getFullYear()}`.slice(-2)

  // Formateo de la hora
  let hours: string | number = date.getHours()
  const minutes: string = `0${date.getMinutes()}`.slice(-2)
  const ampm: string = hours >= 12 ? 'pm' : 'am'
  hours = hours % 12
  hours = hours ? hours : 12 // La hora '0' debe ser '12' en formato 12H

  return `${hours}:${minutes} ${ampm} ${day}/${month}/${year}`
}