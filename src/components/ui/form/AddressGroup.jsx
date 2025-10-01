import { useState } from 'react'
import Select from './Select'
import { cities, districts } from '../../auth/addressOptions'

export default function AddressGroup({ label = '地址', className = '' }) {
  const [selectedCity, setSelectedCity] = useState(cities[0].value)

  return (
    <div className={className}>
      <div className="mb-2 text-[#fff] font-bold">{label}</div>
      <div className="flex gap-4">

        <Select
          className="flex-1 h-[56px] text-[#4B4B4B] bg-[#FFFFFF] rounded-[8px]"
          options={cities}
          defaultValue={selectedCity}
          onChange={(e) => setSelectedCity(e.target.value)}
        />

        <Select
          className="flex-1 h-[56px] text-[#4B4B4B] bg-[#FFFFFF] rounded-[8px]"
          options={districts[selectedCity] || []}
        />
      </div>
    </div>
  )
}
