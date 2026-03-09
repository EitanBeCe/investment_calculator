import { useState } from 'react'
import Input from './Input.tsx'
import { InvestmentInput } from '../util/investment.ts'
import { InputEventMy } from '../util/types.ts'

const inputs: { label: string; name: keyof InvestmentInput }[] = [
  { label: 'Initial Investment', name: 'initialInvestment' },
  { label: 'Annual Investment', name: 'annualInvestment' },
  { label: 'Expected Return', name: 'expectedReturn' },
  { label: 'Duration', name: 'duration' },
]

const Inputs = () => {
  const [inputValues, setInputValues] = useState<Record<keyof InvestmentInput, string>>({
    initialInvestment: '',
    annualInvestment: '',
    expectedReturn: '',
    duration: '',
  })

  const handleInputChange = (e: InputEventMy, inputName: keyof InvestmentInput) => {
    setInputValues(prevValues => ({
      ...prevValues,
      [inputName]: e.target.value,
    }))
  }

  return (
    <div className="bg-purple-500 p-4 rounded-lg md:w-1/2 max-w-md mx-auto grid grid-cols-1 gap-3 md:grid-cols-2">
      {inputs.map(input => (
        <Input
          key={input.name}
          label={input.label}
          value={inputValues[input.name]}
          onChange={e => handleInputChange(e, input.name)}
        />
      ))}
    </div>
  )
}

export default Inputs
