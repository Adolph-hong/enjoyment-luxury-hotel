import { useNavigate } from 'react-router-dom'
type BottonProps = {
  color: string
  bg: string
  content: string
  hoverBg?: string
  hoverText?: string
  mt: string
  textSize: string
  url?: string
  type?: 'button' | 'submit' | 'reset'
  onClick?: () => void
  disabled?: boolean
}
const Button = ({
  color,
  bg,
  content,
  hoverBg,
  hoverText,
  mt,
  textSize,
  url,
  type,
  onClick,
}: BottonProps) => {
  const navigate = useNavigate()
  const handleClick = () => {
    if (onClick) {
      onClick()
    } else if (url) {
      navigate(url)
    }
  }

  return (
    <button
      type={type || 'button'}
      onClick={handleClick}
      className={`h-[56px] w-full flex justify-center items-center rounded-[8px] ${color} ${bg} font-bold cursor-pointer ${hoverBg} ${hoverText} ${mt} ${textSize}`}
    >
      {content}
    </button>
  )
}

export default Button
