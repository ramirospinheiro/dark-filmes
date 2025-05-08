import CardFilme from "@/components/CardFilme"
import PageWrapper from "@/components/PageWrapper"


export default function Home(){

  return(
    <PageWrapper>
      <div className="w-full h-auto flex flex-col justify-center items-center pt-7 pb-4">
        <h1 className="text-[40px] text-[#907CDA] font-bold">Sua coleção de Filmes</h1>
        <p className="text-[20px] text-[#8A898C]">Acompanhe seus filmes favoritos e adicione novos filmes a sua coleção</p>
      </div>
      {/* flex-wrap mostra em grad adaptavel a zoom */}
      <div className="w-full h-auto flex flex-wrap justify-center gap-3">
        <CardFilme/>
        <CardFilme/>
        <CardFilme/>
        <CardFilme/>
        <CardFilme/>
        <CardFilme/>
        <CardFilme/>
        <CardFilme/>
      </div>
    </PageWrapper>
  )
}