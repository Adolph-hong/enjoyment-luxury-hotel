import { useState } from 'react'
import AuthLayout from '../shared/AuthLayout'
import SignupFirst from '../forms/SignupFirst'
import SignupSecond from '../forms/SignupSecond'

type Step1Data = {
  email: string
  password: string
}

const SignUp = () => {
  const [step, setStep] = useState(1)
  const [step1Data, setStep1Data] = useState<Step1Data | null>(null)

  const handleNextStep = (data: Step1Data) => {
    setStep1Data(data)
    setStep(2)
  }

  return (
    <AuthLayout>
      {step === 1 ? (
        <SignupFirst onNext={handleNextStep} />
      ) : step1Data ? (
        <SignupSecond onBack={() => setStep(1)} step1Data={step1Data} />
      ) : null}
    </AuthLayout>
  )
}

export default SignUp
