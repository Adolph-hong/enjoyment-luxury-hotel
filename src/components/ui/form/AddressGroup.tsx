import { UseFormRegister, UseFormWatch, FieldErrors } from 'react-hook-form'
import Select from './Select'
import { cities, districts } from '../../auth/addressOptions'

type AddressFormShape = {
  city: string
  district: string
}
type AddressGroupProps = {
  label?: string
  className: string
  register?: any
  watch?: any
  errors?: FieldErrors<AddressFormShape>
}

export default function AddressGroup({ label = '地址', className = '', register, watch, errors } : AddressGroupProps) {
  const selectedCity = watch ? watch('city') : ""

  return (
    <div className={className}>
      <div className="mb-2 text-[#fff] font-bold">{label}</div>
      <div className="flex gap-4">

        <Select
          className="flex-1 h-[56px] text-[#4B4B4B] bg-[#FFFFFF] rounded-[8px]"
           options={[{ label: '請選擇縣市', value: '' }, ...cities]}
          defaultValue=""
          {...(register && register('city', { required: '請選擇縣市' }))}
        />

        <Select
          className="flex-1 h-[56px] text-[#4B4B4B] bg-[#FFFFFF] rounded-[8px]"
           options={
            selectedCity
              ? [{ label: '請選擇區域', value: '' }, ...(districts[selectedCity] || [])]
              : [{ label: '請先選縣市', value: '' }]
          }
          defaultValue=""
          {...(register && register('district', { required: '請選擇區域' }))}
        />
      </div>
      {errors && (errors.city || errors.district) && (
        <span className="text-red-400 text-sm mt-1">請選擇完整的地址</span>
      )}
    </div>
  )
}
