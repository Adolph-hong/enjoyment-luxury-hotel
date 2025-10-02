import { useState } from 'react'
import AuthLayout from '../shared/AuthLayout'
import SignUpFormStep1 from '../forms/SignUpFormStep1'
import SignUpFormStep2 from '../forms/SignUpFormStep2'

const SignUp = () => {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({})

  const handleNextStep = (data) => {
    setFormData({ ...formData, ...data })
    setStep(2)
  }

  return (
    <AuthLayout>
      {step === 1 ? (
        <SignUpFormStep1 onNext={handleNextStep} />
      ) : (
        <SignUpFormStep2 onBack={() => setStep(1)} initialData={formData} />
      )}
    </AuthLayout>
  )
}

export default SignUp
