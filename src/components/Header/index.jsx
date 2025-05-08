import { LuFilm } from "react-icons/lu";

export default function Header({showButton = true}){
    return (
        <header className="w-full h-[60px] flex bg-[#0c0f15] justify-between items-center pr-2"> 
        <div onClick={() => window.location.href = "/"} className="cursor-pointer flex h-full gap-2 items-center justify-center pl-2">
            <LuFilm  color="#9b87f5" size={35}/>
            <h2 className="font-bold text[25px]">Dark Films</h2>
        </div>
        {/* Ternário: modelo de condicional semelhante a if-else */}
        {showButton && (
            <button onClick={() => window.location.href = "/cadastrar"} className="w-[150px] h-[80%] rounded-md bg-[#9b87f5] hover:bg-[#9b87f5]/70 cursor-pointer">Adicionar Filme</button>
        )}
        {/* modelo hover => hover:[cor]/x deixa a cor do background x% mais transparente */}
        </header>
    )
}