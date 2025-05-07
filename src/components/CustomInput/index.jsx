export default function CustomInput({label, placeholder, type, onChange}){
  return (
    <div className="flex flex-col w-full gap-2">
        <label className="text-[17px] font-bold">{label}</label>
        <input
            className="w-full h-[45px] bg-[#141414] border border-[#3a364c] rounded-lg pl-2 outline-none focus:border-purple-400"
            placeholder={placeholder}
            type={type}      
            onChange = {onChange}
        />
    </div>
  )
}
