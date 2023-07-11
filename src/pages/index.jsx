import { useLoaderData } from "react-router-dom";
import { Clientes } from "../components/Clientes";
import { obtenerCliente } from "../data/clientes";


// el loader que es aorte de react-router-dom siempore debe retornar algo 
export const loader = () => {
    
   const clientes =  obtenerCliente();
    return clientes
}

export const Index = () => {

    const loaderData =  useLoaderData();
    
  return (
    <>
        <h1 className='font-black text-4xl text-blue-900'>Clientes</h1>
        <p className='mt-3'>Administra tus clientes</p>
        {
            loaderData.length ? (
                <table className="w-full bg-white shadow mt-5 table-auto">
                    <thead className="bg-blue-900 text-white">
                        <tr>
                            <th className="p-2">Clientes</th>
                            <th className="p-2">Contactos</th>
                            <th className="p-2">Acciones</th>
                        </tr>
                    </thead>

                    <tbody>
                        {loaderData.map(cliente  => (
                            <Clientes
                                key={cliente.id}
                                cliente={cliente}
                            />
                        ))}
                    </tbody>
                </table>
            ) : (<p className="text-center mt-10">No hay clientes aun</p>)
        }
    </>
  )
}
