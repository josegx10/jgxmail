import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-slate-50">
      <nav className="bg-white px-8 py-4 flex justify-between items-center shadow-sm">

        <div className="flex items-center font-bold text-xl">
            
            Mi Aplicación
        </div>

        <ul className="flex gap-6">
            <li>
                <Link href={"/contacto"} className="text-gray-700 hover:text-blue-600 transition">
                    Contacto
                </Link>
            </li>

            <li>
                <Link href={"/login"} className="text-gray-700 hover:text-blue-600 transition">
                    Acceder
                </Link>
            </li>

            <li>
                <Link href={"/register"} className="text-gray-700 hover:text-blue-600 transition">
                    Registro
                </Link>
            </li>
        </ul>

    </nav>

    
    <div className="flex flex-col justify-center items-center h-[80vh] text-center px-4">

        <h1 className="text-5xl font-bold mb-4">
            Bienvenido a Mi Aplicación
        </h1>

        <p className="text-xl mb-8 text-gray-600">
            La mejor solución para tus necesidades
        </p>

        <div className="flex gap-4">

            <Link href={"/login"}
               className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg transition">
               Acceder
            </Link>

            <Link href={"/register"}
               className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg text-lg transition">
               Registro
            </Link>

        </div>

    </div>
    </div>
  );
}
