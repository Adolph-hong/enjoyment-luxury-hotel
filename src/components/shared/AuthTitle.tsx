type AuthTitleProps = {
    eyebrow: string;
    title: string;
}

const AuthTitle : React.FC<AuthTitleProps> = ({eyebrow, title}) => {
    return ( 
        <div className="flex flex-col gap-[8px] z-10 pb-[40px]">
            <p className="text-[#BF9D7D] font-bold max-sm:text-[14px]">{eyebrow}</p>
            <h1 className="text-[#ffffff] text-5xl font-bold max-sm:text-[32px]">{title}</h1>
        </div>
     );
}
 
export default AuthTitle;