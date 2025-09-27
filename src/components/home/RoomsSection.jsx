import roomsImg from '../../assets/home/rooms.png'
import roomsDecosA from '../../assets/home/decos/rooms-1.png'
import roomsDecosB from '../../assets/home/decos/rooms-2.png'
const RoomsSection = () => {
  return (
    <section>
      <div className="bg-black text-white w-full h-screen  overflow-hidden">
        <div className="flex flex-row justify-center items-center py-20 ">
          <div className="w-1/2">
            <img
              src={roomsImg}
              alt="rooms"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="w-1/2 pr-30 mt-60 relative">
            <div className="absolute top-1/2 mt-[-60%] inset-0 w-full h-auto">
              <img
                className="w-full h-auto mb-30"
                src={roomsDecosB}
                alt="rooms decoration B"
              />
              <img
                className="w-full h-auto"
                src={roomsDecosA}
                alt="rooms decoration A"
              />
            </div>
            <div className="w-full pl-10">
              <h2 className="text-3xl font-semibold mb-4 w-full ">
                尊爵雙人房
              </h2>
              <p className="mb-2 text-sm w-full ">
                享受高級的住宿體驗，尊爵雙人房提供給您舒適寬敞的空間和精緻的裝潢。
              </p>
              <p className="mb-8 text-2xl font-bold">NT$ 10,000</p>
              <button className="flex flex-row items-center justify-end w-full mt-8 px-6 py-6 bg-white text-black font-semibold rounded hover:bg-[#BF9D7D] hover:text-white transition relative overflow-hidden">
                <span className="pr-4">查看更多</span>
                <span className="inline-block w-1/5 h-px bg-current"></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RoomsSection
