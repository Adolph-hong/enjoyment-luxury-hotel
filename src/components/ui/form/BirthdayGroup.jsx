import Select from './Select'
import { years, months, days } from '../../auth/dateOptions'

export default function BirthdayGroup({
  label = '生日',
  defaultYear = 1990,
  defaultMonth = 8,
  defaultDay = 15,
  className = '',
}) {
  return (
    <div className={className}>
      <div className="mb-4 text-[#ffffff] font-bold max-sm:text-[14px]">
        {label}
      </div>
      <div className="flex gap-2 w-full">
        {[
          { options: years, defaultValue: defaultYear },
          { options: months, defaultValue: defaultMonth },
          { options: days, defaultValue: defaultDay },
        ].map((item, index) => (
          <Select
            key={index}
            className="flex-1 h-[56px] text-[#4B4B4B] bg-[#FFFFFF] rounded-[8px]"
            options={item.options}
            defaultValue={item.defaultValue}
          />
        ))}
      </div>
    </div>
  )
}
