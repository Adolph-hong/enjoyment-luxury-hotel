import trafficImg from '../../assets/home/traffic.png'
import drivingIcon from '../../assets/home/icons/car-driving.svg'
import serviceIcon from '../../assets/home/icons/limousine-service.svg'
import trainImg from '../../assets/home/icons/train-rail.svg'
import trafficDecos from '../../assets/home/decos/traffic.png'
import foodsDeco from '../../assets/home/decos/foods.png'
import newsDeco from '../../assets/home/decos/news.png'
import roomsDecosA from '../../assets/home/decos/rooms-1.png'
import roomsDecosB from '../../assets/home/decos/rooms-2.png'

export const trafficData = {
  title: ['交通', '方式'],
  address: '台灣高雄市新興區六角路123號',
  mapImg: { src: trafficImg, alt: '交通方式' },
  decosImg: { src: trafficDecos, alt: '交通裝飾' },
  info: [
    {
      id: 1,
      title: '自行開車',
      description:
        '如果您選擇自行開車，可以透過國道一號下高雄交流道，往市區方向行駛，並依路標指示即可抵達「享樂酒店」。飯店內設有停車場，讓您停車方便。',
      image: { src: drivingIcon, alt: '自行開車' },
    },
    {
      id: 2,
      title: '高鐵/火車',
      description:
        '如果您是搭乘高鐵或火車，可於左營站下車，外頭有計程車站，搭乘計程車約20分鐘即可抵達。或者您也可以轉乘捷運紅線至中央公園站下車，步行約10分鐘便可抵達。',
      image: { src: trainImg, alt: '高鐵/火車' },
    },
    {
      id: 3,
      title: '禮賓車服務',
      description:
        '承億酒店提供禮賓專車接送服務，但因目的地遠近會有不同的收費，請撥打電話將由專人為您服務洽詢專線：(07)123-4567',
      image: { src: serviceIcon, alt: '禮賓車服務' },
    },
  ],
}

export const aboutData = {
  title: ['關於', '我們'],
  description: [
    '享樂酒店，位於美麗島高雄的心臟地帶，是這座城市的璀璨瑰寶與傲人地標。',
    '我們的存在，不僅僅是為了提供奢華的住宿體驗，更是為了將高雄的美麗與活力，獻給每一位蒞臨的旅客。',
    '我們的酒店，擁有時尚典雅的裝潢，每一個細節都充滿著藝術與設計的精緻。',
    '我們的員工，都以熱情的服務與專業的態度，讓每一位客人都能感受到賓至如歸的溫暖。',
    '在這裡，您可以遙望窗外，欣賞高雄的城市景色，感受這座城市的繁華與活力；您也可以舒適地坐在我們的餐廳，品嚐精緻的佳餚，體驗無與倫比的味覺盛宴。',
    '享樂酒店，不僅是您在高雄的住宿之選，更是您感受高雄魅力的最佳舞台。我們期待著您的蒞臨，讓我們共同編織一段難忘的高雄故事。',
  ],
}
export const foodsData = {
  title: ['佳餚', '美饌'],
  decosImg: { src: foodsDeco, alt: '美食裝飾' },
}

export const newsData = {
  title: ['最新', '消息'],
  decosImg: { src: newsDeco, alt: '最新消息裝飾' },
}
export const heroData = {
  title: ['享樂酒店', 'Enjoyment Luxury Hotel'],
  subtitle: ['高雄', '豪華住宿之選', '我們致力於為您提供無與倫比的奢華體驗與優質服務'],
  btnText: '立即訂房',
}

export const roomsData = {
  image: [
    { src: roomsDecosA, alt: '房型裝飾A' },
    { src: roomsDecosB, alt: '房型裝飾B' },
  ],
}
