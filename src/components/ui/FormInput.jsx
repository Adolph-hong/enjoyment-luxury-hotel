const FormInput = ({labelId, labelContent, inputId, inputType, placeholder, pattern}) => {
    return ( 
        <div className="flex flex-col gap-[8px] mb-[16px] w-full max-sm:text-[14px]">
        <label htmlFor={ labelId } className="font-bold text-[#ffffff]">{ labelContent }</label>
        <input id={ inputId } type={ inputType } placeholder={ placeholder } pattern={ pattern } className="h-[56px] bg-[#FFFFFF] rounded-[8px] pl-[16PX]" />
      </div>
     );
}
 
export default FormInput;