import { Link } from 'react-router-dom';
export default function Home() {
    return (
        <section className="w-[100%] mx-auto flex flex-col items-center justify-center text-center my-auto h-[80vh]">
            <h1 className="text-3xl text-[#313B49] md:text-5xl">Modern Dashboard Solution</h1>
            <p className="text-[#707987] text-base md:text-2xl my-4">Track your business metrics, manage tickets, and analyze performance</p>
            <div className="flex items-center gap-4 mt-6">
                <button className="bg-[#3B82F6] rounded px-6 py-2 text-white text-sm md:text-lg font-medium"><Link to='/signup'>Get Started</Link></button>
                <button className="bg-white rounded text-[#313B49] px-6 py-2 border border-[#3B82F6] text-sm md:text-lg font-medium">Live Demo</button>
            </div>
        </section>
    )
}
