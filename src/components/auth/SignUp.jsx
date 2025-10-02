import { useState } from 'react'
import AuthLayout from '../shared/AuthLayout'
import SignUpFormStep1 from '../forms/SignUpFormStep1'
import SignUpFormStep2 from '../forms/SignUpFormStep2'

const SignUp = () => {
  const [step, setStep] = useState(1)

  return (
    <AuthLayout>
      {step === 1 ? (
        <SignUpFormStep1 onNext={() => setStep(2)} />
      ) : (
        <SignUpFormStep2 onBack={() => setStep(1)} />
      )}
    </AuthLayout>
  )
}

export default SignUp
