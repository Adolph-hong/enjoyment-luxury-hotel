import { useState } from 'react'
import headshot1 from '../../assets/account/headshot-1.png'
import { trafficData } from '../home/data'

const AccountLayout = ({ children }) => {
  const [activeTab, setActiveTab] = useState('profile')

  return (
    <section className="flex flex-col w-full bg-black text-white">
      <div className="flex flex-row w-full  items-center mt-30 px-60 py-30 gap-5 bg-[image:var(--bg-image-account)] bg-cover bg-center">
        <img className="w-[100px] h-[100px]" src={headshot1} alt="" />
        <h2 className="text-6xl font-bold">Hello，Jessica</h2>
      </div>
      <div className="w-full px-5 md:px-60 py-8">
        <div className="flex flex-row items-center gap-5 py-5 md:py-10">
          <button
            className={`cursor-pointer px-4 py-2 transition-colors ${
              activeTab === 'profile'
                ? 'border-b-2 border-[#BF9D7D] text-[#BF9D7D] font-bold'
                : 'hover:text-[#BF9D7D]'
            }`}
            onClick={() => setActiveTab('profile')}
          >
            個人資料
          </button>
          <button
            className={`cursor-pointer px-4 py-2 transition-colors ${
              activeTab === 'orders'
                ? 'border-b-2 border-[#BF9D7D] text-[#BF9D7D]  font-bold'
                : ' hover:text-[#BF9D7D]'
            }`}
            onClick={() => setActiveTab('orders')}
          >
            我的訂單
          </button>
        </div>
        {children?.(activeTab) || children}
      </div>
      <img
        className="bg-black py-15 w-full min-h-[250px] object-cover"
        {...trafficData.decosImg}
      />
    </section>
  )
}

export default AccountLayout
