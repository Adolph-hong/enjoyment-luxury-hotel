import { trafficData } from './data'

const TrafficSection = () => {
  return (
    <section className="">
      <div className="w-full h-auto bg-black text-white ">
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
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3682.690768993764!2d120.30793527534601!3d22.62801987945228!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e0491b7febacd%3A0x24542bac2726199b!2z5a-25oiQ5LiW57SA5aSn5qiT!5e0!3m2!1szh-TW!2stw!4v1759890784503!5m2!1szh-TW!2stw"
              width="600"
              height="450"
              className="w-full min-h-[300px] object-cover"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4">
            {trafficData.info.map((trafficItem) => (
              <li key={trafficItem.id}>
                <img className="w-[64px] h-[64px]" {...trafficItem.image} />
                <h2 className="text-xl font-bold pt-5 pb-2">{trafficItem.title}</h2>
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
