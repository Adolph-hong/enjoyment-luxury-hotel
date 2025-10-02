import { Link } from "react-router-dom";

const Button = ({color, bg, content, hoverBg, hoverText, mt, textSize, url, type, onClick}) => {
    if (type === 'submit' || onClick) {
        return (
            <button
                type={type || 'button'}
                onClick={onClick}
                className={`h-[56px] w-full flex justify-center items-center rounded-[8px] ${color} ${bg} font-bold cursor-pointer ${hoverBg} ${hoverText} ${mt} ${textSize}`}
            >
                { content }
            </button>
        );
    }

    return (
        <Link to={url} className={`h-[56px] flex justify-center items-center rounded-[8px] ${color} ${bg} font-bold cursor-pointer ${hoverBg} ${hoverText} ${mt} ${textSize}`}>
                { content }
        </Link>
     );
}

export default Button;