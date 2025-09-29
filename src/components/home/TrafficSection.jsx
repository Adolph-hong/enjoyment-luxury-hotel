import { trafficData } from './data'

const TrafficSection = () => {
  return (
    <section className="">
      <div className="w-full h-auto mb-35  bg-black text-white ">
        <div className="w-full pt-20 px-5 md:px-50">
          <div className="mb-15">
            <div className="w-full flex flex-row justify-start items-center text-white mr-[-50px]">
              <h2 className="text-4xl w-[110px] font-bold text-[#BF9D7D]">
                {trafficData.title[0]}
                <br />
                {trafficData.title[1]}
              </h2>
              <div className="border-b-2 bg-gradient-to-r from-[#BE9C7C] to-white w-[70%] md:w-[120px]"></div>
            </div>
          </div>
          <div className="mb-10">
            <p className="pb-5">{trafficData.address}</p>
            <img
              className="w-full min-h-[300px] object-cover"
              {...trafficData.mapImg}
            />
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4">
            {trafficData.info.map((trafficItem) => (
              <li key={trafficItem.id}>
                <img className="w-[64px] h-[64px]" {...trafficItem.image} />
                <h2 className="text-xl font-bold pt-5 pb-2">
                  {trafficItem.title}
                </h2>
                <p className="text-sm">{trafficItem.description}</p>
              </li>
            ))}
          </ul>
        </div>
        <img
          className="bg-black pt-15 w-full min-h-[250px] object-cover"
          {...trafficData.decosImg}
        />
      </div>
    </section>
  )
}

export default TrafficSection
