import instance from "@/api/instance"
import CustomInput from "@/components/CustomInput"
import CustomSelect from "@/components/CustomSelect"
import PageWrapper  from "@/components/PageWrapper"
import { useState } from "react"
import { toast } from "react-toastify"

export default function Cadastrar(){
    // hooks sempre ficam entre a declaração da função e o retorno dela
    const[titulo, setTitulo] = useState("");
    const[diretor, setDiretor] = useState("");
    const[ano, setAno] = useState(0);
    const[genero, setGenero] = useState("");
    const[nota, setNota] = useState(0);
    const[sinopse,setSinopse] = useState("");
    const[banner, setBanner] = useState("");

    // async serve para esperar a resposta de requisição para o codigo nao continuar rodando sem a resposta do api
    async function handleSubmit(event){
        // prevent default previne o comportamento padrao da pagina, no caso a tag form de atualizar a pagina sem conferencias e perdendo os dados preenchidos
        event.preventDefault();

        if(!titulo || !diretor || !ano || !genero || !nota || !sinopse || !banner){
            toast.error("Preencha todos os campos")
            return;
        }

        try {
            await instance.post("/api/movies", {
                titulo: titulo,
                diretor: diretor,
                ano:ano,
                genero: genero,
                nota: nota,
                sinopse: sinopse,
                banner: banner
            });
            toast.success("Filme cadastrado com sucesso")
            setTitulo("");
            setDiretor("");
            setAno(0);
            setGenero("");
            setNota(0);
            setSinopse("");
            setBanner("");
        } catch (error) {
            console.error(error)
            toast.error("Erro ao cadastrar filme")
        }

        
    }

    return(
        <PageWrapper showButton = {false}>
            <div className="w-full h-full py-[40px] px-[70px] flex flex-col">
                <h1 className="text-[30px] font-bold text-[#9a86f4]">Adicione um novo filme</h1>
                <p className="text-[20px] text-[#8A898C]">Preencha o formulário abaixo para adicionar um novo filme à sua coleção</p>
                <div className="w-full flex justify-center pt-[40px]">
                    <form
                    onSubmit={handleSubmit}
                    className="w-[50%] h-auto min-h-[200px] bg-[#222222] rounded-2xl border border-[#3a364c] flex flex-col p-6 gap-4">
                        <CustomInput
                            label="Título"
                            value={titulo}
                            placeholder="Digite o titulo do filme"
                            type="text"
                            onChange={(event) => setTitulo(event.target.value)}
                        />
                        <CustomInput
                            label="Diretor"
                            value={diretor}
                            placeholder="Digite o nome do diretor do filme"
                            type="text"
                            onChange={(event) => setDiretor(event.target.value)}
                        />
                        <div className="w-full flex gap-4">
                            <div className="w-[50%]">
                                <CustomInput
                                    label="Ano"
                                    value={ano}
                                    placeholder="Digite o ano de lançamento"
                                    type="number"
                                    onChange={(event) => setAno(event.target.value)}
                                />
                            </div>
                            <div className="w-[50%]">
                                <CustomSelect
                                    label="Gênero"
                                    value={genero}
                                    options={["Ação","Comédia","Drama","Terror","Ficção Científica","Romance"]}
                                    onChange={(event) => setGenero(event.target.value)}
                                />
                            </div>
                        </div>
                        <div className="w-[30%] flex items-center gap-2">
                            <div className="w-[70%]">
                                <CustomInput
                                    label="Nota"
                                    value={nota}
                                    placeholder="0"
                                    type="number"
                                    
                                    onChange={(event) => setNota(event.target.value)}
                                />
                            </div>
                            <p className="flex mt-8">{nota}/10</p> 
                        </div>
                        <div className="w-full flex flex-col gap-2 ">
                            <label className="text-[17px] font-bold">Sinopse</label>
                            <textarea
                                value={sinopse}
                                onChange={(event) => setSinopse(event.target.value)} 
                                className="w-full h-[150px] rounded-lg bg-[#141414] border border-[#3a364c] outline-none focus:border-purple-400"
                            ></textarea>
                        </div>
                        <CustomInput
                            label="Banner"
                            value={banner}
                            placeholder="URL da imagem"
                            type="text"
                            onChange={(event) => setBanner(event.target.value)}
                        />
                        <div className="w-full flex justify-end gap-4">
                            <button type="reset" className="w-[100px] h-[45px] rounded-md bg-[#141414] cursor-pointer hover:bg-white/10">
                                Cancelar
                            </button>
                            <button type="submit" className="w-[130px] h-[45px] rounded-md bg-[#9a86f4] cursor-pointer hover:bg-[#9a86f4]/80">
                                Salvar Filme
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </PageWrapper>
    )
}