import { Fragment } from 'react'
import { aboutData } from './data'

const AboutSection = () => {
  return (
    <section>
      <div className="flex flex-row w-full py-25 xl:h-screen bg-black">
        <div className="bg-image-about bg-no-repeat h-3/4 w-full bg-cover bg-center text-white pl-10 pr-5 xl:px-0">
          <div className="mx-auto w-full xl:w-[60%] xl:mr-40 mt-15 mb-20 p-15 border-l border-b inset-0 z-10 rounded-t-[80px] rounded-bl-[80px]  bg-gradient-to-b from-black to-[#BE9C7CCC] w-[60%] bg-opacity-50">
            <div className="flex flex-row items-center mb-15 gap-8 ">
              <h2 className="text-4xl font-bold">
                {aboutData.title[0]}
                <br />
                {aboutData.title[1]}
              </h2>
              <div className="border-b-2 border-white w-[50%] md:w-[20%]"></div>
            </div>
            <div className="text-sm leading-6">
              {aboutData.description.map((desc, index) => (
                <Fragment key={index}>
                  <p>{desc}</p>
                  <br />
                </Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
