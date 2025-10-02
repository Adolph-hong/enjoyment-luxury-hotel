const AuthLayout = ({ children }) => {
  return (
    <div className="flex items-center justify-center w-full">
      <div className="w-1/2 bg-[image:var(--bg-image-auth)] bg-common h-screen max-lg:hidden"></div>
      <div className="w-1/2 flex flex-col relative bg-[#140f0a] justify-center items-center h-screen max-lg:w-full max-lg:h-[1080px] max-sm:h-full max-sm:px-[20px]">
        <div className="bg-[image:var(--bg-image-rooms-deco)] h-[150px] absolute bg-cover bg-no-repeat top-[72px] inset-x-0 max-sm:top-[32px]"> </div>
        {children}
      </div>
    </div>
  )
}
export default AuthLayout
