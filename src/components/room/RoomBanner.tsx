import HeroTitle from '../shared/HeroTitle'

const RoomBanner:React.FC = () => {
  return (
    <section>
      <HeroTitle leftClassName="xl:pl-80">
        <div className="z-10 flex justify-center items-center w-full xl:justify-center xl:-ml-40">
          <h1 className="text-5xl xl:text-7xl font-bold text-white">
            客房旅宿
          </h1>
        </div>
      </HeroTitle>
    </section>
  )
}

export default RoomBanner
