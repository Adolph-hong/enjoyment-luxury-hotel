import { useState } from 'react'
import AuthLayout from '../shared/AuthLayout'
import SignupFirst from '../forms/SignupFirst'
import SignupSecond from '../forms/SignupSecond'

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
        <SignupFirst onNext={handleNextStep} />
      ) : (
        <SignupSecond onBack={() => setStep(1)} step1Data={step1Data} />
      )}
    </AuthLayout>
  )
}

export default SignUp
