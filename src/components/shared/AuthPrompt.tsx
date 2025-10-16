import { Link } from 'react-router-dom'
type AuthPromptProps = {
  question: string
  goto: string
  goUrl: string
  mt: string
}
const AuthPrompt = ({question, goto, goUrl, mt} : AuthPromptProps) => {
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
