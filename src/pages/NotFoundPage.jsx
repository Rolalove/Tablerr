import { Link } from "react-router-dom"
export default function NotFoundPage (){
    return(
        <section className="flex flex-col justify-center items-center h-[100vh]">
            <h1 className="text-5xl">Oooopsss Page Not Found</h1>
            <button className="mt-6">
            <Link to='/' className=" text-white transition-colors px-6 border bg-blue-600 py-2">Home</Link>
            </button>
        </section>
    )
}