import Button from '../ui/Button'
import cancelImg from '../../assets/icon/cancel.svg'
const OrderModal = ({ handleCancel, handleConfirm }) => {
  return (
    <div className="absolute w-[90%]  md:w-[40%] mx-auto mb-auto top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 bg-white text-black rounded-lg p-3">
      <div className="text-center relative w-full flex justify-center items-center">
        <button
          onClick={handleCancel}
          className="absolute top-2 right-2 cursor-pointer"
        >
          <img className="invert w-[14px]" src={cancelImg} alt="cancel" />
        </button>
        <p className="text-xl py-25 font-bold">確定要取消此房型的預訂嗎？</p>
      </div>
      <div className="flex flex-row gap-4">
        <Button
          onClick={handleCancel}
          bg="bg-white"
          color="text-[#BF9D7D]"
          hoverBg="hover:bg-[#BF9D7D] border-[#BF9D7D] border-2 w-full py-5"
          textSize="max-sm:text-[14px]"
          hoverText="hover:text-[#ffffff]"
          content={'關閉視窗'}
        />
        <Button
          onClick={handleConfirm}
          bg="bg-white"
          color="text-[#BF9D7D]"
          hoverBg="hover:bg-[#BF9D7D] border-2 w-full py-5"
          textSize="max-sm:text-[14px]"
          hoverText="hover:text-[#ffffff]"
          content={'確定取消'}
        />
      </div>
    </div>
  )
}

export default OrderModal
