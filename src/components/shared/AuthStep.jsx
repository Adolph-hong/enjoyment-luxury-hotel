const AuthStep = () => {
    return ( 
        <div className="flex items-center mb-[56px] gap-2">
            <div className="flex flex-col items-center gap-[4px] text-[#ffffff] font-bold">
                <div className="flex items-center justify-center w-[32px] h-[32px] rounded-[50%] border border-[#BF9D7D] bg-[#BF9D7D]">1</div>
                <p className="whitespace-nowrap max-sm:text-[14px]">輸入信箱及密碼</p>
            </div>
            <div className="flex h-[2px] w-full bg-[#909090]"></div>
            <div className="flex flex-col items-center gap-[4px] text-[#909090] font-bold">
                <div className="flex items-center justify-center w-[32px] h-[32px] rounded-[50%] border border-[#909090]">2</div>
                <p className="whitespace-nowrap max-sm:text-[14px]">填寫基本資料</p>
            </div>
        </div>
     );
}
 
export default AuthStep;