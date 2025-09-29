const AboutSection = () => {
  return (
    <section>
      <div className="flex flex-row w-full py-25 xl:h-screen bg-black">
        <div className=" bg-no-repeat h-3/4  w-full bg-cover bg-center bg-[image:var(--home-bg-about)] text-white pl-10 pr-5 xl:px-0">
          <div className="mx-auto w-full xl:w-[60%] xl:mr-40 mt-15 mb-20 p-15 border-l border-b inset-0 z-10 rounded-t-[80px] rounded-bl-[80px]  bg-gradient-to-b from-black to-[#BE9C7CCC] w-[60%] bg-opacity-50">
            <div className="flex flex-row items-center mb-15 gap-8 ">
              <h2 className="text-4xl font-bold">
                關於
                <br />
                我們
              </h2>
              <div className="border-b-2 border-white w-[50%] md:w-[20%]"></div>
            </div>
            <div className="text-sm leading-6">
              <p>
                享樂酒店，位於美麗島高雄的心臟地帶，是這座城市的璀璨瑰寶與傲人地標。
                <br />
                我們的存在，不僅僅是為了提供奢華的住宿體驗，更是為了將高雄的美麗與活力，獻給每一位蒞臨的旅客。
              </p>
              <br />
              <p>
                我們的酒店，擁有時尚典雅的裝潢，每一個細節都充滿著藝術與設計的精緻。
                <br />
                我們的員工，都以熱情的服務與專業的態度，讓每一位客人都能感受到賓至如歸的溫暖。
              </p>
              <br />
              <p>
                在這裡，您可以遙望窗外，欣賞高雄的城市景色，感受這座城市的繁華與活力；您也可以舒適地坐在我們的餐廳，品嚐精緻的佳餚，體驗無與倫比的味覺盛宴。
              </p>
              <br />
              <p>
                享樂酒店，不僅是您在高雄的住宿之選，更是您感受高雄魅力的最佳舞台。我們期待著您的蒞臨，讓我們共同編織一段難忘的高雄故事。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
