const Button = ({color, bg, content, hoverBg, hoverText}) => {
    return ( 
        <button className={`h-[56px] flex justify-center items-center rounded-[8px] ${color} ${bg} font-bold cursor-pointer ${hoverBg} ${hoverText}`}>
            { content }
        </button>
     );
}
 
export default Button;