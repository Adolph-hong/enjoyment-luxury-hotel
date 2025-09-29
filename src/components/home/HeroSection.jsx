const HeroSection = () => {
  return (
    <section>
      <div className="relative flex flex-col justify-center items-center xl:flex-row w-full h-[120vh] xl:h-screen bg-cover bg-center bg-[image:var(--background-image-hero-bg)]">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute top-25 xl:relative xl:top-0 xl:w-1/2 xl:gap-0 gap-15 z-10 flex flex-col w-full items-center xl:justify-center xl:items-start text-white xl:pl-20 xl:pr-40 xl:mr-[-50px]">
          <div className="flex flex-col items-center xl:items-start">
            <h2 className="text-4xl font-bold text-[#BF9D7D] pb-5">享樂酒店</h2>
            <h2 className="text-xl font-bold text-[#BF9D7D]">
              Enjoyment Luxury Hotel
            </h2>
          </div>
          <div className="border-b-2 border-[#BF9D7D] w-[83px] xl:w-full xl:pt-5 rotate-90 xl:rotate-0"></div>
        </div>
        <div className="absolute  inset-0 z-0 top-[40%] xl:top-1/5 left-[15%] xl:left-[52%] ml-[-20px] bg-transparent bg-opacity-40 backdrop-blur-md border-t-1 border-r-1 border-[#F5F7F9] rounded-3xl p-8 w-[85%] xl:w-[47%] h-[500px] text-center"></div>
        <div className="z-10 mt-70 xl:mt-0 w-full pl-5 pr-10 xl:w-[53%] xl:pr-55 flex flex-col justify-center items-center xl:items-start text-white">
          <div>
            <h1 className="text-6xl font-bold">
              高雄
              <br />
              豪華住宿之選
            </h1>
            <p className="text-xl pt-5">
              我們致力於為您提供無與倫比的奢華體驗與優質服務
            </p>
          </div>
          <button className="flex flex-row items-center justify-end w-full mt-8 px-6 py-6 bg-white text-black font-semibold rounded hover:bg-[#BF9D7D] hover:text-white transition relative overflow-hidden">
            <span className="pr-4">立即訂房</span>
            <span className="inline-block w-1/5 h-px bg-current"></span>
          </button>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
