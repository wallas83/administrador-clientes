import { Form, redirect, useNavigate } from "react-router-dom"
import Formulario from "../components/Formulario";

export const action  = async ({request}) => {
    const formData = await request.formData()
    const datos = Object.fromEntries(formData);
    // console.log(datos);
    // el return se usa para redireccionar luego de mandar un submit
    return redirect('/')
}
export const NuevoCliente = () => {
    const navigate = useNavigate();
    return (
        <>
            <h1 className='font-black text-4xl text-blue-900'>Nuevo Clientes</h1>
            <p className='mt-3'>Llena todos los campos para resgistrar un nuevo cliente</p>
            <div className="flex justify-end">
                <button
                    className=" bg-blue-800 text-white px-3 py-1 font-bold uppercase"
                    onClick={() => navigate(-1)}
                >
                    Volver
                </button>
            </div>

            <div
                className="bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10 mt-20">
                <Form
                    method="post"
                   
                >
                    <Formulario />

                    <input
                        type="submit"
                        className="mt-5 w-full bg-blue-800 p-3 uppercase font-bold text-white text-lg"
                    />
                </Form>
            </div>
        </>
    )
}
