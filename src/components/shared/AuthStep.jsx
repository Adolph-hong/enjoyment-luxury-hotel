const AuthStep = ({ bg2, textColor2, borderColor2, lineColor, isDone = false }) => {
  return (
    <div className="flex items-center mb-[56px] gap-2">
      <div className="flex flex-col items-center gap-[4px] text-[#ffffff] font-bold">
        {isDone ? (
          <div className="flex items-center justify-center w-[32px] h-[32px] rounded-[50%] border border-[#BF9D7D] bg-[#BF9D7D]">
            <svg
              className="w-4 h-4 text-white"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
            >
              <path d="M5 13l4 4L19 7" />
            </svg>
          </div>
        ) : (
          <div className="flex items-center justify-center w-[32px] h-[32px] rounded-[50%] border border-[#BF9D7D] bg-[#BF9D7D]">
            1
          </div>
        )}

        <p className="whitespace-nowrap max-sm:text-[14px]">輸入信箱及密碼</p>
      </div>
      <div className={`flex h-[2px] w-full ${lineColor}`}></div>
      <div
        className={`flex flex-col items-center gap-[4px] font-bold ${textColor2}`}
      >
        <div
          className={`flex items-center justify-center w-[32px] h-[32px] rounded-[50%] border ${borderColor2} ${bg2} ${textColor2}`}
        >
          2
        </div>
        <p className="whitespace-nowrap max-sm:text-[14px]">填寫基本資料</p>
      </div>
    </div>
  )
}

export default AuthStep
