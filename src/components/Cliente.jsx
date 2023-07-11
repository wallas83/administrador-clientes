
export const Cliente = ({ cliente }) => {
    const { nombre, empresa, email, telefono, id } = cliente;
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
                    className=" border border-blue-400 rounded-md px-6 py-2  bg-blue-100 text-blue-600 hover:text-blue-700 uppercase font-bold text-xs"
                >
                    Editar
                </button>
                <button
                    className="border border-red-400 rounded-md px-6 py-2 bg-red-100 text-red-600 hover:text-red-700 uppercase font-bold text-xs"
                >
                    Eliminar
                </button>
            </td>
        </tr>
    )
}
