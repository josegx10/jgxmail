import Link from "next/link";

export default function register() {
    return (
        <div className="bg-slate-50">
            <div className="flex items-center justify-center h-screen">

                <div className="w-full max-w-lg px-6">

                    <h2 className="text-center text-2xl font-bold mb-6">
                        Registro
                    </h2>

                    <form className="space-y-4">

                        <div>
                            <label className="block mb-1 text-gray-600">
                                Nombre Completo
                            </label>
                            <input type="text"
                                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                                placeholder="Nombre Completo" />
                        </div>

                        <div>
                            <label className="block mb-1 text-gray-600">
                                Correo Electrónico
                            </label>
                            <input type="email"
                                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                                placeholder="usuario@correos.com" />
                        </div>

                        <div>
                            <label className="block mb-1 text-gray-600">
                                Contraseña
                            </label>
                            <input type="password"
                                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                                placeholder="Contraseña" />
                        </div>

                        <div>
                            <label className="block mb-1 text-gray-600">
                                Confirmar Contraseña
                            </label>
                            <input type="password"
                                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                                placeholder="Confirmar Contraseña" />
                        </div>

                        <button
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition">
                            Registrarse
                        </button>

                    </form>

                    <div className="mt-6 text-center">
                        <p>
                            ¿Ya tienes una cuenta?
                            <Link href={"/login"} className="text-blue-600 hover:underline">
                                Inicia Sesión
                            </Link>
                        </p>
                    </div>

                </div>

            </div>
        </div>
    );
}