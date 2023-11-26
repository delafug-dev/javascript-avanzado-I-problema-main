

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

    let fecha = 'Han pasado';

    if (anios > 0) {
        fecha += ` ${anios} años`;
    }
    if (meses > 0) {
        fecha += ` ${meses} meses`;
    }
    if (semanas > 0) {
        fecha += ` ${semanas} semanas`;
    }
    if (dias > 0) {
        fecha += ` ${dias} días`;
    }
    if (horas > 0) {
        fecha += ` ${horas} horas`;
    }
    if (minutos > 0) {
        fecha += ` ${minutos} minutos`;
    }
    if (segundos > 0) {
        fecha += ` ${segundos} segundos`;
    }

    return fecha === 'Han pasado' ? 'Recién sucedido' : fecha;
}