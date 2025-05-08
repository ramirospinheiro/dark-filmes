export default function CardFilme(){
    return(
        <div className="w-[280px] h-[240px] flex flex-col rounded-lg bg-[#222222]">
            <div className="w-full h-[67%] rounded-t-lg">
                <img 
                className="w-full h-full rounded-t-lg object-cover"
                src="https://img.freepik.com/psd-premium/cartaz-de-filme-de-ficcao-cientifica_1117895-318.jpg?w=2000"
                alt=""
                />
            </div>

            <div className="w-full h-[33%] flex flex-col pt-2 px-3 rounded-b-lg">
                <p className="text-[15px] font-bold">Movie</p>
                <p className="text-[15px] text-[#8a898c]">Director</p>
                <div className="w-full flex justify-between">
                    <p>2025</p>
                    <div className="px-2 py-0 bg-[#907CDA]/10 text-[#907CDA] rounded-[20px]"><p>Scifi</p></div>
                </div>
            </div>
        </div>
    )
}