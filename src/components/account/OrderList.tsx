import { useState, useEffect } from 'react'
import BlurBg from '../ui/BlurBg'
import OrderModal from '../modals/OrderModal'
import { getOrders, deleteOrder } from '../../api/authApi'
import type { Order } from '@/types/api/order'

const OrderList = () => {
  const [showModal, setShowModal] = useState(false)
  const [orders, setOrders] = useState<Order[]>([])
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null)
  const [isLoading, setIsLoading] = useState(true)

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

  useEffect(() => {
    const fetchOrders = async () => {
      const token = localStorage.getItem('token')
      if (!token) {
        setIsLoading(false)
        return
      }

      try {
        const response = await getOrders()
        setOrders(response.result || [])
        if (response.result && response.result.length > 0) {
          setSelectedOrder(response.result?.[0] ?? null)
        }
      } catch (error) {
        console.error('Failed to fetch orders:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchOrders()
  }, [])

  const handleCancel = () => {
    setShowModal(false)
  }

  const handleConfirm = async () => {
    if (!selectedOrder) return

    try {
      await deleteOrder(selectedOrder._id)
      setOrders(orders.filter((order) => order._id !== selectedOrder._id))
      setSelectedOrder(orders.find((order) => order._id !== selectedOrder._id) || null)
      console.log('預訂已取消')
      setShowModal(false)
    } catch (error) {
      console.error('Failed to delete order:', error)
      alert('取消訂單失敗，請稍後再試')
    }
  }

  if (isLoading) {
    return <div className="mt-8 text-white text-center">載入中...</div>
  }

  if (!orders.length) {
    return <div className="mt-8 text-white text-center">目前沒有訂單</div>
  }

  return (
    <div className="mt-8 flex flex-col md:flex-row gap-6">
      {/* 訂單來往詳情卡片 */}
      {selectedOrder && (
        <div className="bg-white w-full md:w-3/5 text-black rounded-lg p-8">
          <div className="mb-4">
            <p className="text-sm text-gray-500 mb-2">預訂參考編號：{selectedOrder._id}</p>
            <h3 className="text-2xl font-bold mb-4">即將來到詳情</h3>
          </div>

          <div className="mb-6">
            <img
              src={
                selectedOrder.roomId?.imageUrl ||
                selectedOrder.roomId?.imageUrlList?.[0] ||
                'https://via.placeholder.com/400x200'
              }
              alt="房間照片"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
          </div>

          <div className="space-y-3 text-sm">
            <p className="font-bold text-xl">{selectedOrder.roomId?.name}</p>
            <p>
              <span className="text-gray-600">臺北市中正區忠孝東路一段 2 號</span>
            </p>
            <p>
              <span className="text-gray-600">電話：</span>+886-7-1234567
            </p>
            <p className="text-gray-600">
              入住：
              {new Date(selectedOrder.checkInDate).toLocaleDateString('zh-TW', {
                month: 'long',
                day: 'numeric',
              })}{' '}
              14:00 ｜ 退房：
              {new Date(selectedOrder.checkOutDate).toLocaleDateString('zh-TW', {
                month: 'long',
                day: 'numeric',
              })}{' '}
              12:00
            </p>
            <p>
              <span className="text-gray-600">人數：</span>
              {selectedOrder.peopleNum} 人
            </p>
            <p className="font-bold text-lg">NT${selectedOrder.roomId?.price?.toLocaleString()}</p>
          </div>

          {selectedOrder.roomId?.facilityInfo && (
            <div className="mt-6 pt-6 border-t">
              <h4 className="font-bold mb-3">房內設備</h4>
              <div className="grid grid-cols-3 gap-2 text-sm">
                {selectedOrder.roomId.facilityInfo.map((facility, index) => (
                  <div key={index} className="flex items-center gap-1">
                    <span>✓</span> {facility.title}
                  </div>
                ))}
              </div>
            </div>
          )}

          {selectedOrder.roomId?.amenityInfo && (
            <div className="mt-6 pt-6 border-t">
              <h4 className="font-bold mb-3">備品提供</h4>
              <div className="grid grid-cols-3 gap-2 text-sm">
                {selectedOrder.roomId.amenityInfo.map((amenity, index) => (
                  <div key={index} className="flex items-center gap-1">
                    <span>✓</span> {amenity.title}
                  </div>
                ))}
              </div>
            </div>
          )}

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
      )}

      {showModal && (
        <BlurBg>
          <OrderModal handleCancel={handleCancel} handleConfirm={handleConfirm} />
        </BlurBg>
      )}

      {/* 歷史訂單列表 */}
      <div className="space-y-4 mb-auto p-6 bg-white text-black rounded-lg w-full md:w-2/5">
        <h3 className="text-2xl font-bold mb-4">歷史訂單</h3>
        {orders.map((order) => {
          const checkIn = new Date(order.checkInDate)
          const checkOut = new Date(order.checkOutDate)
          const nights = Math.ceil((checkOut.getTime() - checkIn.getTime()) / (1000 * 60 * 60 * 24))

          return (
            <div
              key={order._id}
              className="flex gap-4 cursor-pointer hover:bg-gray-50 p-2 rounded transition-colors"
              onClick={() => setSelectedOrder(order)}
            >
              <img
                src={
                  order.roomId?.imageUrl ||
                  order.roomId?.imageUrlList?.[0] ||
                  'https://via.placeholder.com/120x120'
                }
                alt={order.roomId?.name}
                className="w-24 h-24 object-cover rounded"
              />
              <div className="flex-1">
                <div className="mb-2">
                  <p className="text-xs text-gray-500 mb-1">預訂參考編號：{order._id}</p>
                  <h4 className="font-bold text-lg">{order.roomId?.name}</h4>
                </div>
                <p className="text-sm text-gray-600 mb-1">住宿天數：{nights} 晚</p>
                <p className="text-sm text-gray-600 mb-2">住宿人數：{order.peopleNum} 人</p>
                <p className="text-xs text-gray-500 mb-2">
                  入住：{checkIn.toLocaleDateString('zh-TW')} ｜ 退房：
                  {checkOut.toLocaleDateString('zh-TW')}
                </p>
                <p className="font-bold text-lg">NT${order.roomId?.price?.toLocaleString()}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default OrderList
