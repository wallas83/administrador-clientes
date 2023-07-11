
export const obtenerCliente = async () => {

    const respuesta = await fetch(import.meta.env.VITE_API_URL);
    const resultado = await respuesta.json();

    return resultado;
}

export const agregarDatos = async (datos) => {
    
    try {
        const respuesta = await fetch(import.meta.env.VITE_API_URL, {
                method: 'POST',
                body  : JSON.stringify(datos),
                headers: {
                    'Content-type': 'application/json'
                }
        });
        await respuesta.json();
        
    } catch (error) {
        console.log(error);
    }

}