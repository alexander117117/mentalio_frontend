export function InputQuantity(){
  return (
    <div className="flex items-center justify-between bg-popup px-[15px] py-5 rounded-[10px]">
      
      <label htmlFor="inputQuantity" className="flex flex-col">
        <span>Вопросы</span>
        <span className="text-[#5A5A5A] text-[10px]">[максимум 10]</span>
      </label>

      <input 
        id="inputQuantity"
        type="number" 
        className="w-[125px] h-[40px] bg-transparent outline-none border border-borderDark px-[7px] text-[10px] rounded-[10px] tracking-tighter"
        placeholder="Введите кол-во вопросов" 
        name="quantity"
      />
    </div>
  )
}