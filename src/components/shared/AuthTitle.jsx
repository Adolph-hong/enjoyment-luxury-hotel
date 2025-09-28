const AuthTitle = ({eyebrow, title}) => {
    return ( 
        <div className="flex flex-col gap-[8px] z-10 pb-[40px]">
            <p className="text-[#BF9D7D] font-bold ">{eyebrow}</p>
            <h1 className="text-[#ffffff] text-5xl font-bold">{title}</h1>
        </div>
     );
}
 
export default AuthTitle;