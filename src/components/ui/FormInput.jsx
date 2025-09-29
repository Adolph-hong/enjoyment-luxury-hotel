const FormInput = ({labelType, labelContent, inputId, inputType, placeholder}) => {
    return ( 
        <div className="flex flex-col gap-[8px] mb-[16px] w-full max-sm:text-[14px]">
        <label htmlFor={ labelType } className="font-bold text-[#ffffff]">{ labelContent }</label>
        <input id={ inputId } type={ inputType } placeholder={ placeholder } className="h-[56px] bg-[#FFFFFF] rounded-[8px] pl-[16PX]" />
      </div>
     );
}
 
export default FormInput;