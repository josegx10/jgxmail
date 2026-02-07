import Link from "next/link";

export default function Login() {
    return (
        <div className="bg-slate-50">
            <div className="flex items-center justify-center h-screen">

                <div className="w-full max-w-md px-6">

                    <h2 className="text-center text-2xl font-bold mb-6">
                        Iniciar Sesión
                    </h2>

                    <form className="space-y-4">

                        <div>
                            <label className="block mb-1 text-gray-600">
                                Correo Electrónico
                            </label>
                            <input type="email"
                                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                                placeholder="usuario@correos.com"/>
                        </div>

                        <div>
                            <label className="block mb-1 text-gray-600">
                                Contraseña
                            </label>
                            <input type="password"
                                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                                placeholder="Contraseña"/>
                        </div>

                        <div className="flex items-center gap-2">
                            <input type="checkbox" className="h-4 w-4"/>
                                <label className="text-gray-600">Recordarme</label>
                        </div>

                        <button
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition">
                            Iniciar Sesión
                        </button>

                        <div className="text-center mt-3">
                            <a href="forgot-password.html" className="text-blue-600 hover:underline">
                                ¿Olvidaste tu contraseña?
                            </a>
                        </div>

                    </form>

                    <div className="mt-6 text-center">
                        <p>
                            ¿No tienes una cuenta?
                            <Link href={"/register"} className="text-blue-600 hover:underline">
                                Regístrate aquí
                            </Link>
                        </p>
                    </div>

                </div>

            </div>

        </div>
    );
}