import { useLocation, Navigate } from 'react-router-dom'
import AuthLayout from '../shared/AuthLayout'
import SignupSecond from '../forms/SignupSecond'

type Step1Data = { email: string; password: string }
const SignupDetails: React.FC = () => {
  const location = useLocation()
  const step1Data = location.state as Step1Data | undefined

  if (!step1Data) {
    return <Navigate to="/signup" replace />
  }

  return (
    <AuthLayout>
      <SignupSecond step1Data={step1Data} />
    </AuthLayout>
  )
}

export default SignupDetails