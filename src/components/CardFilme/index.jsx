import { useRouter } from "next/router"

export default function CardFilme({filme}){
    const router = useRouter ()

    function handleClickNavigate(){
        router.push(`/filme/${filme.id}`)
    }
    return(
        <div onClick={handleClickNavigate} className="w-[280px] h-[240px] flex flex-col rounded-lg bg-[#222222] border border-transparent hover:scale-120 cursor-pointer hover:border-[#3a364c] transition-all duration-300 ease-in-out">
            <div className="w-full h-[67%] rounded-t-lg relative">
                <img 
                className="w-full h-full rounded-t-lg object-cover"
                src={filme.banner}
                alt={filme.titulo}
                />
                <div className="absolute top-0.5 left-1.5 flex  bg-black/50 rounded-md">
                
                    <p className="text-[17px] text-green-500 font-semibold">{filme.nota}</p>
                    <p>/10</p>
                </div>
            </div>

            <div className="w-full h-[33%] flex flex-col pt-2 px-3 rounded-b-lg">
                {/* truncate: caso o texto seja maior que o espaço, o texto será truncado e adicionado "..." ao final */}
                <p className="text-[15px] font-bold truncate">{filme.titulo}</p>
                <p className="text-[15px] text-[#8a898c]">{filme.diretor}</p>
                <div className="w-full flex justify-between">
                    <p className="text-[15px] text-[#8a898c]">{filme.ano}</p>
                    <div className="px-2 py-0 bg-[#907CDA]/10 text-[#907CDA] rounded-[20px]"><p>{filme.genero}</p></div>
                </div>
            </div>
        </div>
    )
}