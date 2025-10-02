import { useState, useEffect } from 'react'
import BlurBg from '../ui/BlurBg'
import OrderModal from '../modals/OrderModal'

const OrderList = () => {
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [showModal])

  const handleCancel = () => {
    setShowModal(false)
  }

  const handleConfirm = () => {
    // 這裡可以加入取消預訂的邏輯
    console.log('預訂已取消')
    setShowModal(false)
  }

  const orders = [
    {
      id: '10912301512222',
      name: '尊爵雙人房',
      date: '入住：3 月 1 日 14:00｜退房：3 月 2 日 12:00',
      price: 'NT$10,000',
      nights: 1,
      people: 2,
    },
    {
      id: '10912301512223',
      name: '豪華單人房',
      date: '入住：3 月 9 日 14:00｜退房：3 月 10 日 12:00',
      price: 'NT$8,000',
      nights: 1,
      people: 1,
    },
    {
      id: '10912301512224',
      name: '景觀雙人房',
      date: '入住：3 月 18 日 14:00｜退房：3 月 20 日 12:00',
      price: 'NT$18,000',
      nights: 2,
      people: 2,
    },
  ]

  return (
    <div className="mt-8 flex flex-col md:flex-row gap-6">
      {/* 訂單來往詳情卡片 */}
      <div className="bg-white w-full md:w-3/5 text-black rounded-lg p-8">
        <div className="mb-4">
          <p className="text-sm text-gray-500 mb-2">
            預訂參考編號：10912301512222
          </p>
          <h3 className="text-2xl font-bold mb-4">即將來到詳情</h3>
        </div>

        <div className="mb-6">
          <img
            src="https://via.placeholder.com/400x200"
            alt="房間照片"
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
        </div>

        <div className="space-y-3 text-sm">
          <p>
            <span className="text-gray-600">臺北市中正區忠孝東路一段 2 號</span>
          </p>
          <p>
            <span className="text-gray-600">電話：</span>+886-7-1234567
          </p>
          <p className="text-gray-600">
            入住：3 月 1 日 14:00 ｜ 退房：3 月 2 日 12:00
          </p>
          <p className="font-bold text-lg">NT$10,000</p>
        </div>

        <div className="mt-6 pt-6 border-t">
          <h4 className="font-bold mb-3">房內設備</h4>
          <div className="grid grid-cols-3 gap-2 text-sm">
            <div className="flex items-center gap-1">
              <span>✓</span> 平面電視
            </div>
            <div className="flex items-center gap-1">
              <span>✓</span> 電話
            </div>
            <div className="flex items-center gap-1">
              <span>✓</span> 房內保險箱
            </div>
            <div className="flex items-center gap-1">
              <span>✓</span> 吹風機
            </div>
            <div className="flex items-center gap-1">
              <span>✓</span> 空調
            </div>
            <div className="flex items-center gap-1">
              <span>✓</span> 冰箱
            </div>
            <div className="flex items-center gap-1">
              <span>✓</span> 熱水壺
            </div>
            <div className="flex items-center gap-1">
              <span>✓</span> 咖啡機
            </div>
            <div className="flex items-center gap-1">
              <span>✓</span> 淋浴間
            </div>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t">
          <h4 className="font-bold mb-3">備品提供</h4>
          <div className="grid grid-cols-3 gap-2 text-sm">
            <div className="flex items-center gap-1">
              <span>✓</span> 衛生紙
            </div>
            <div className="flex items-center gap-1">
              <span>✓</span> 拖鞋
            </div>
            <div className="flex items-center gap-1">
              <span>✓</span> 沐浴用品
            </div>
            <div className="flex items-center gap-1">
              <span>✓</span> 浴巾
            </div>
            <div className="flex items-center gap-1">
              <span>✓</span> 刮鬍刀
            </div>
            <div className="flex items-center gap-1">
              <span>✓</span> 吹風機
            </div>
            <div className="flex items-center gap-1">
              <span>✓</span> 牙刷
            </div>
            <div className="flex items-center gap-1">
              <span>✓</span> 牙膏
            </div>
            <div className="flex items-center gap-1">
              <span>✓</span> 梳子
            </div>
          </div>
        </div>

        <div className="mt-6 flex gap-4">
          <button
            onClick={() => setShowModal(true)}
            className="flex-1 px-6 py-3 border border-gray-300 rounded hover:bg-gray-100 transition-colors"
          >
            取消預定
          </button>
          <button className="flex-1 px-6 py-3 bg-black text-white rounded hover:bg-gray-800 transition-colors">
            查看詳情
          </button>
        </div>
      </div>

      {showModal && (
        <BlurBg>
          <OrderModal handleCancel={handleCancel} handleConfirm={handleConfirm} />
        </BlurBg>
      )}

      {/* 歷史訂單列表 */}
      <div className="space-y-4 mb-auto p-6 bg-white text-black rounded-lg w-full md:w-2/5">
        <h3 className="text-2xl font-bold mb-4">歷史訂單</h3>
        {orders.map((order) => (
          <div key={order.id} className="flex gap-4">
            <img
              src="https://via.placeholder.com/120x120"
              alt={order.name}
              className="w-24 h-24 object-cover rounded"
            />
            <div className="flex-1">
              <div className="mb-2">
                <p className="text-xs text-gray-500 mb-1">
                  預訂參考編號：{order.id}
                </p>
                <h4 className="font-bold text-lg">{order.name}</h4>
              </div>
              <p className="text-sm text-gray-600 mb-1">
                住宿天數：{order.nights} 晚
              </p>
              <p className="text-sm text-gray-600 mb-2">
                住宿人數：{order.people} 人
              </p>
              <p className="text-xs text-gray-500 mb-2">{order.date}</p>
              <p className="font-bold text-lg">{order.price}</p>
            </div>
          </div>
        ))}
        <button className="w-full px-6 py-3 border border-gray-300 rounded hover:bg-gray-100 transition-colors text-black">
          查看更多
        </button>
      </div>
    </div>
  )
}

export default OrderList
