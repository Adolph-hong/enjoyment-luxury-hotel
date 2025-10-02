import { useState } from 'react'
import AuthLayout from '../shared/AuthLayout'
import SignUpFormStep1 from '../forms/SignUpFormStep1'
import SignUpFormStep2 from '../forms/SignUpFormStep2'

const SignUp = () => {
  const [step, setStep] = useState(1)
  const [step1Data, setStep1Data] = useState(null)

  const handleNextStep = (data) => {
    setStep1Data(data)
    setStep(2)
  }

  return (
    <AuthLayout>
      {step === 1 ? (
        <SignUpFormStep1 onNext={handleNextStep} />
      ) : (
        <SignUpFormStep2 onBack={() => setStep(1)} step1Data={step1Data} />
      )}
    </AuthLayout>
  )
}

export default SignUp
