const AuthLayout = ({ children }) => {
  return (
    <div className="flex w-full">
      <div className="w-1/2 bg-[image:var(--auth-bg)] bg-common h-screen max-lg:hidden"></div>
      <div className="w-1/2 flex flex-col relative bg-[#140f0a] justify-center items-center max-lg:w-full max-lg:h-[1080px] max-sm:h-[812px]">
        <div className="bg-[image:var(--rooms-2)] h-[150px] absolute bg-cover bg-no-repeat top-[72px] inset-x-0 max-sm:top-[32px]"> </div>
        {children}
      </div>
    </div>
  )
}
export default AuthLayout
