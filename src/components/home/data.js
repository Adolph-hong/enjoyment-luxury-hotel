import trafficImg from '../../assets/home/traffic.png'
import drivingIcon from '../../assets/home/icons/car-driving.svg'
import serviceIcon from '../../assets/home/icons/limousine-service.svg'
import trainImg from '../../assets/home/icons/train-rail.svg'
import trafficDecos from '../../assets/home/decos/traffic.png'

export const trafficData = {
  title: ['交通', '方式'],
  address: '台灣高雄市新興區六角路123號',
  mapImg: trafficImg,
  decosImg: trafficDecos,
  info: [
    {
      id: 1,
      title: '自行開車',
      description:
        '如果您選擇自行開車，可以透過國道一號下高雄交流道，往市區方向行駛，並依路標指示即可抵達「享樂酒店」。飯店內設有停車場，讓您停車方便。',
      img: drivingIcon,
    },
    {
      id: 2,
      title: '高鐵/火車',
      description:
        '如果您是搭乘高鐵或火車，可於左營站下車，外頭有計程車站，搭乘計程車約20分鐘即可抵達。或者您也可以轉乘捷運紅線至中央公園站下車，步行約10分鐘便可抵達。',
      img: trainImg,
    },
    {
      id: 3,
      title: '禮賓車服務',
      description:
        '承億酒店提供禮賓專車接送服務，但因目的地遠近會有不同的收費，請撥打電話將由專人為您服務洽詢專線：(07)123-4567',
      img: serviceIcon,
    },
  ],
}
