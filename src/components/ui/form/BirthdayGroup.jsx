import Select from './Select'
import { years, months, days } from '../../auth/dateOptions'

export default function BirthdayGroup({
  label = '生日',
  defaultYear = '',
  defaultMonth = '',
  defaultDay = '',
  className = '',
  register,
  errors,
}) {
  return (
    <div className={className}>
      <div className="mb-4 text-[#ffffff] font-bold max-sm:text-[14px]">
        {label}
      </div>
      <div className="flex gap-2 w-full">
        <Select
          className="flex-1 h-[56px] text-[#4B4B4B] bg-[#FFFFFF] rounded-[8px]"
          placeholder="年份"
          options={years}
          defaultValue={defaultYear}
          {...(register && register('year', { required: '請選擇年份' }))}
        />
        <Select
          className="flex-1 h-[56px] text-[#4B4B4B] bg-[#FFFFFF] rounded-[8px]"
          placeholder="月份"
          options={months}
          defaultValue={defaultMonth}
          {...(register && register('month'))}
        />
        <Select
          className="flex-1 h-[56px] text-[#4B4B4B] bg-[#FFFFFF] rounded-[8px]"
          placeholder="日期"
          options={days}
          defaultValue={defaultDay}
          {...(register && register('day'))}
        />
      </div>
      {errors && (errors.year || errors.month || errors.day) && (
        <span className="text-red-400 text-sm mt-1">請選擇完整的生日</span>
      )}
    </div>
  )
}
