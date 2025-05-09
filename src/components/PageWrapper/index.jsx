import Header from "../Header"


// 
export default function PageWrapper({children, showButton = true, showHeader = true}){
    return (
        <div className="w-full h-full min-h-screen flex flex-col">
            {showHeader && <Header showButton={showButton} />}
            <div className="W-full h-full min-h-screen bg-gradient-to-t from-[#020304] to-[#181d29] pb-10">
                {children}
            </div>
        </div>
    )
}