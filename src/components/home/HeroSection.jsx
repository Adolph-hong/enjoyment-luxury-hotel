const HeroSection = () => {
  return (
    <section>
      <div className="relative flex flex-row w-full h-screen bg-cover bg-center bg-[image:var(--background-image-hero-bg)]">
        <div className="w-1/2  flex flex-col justify-center items-start text-white pl-20 pr-40 mr-[-50px]">
          <h2 className="text-2xl font-bold text-[#BF9D7D]">享樂酒店</h2>
          <h2 className="text-lg font-bold text-[#BF9D7D]">
            Enjoyment Luxury Hotel
          </h2>
          <div className="border-b-2 border-[#BF9D7D] w-full pt-5"></div>
        </div>
        <div className="absolute inset-0 z-0 top-1/5 left-1/2 ml-[-20px] bg-transparent bg-opacity-40 backdrop-blur-md rounded-3xl p-8  w-2/5 h-[500px] text-center"></div>
        <div className="z-10 w-1/2 pr-55 flex flex-col justify-center items-start text-white">
          <h1 className="text-6xl font-bold">高雄</h1>
          <h1 className="text-6xl font-bold">豪華住宿之選</h1>
          <p className="text-xl">
            我們致力於為您提供無與倫比的奢華體驗與優質服務
          </p>
          <button className="flex flex-row items-center justify-end w-full mt-8 px-6 py-6 bg-white text-black font-semibold rounded hover:bg-[#BF9D7D] hover:text-white transition relative overflow-hidden">
            <span className="pr-4">立即訂房</span>
            <span className="inline-block w-1/5 h-px bg-current"></span>
          </button>
        </div>
        -
      </div>
    </section>
  )
}

export default HeroSection
