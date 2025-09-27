const AuthLayout = ({ children }) => {
    return ( 
        <div className="flex w-full h-full">
            <div className="w-1/2 bg-[image:var(--login-and-signup-bg)] bg-common h-screen"></div>
            <div className="w-1/2 flex relative bg-[#140f0a] justify-center pt-[170px]">
                <div className="bg-[image:var(--rooms-2)] bg-no-repeat h-full w-full absolute top-[72px]">
                </div>
                    { children }
            </div>
        </div>
     );
}
 
export default AuthLayout;