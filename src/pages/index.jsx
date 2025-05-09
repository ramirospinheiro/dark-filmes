import instance from "@/api/instance";
import CardFilme from "@/components/CardFilme"
import PageWrapper from "@/components/PageWrapper"
import { useEffect, useState } from "react"


export default function Home(){
  //hook
  const [filmes, setFilmes] = useState([])

  // useEffect é utilizado para fazer requisiçoes à api ao carregar a pagina e ao filtrar os itens a mostra
  // modelo : useEffect(() => {} , [])
  useEffect(() => {
    async function getFilmes(){
      const response = await instance.get("/api/movies");
      setFilmes(response.data)
    }
    getFilmes()
  } , []); 

  return(
    <PageWrapper>
      <div className="w-full h-auto flex flex-col justify-center items-center pt-7 pb-4">
        <h1 className="text-[40px] text-[#907CDA] font-bold">Sua coleção de Filmes</h1>
        <p className="text-[20px] text-[#8A898C]">Acompanhe seus filmes favoritos e adicione novos filmes a sua coleção</p>
      </div>
      {/* flex-wrap mostra em grad adaptavel a zoom */}
      <div className="w-full h-auto flex flex-wrap justify-center gap-3">
        {
          filmes.map((filme) => {
            return(
              <CardFilme
                filme={filme}
                key={filme.id}
              />
            )
          })
        }
      </div>
    </PageWrapper>
  )
}