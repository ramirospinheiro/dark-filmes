import CustomInput from "@/components/CustomInput"
import CustomSelect from "@/components/CustomSelect"
import PageWrapper  from "@/components/PageWrapper"



export default function Cadastrar(){
    return(
        <PageWrapper showButton = {false}>
            <div className="w-full h-full py-[40px] px-[70px] flex flex-col">
                <h1 className="text-[30px] font-bold text-[#9a86f4]">Adicione um novo filme</h1>
                <p className="text-[20px] text-gray-500">Preencha o formulário abaixo para adicionar um novo filme à sua coleção</p>
                <div className="w-full flex justify-center pt-[40px]">
                    <form className="w-[50%] h-auto min-h-[200px] bg-[#222222] rounded-2xl border border-[#3a364c] flex flex-col p-6 gap-4">
                        <CustomInput
                            label="Título"
                            placeholder="Digite o titulo do filme"
                            type="text"
                        />
                        <CustomInput
                            label="Diretor"
                            placeholder="Digite o nome do diretor do filme"
                            type="text"
                        />
                        <div className="w-full flex gap-4">
                            <div className="w-[50%]">
                                <CustomInput
                                    label="Ano"
                                    placeholder="Digite o ano de lançamento"
                                    type="number"
                                />
                            </div>
                            <div className="w-[50%]">
                                <CustomSelect
                                    
                                    label="Gênero"
                                    options={["Ação","Comédia","Drama","Terror","Ficção Científica","Romance"]}
                                />
                            </div>
                        </div>
                        <div className="w-[30%] flex items-center gap-2">
                            <div className="w-[70%]">
                                <CustomInput
                                    label="Nota"
                                    placeholder="0"
                                    type="number"
                                />
                            </div>
                            
                            <p className="flex mt-8">0/10</p>
                        </div>
                        <div className="w-full flex flex-col gap-2 ">
                            <label className="text-[17px] font-bold">Sinopse</label>
                            <textarea className="w-full h-[150px] rounded-lg bg-[#141414] border border-[#3a364c] outline-none focus:border-purple-400"></textarea>
                        </div>
                        <CustomInput
                            label="Banner"
                            placeholder="URL da imagem"
                            type="text"
                        />
                        <div className="w-full flex justify-end gap-4">
                            <button type="reset" className="w-[100px] h-[45px] rounded-md bg-[#141414] cursor-pointer hover:bg-white/10">
                                Cancelar
                            </button>
                            <button className="w-[100px] h-[45px] rounded-md bg-[#9a86f4] cursor-pointer hover:bg-white/10">Salvar</button>
                        </div>
                    </form>
                </div>
            </div>
        
        </PageWrapper>
    )
}