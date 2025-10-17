import hotelLogo from '/src/assets/logo/hotel-logo.svg'
import hotelLogoEn from '/src/assets/logo/hotel-logo-english.svg'
import lineLogo from '/src/assets/icon/Line.svg'
import igLogo from '/src/assets/icon/IG.svg'

const Footer: React.FC = () => {
  return (
    <footer>
      {/*以下第一個區塊*/}
      <div className="bg-black md:flex justify-between">
        <div className="pl-3 md:pl-50 pt-10">
          <div>
            <img src={hotelLogo} alt="hotelLogo" />
            <img src={hotelLogoEn} alt="hotelLogoEn" />
          </div>
          <div className="flex mt-16 gap-4">
            <img src={lineLogo} alt="lineLogo" />
            <img src={igLogo} alt="igLogo" />
          </div>
        </div>
        {/*以上第一個區塊(logo & social media)*/}

        {/*以下聯絡區塊*/}
        <div className="mt-10 pl-3 md:pr-50">
          <div className="flex flex-col gap-4 md:grid md:grid-cols-2 gap-10">
            <p className="text-white flex flex-col gap-2 order-1">
              <span className="font-bold text-base">TEL</span>
              +886-7-1234567
            </p>
            <p className="text-white flex flex-col gap-2 order-3 md:order-2">
              <span className="font-bold text-base">MAIL</span>
              elh@hexschool.com
            </p>
            <p className="text-white flex flex-col gap-2 order-2 md:order-3">
              <span className="font-bold text-base">FAX</span>
              +886-7-1234567
            </p>
            <p className="text-white flex flex-col gap-2 order-4">
              <span className="font-bold text-base">WEB</span>
              www.elhhexschool.com.tw
            </p>
          </div>
        </div>
      </div>

      {/*以下版權資訊區塊*/}
      <div className="bg-black px-3 pt-20 md:px-50 flex flex-col gap-4 md:flex-row justify-between">
        <span className="text-white">806023 台灣高雄市新興區六角路123號</span>
        <span className="text-white">
          © 享樂酒店 2023 All Rights Reserved.
        </span>
      </div>
    </footer>
  )
}

export default Footer
