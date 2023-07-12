import { Form, redirect, useNavigate } from "react-router-dom";
import { eliminarCliente } from "../data/clientes";


export const action = async ({params}) => {
   await eliminarCliente(params.clienteId)
    return redirect('/');
}
export const Clientes = ({ cliente }) => {
    const { nombre, empresa, email, telefono, id } = cliente;
    const navigate = useNavigate();
    return (
        <tr key={id} className="border-b"               >
            <td className="p-6 space-y-2">
                <p className="text-2xl text-gray-800">{nombre}</p>
                <p>{empresa}</p>
            </td>

            <td>
                <p className="text-gray-600"><span className="text-gray-800 uppercase font-bold"> Email: </span> {email}</p>
                <p className="text-gray-600"><span className="text-gray-800 uppercase font-bold"> Tel: </span> {telefono}</p>
            </td>
            <td className="p-6 flex flex-wrap  justify-evenly gap-3">
                <button
                    className=" border border-blue-400 rounded-md px-8 py-2  bg-blue-100 text-blue-600 hover:text-blue-700 uppercase font-bold text-xs"
                    onClick={() => navigate(`/clientes/${id}/editar`)}
                >
                    Editar
                </button>
                <Form
                    method = 'post'
                    action = {`/clientes/${id}/eliminar`}   
                    onSubmit={(e) => {
                       
                        if(!confirm('Deseas eliminar este registro')){
                            e.preventDefault();

                        }
                    }}

                >
                    <button
                        className="border border-red-400 rounded-md px-6 py-2 bg-red-100 text-red-600 hover:text-red-700 uppercase font-bold text-xs"
                    >
                        Eliminar
                    </button>
                </Form>
            </td>
        </tr>
    )
}
