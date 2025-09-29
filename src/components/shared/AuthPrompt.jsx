import { Link } from 'react-router-dom'

const AuthPrompt = ({question, goto, goUrl, mt}) => {
  return (
    <div className={`flex gap-2 ${mt} max-sm:text-[14px]`}>
      <p className="text-[#FFFFFF]">{question}</p>
      <Link to={goUrl} className="text-[#BF9D7D] font-bold">
        {goto}
      </Link>
    </div>
  )
}

export default AuthPrompt
