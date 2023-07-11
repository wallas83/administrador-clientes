import { Link, Outlet, useLocation } from "react-router-dom"

export const Layout = () => {
    const location = useLocation();
    return (
        <>
            <div className="md:flex md:min-h-screen">
                <aside className="md:w-1/4 bg-blue-900 px-5 py-10">
                    <h2 className="text-4xl font-black text-center text-white">CRM clientes</h2>
                    <nav className="mt-10">
                        <Link className={` ${location.pathname === '/' ? 'text-white' : 'text-blue-400'} text-2xl block mt-2 text-white`} to="/">Clientes</Link>
                        <Link className={` ${location.pathname === '/clientes/nuevo' ? 'text-white' : 'text-blue-400'} text-2xl block mt-2  text-white`} to="/clientes/nuevo"> Nuevo Clientes</Link>
                    </nav>
                </aside>
                <main className="md:w-3/4 p-10 md:h-screen overscroll-auto">
                    <Outlet />
                </main>

            </div>
        </>


    )
}
