import { FieldError ,UseFormRegisterReturn } from 'react-hook-form'

type FormInputProps = {
  labelContent : string
  labelId : string
  inputId : string
  inputType : string
  placeholder : string
  register : UseFormRegisterReturn
  error?: FieldError | undefined
}

const FormInput : React.FC<FormInputProps> = ({labelId, labelContent, inputId, inputType, placeholder, register, error}) => {
    return (
        <div className="flex flex-col gap-[8px] mb-[16px] w-full max-sm:text-[14px]">
        <label htmlFor={ labelId } className="font-bold text-[#ffffff]">{ labelContent }</label>
        <input
          id={ inputId }
          type={ inputType }
          placeholder={ placeholder }

          className="h-[56px] bg-[#FFFFFF] rounded-[8px] pl-[16PX]"
          {...register}
        />
        {error && <span className="text-red-400 text-sm">{error.message}</span>}
      </div>
     );
}

export default FormInput;