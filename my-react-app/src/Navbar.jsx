import Reactlogo from './assets/react.svg'
export default function Header() {
    return (
        <header>
            <nav className="flex justify-evenly bg-[#21222A] py-4">
                <div className="flex justify-items-start">
                    <img src={Reactlogo} className="h-8 pr-2" />
                    <h3 className="font-bold text-[#61DAFB] text-2xl">ReactFacts</h3>
                </div>
                <h4 className="text-white px-6 pr-4">React Course - Project 1</h4>
            </nav>
        </header>
    )
}