const AuthLayout = ({ children }) => {
  return (
    <div className="flex items-stretch w-full min-h-screen">
      <div className="w-1/2 bg-[image:var(--bg-image-auth)] bg-common min-h-screen max-lg:hidden"></div>
      <div className="w-1/2 flex flex-col relative bg-[#140f0a] justify-center items-center min-h-screen py-[80px] max-lg:w-full max-sm:px-[20px]">
        <div className="bg-[image:var(--bg-image-rooms-deco)] h-[150px] absolute bg-cover bg-no-repeat top-[72px] inset-x-0 max-sm:top-[32px]"> </div>
        {children}
      </div>
    </div>
  )
}
export default AuthLayout
