

export const formatDateShort = (value) => {
    const fechaActual = new Date()
    const fechaPasada = new Date(value)

    const diferencia = fechaActual - fechaPasada

    const segundos = Math.floor(diferencia / 1000)
    const minutos = Math.floor(segundos / 60)
    const horas = Math.floor(minutos / 60)
    const dias = Math.floor(horas / 24)
    const semanas = Math.floor(dias / 7)

    const meses = Math.floor(dias / 30)
    const anios = Math.floor(dias / 365) 

    const fecha = `Han pasado ${anios} años ${meses} 
    meses ${semanas} semanas ${dias} dias ${horas} horas ${minutos} minutos ${segundos} segundos`

    return fecha
}


// segundos,
// minutos,
// horas,
// dias,
// semanas,
// meses,
// anios