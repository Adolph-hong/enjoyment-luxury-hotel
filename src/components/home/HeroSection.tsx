import { Link } from 'react-router-dom'
import HeroTitle from '../shared/HeroTitle'
import { heroData } from './data'

const HeroSection = () => {
  return (
    <section>
      <HeroTitle>
        <div className="absolute  inset-0 z-0 top-[42%] xl:top-1/5 left-[15%] xl:left-[52%] ml-[-20px] bg-transparent bg-opacity-40 backdrop-blur-md border-t-1 border-r-1 border-[#F5F7F9] rounded-3xl p-8 w-[85%] xl:w-[47%] h-[500px] text-center"></div>
        <div className="z-10 mt-70 xl:mt-0 w-full pl-5 pr-10 xl:w-[53%] xl:pr-55 flex flex-col justify-center items-center xl:items-start text-white">
          <div>
            <h1 className="text-6xl font-bold">
              {heroData.subtitles[0]}
              <br />
              {heroData.subtitles[1]}
            </h1>
            <p className="text-xl pt-5">{heroData.subtitles[2]}</p>
          </div>
          <Link
            to="/booking"
            className="flex flex-row items-center justify-end w-full mt-8 px-6 py-6 bg-white text-black font-semibold rounded hover:bg-[#BF9D7D] hover:text-white transition relative overflow-hidden"
          >
            <span className="pr-4">{heroData.btnText}</span>
            <span className="inline-block w-1/5 h-px bg-current"></span>
          </Link>
        </div>
      </HeroTitle>
    </section>
  )
}

export default HeroSection
