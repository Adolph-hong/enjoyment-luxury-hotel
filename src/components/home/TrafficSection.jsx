import trafficImg from '../../assets/home/traffic.png'
import drivingIcon from '../../assets/home/icons/car-driving.svg'
import serviceIcon from '../../assets/home/icons/limousine-service.svg'
import trainImg from '../../assets/home/icons/train-rail.svg'
import trafficDecos from '../../assets/home/decos/foods.png'

const TrafficSection = () => {
  return (
    <section>
      <div className="w-full h-screen bg-black text-white p-10">
        <div>
          <div className="w-full flex flex-row justify-start items-center text-white pl-20 pr-40 mr-[-50px]">
            <h2 className="text-2xl w-full font-bold text-[#BF9D7D]">
              交通
              <br />
              方式
            </h2>
            <div className="border-b-2 border-[#BF9D7D] w-full pt-5"></div>
          </div>
        </div>
        <div>
          <p>台灣高雄市新興區六角路123號</p>
          <img src={trafficImg} alt="交通方式" />
        </div>
        <ul className="flex flex-row justify-between items-start px-20 py-10 gap-8">
          <li>
            <img src={drivingIcon} alt="開車" />
            <h2>自行開車</h2>
            <p>
              如果您選擇自行開車，可以透過國道一號下高雄交流道，往市區方向行駛，並依路標指示即可抵達「享樂酒店」。飯店內設有停車場，讓您停車方便。
            </p>
          </li>
          <li>
            <img src={trainImg} alt="火車" />
            <h2>高鐵/火車</h2>
            <p>
              如果您是搭乘高鐵或火車，可於左營站下車，外頭有計程車站，搭乘計程車約20分鐘即可抵達。或者您也可以轉乘捷運紅線至中央公園站下車，步行約10分鐘便可抵達。
            </p>
          </li>
          <li>
            <img src={serviceIcon} alt="接駁車" />
            <h2>禮賓車服務</h2>
            <p>
              承億酒店提供禮賓專車接送服務，但因目的地遠近會有不同的收費，請撥打電話將由專人為您服務洽詢專線：(07)123-4567
            </p>
          </li>
        </ul>
        <img className="rotate-90" src={trafficDecos} alt="交通裝飾" />
      </div>
    </section>
  )
}

export default TrafficSection
