import { heroData } from '../home/data'

const HeroTitle = ({ children }) => {
  return (
    <div className="relative flex flex-col justify-center items-center xl:flex-row w-full h-[120vh] xl:h-screen bg-[image:var(--bg-image-hero)] bg-cover bg-center">
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="absolute top-35 xl:relative xl:top-0 xl:w-1/2 xl:gap-0 gap-15 z-10 flex flex-col w-full items-center xl:justify-center xl:items-start text-white xl:pl-20 xl:pr-40 xl:mr-[-50px]">
        <div className="flex flex-col items-center xl:items-start">
          <h2 className="text-4xl font-bold text-[#BF9D7D] pb-5">
            {heroData.title[0]}
          </h2>
          <h2 className="text-xl font-bold text-[#BF9D7D]">
            {heroData.title[1]}
          </h2>
        </div>
        <div className="border-b-2 border-[#BF9D7D] w-[83px] xl:w-full xl:pt-5 rotate-90 xl:rotate-0"></div>
      </div>
      {children}
    </div>
  )
}

export default HeroTitle
