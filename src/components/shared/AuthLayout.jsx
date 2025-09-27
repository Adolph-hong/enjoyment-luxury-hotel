const AuthLayout = ({ children }) => {
  return (
    <div className="flex w-full h-full">
      <div className="w-1/2 bg-[image:var(--login-and-signup-bg)] bg-common h-screen"></div>
      <div className="w-1/2 flex flex-col relative bg-[#140f0a] justify-center items-center">
        <div className="bg-[image:var(--rooms-2)] h-[150px] absolute bg-cover bg-no-repeat top-[72px] inset-x-0 "> </div>
        {children}
      </div>
    </div>
  )
}
export default AuthLayout
