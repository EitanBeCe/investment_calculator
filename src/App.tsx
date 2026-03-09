import { useState } from 'react'
import Header from './components/Header.tsx'
import Inputs from './components/Inputs.tsx'
import Table from './components/Table.tsx'
import { InvestmentInput } from './util/investment.ts'
import { InputEventMy } from './util/types.ts'

function App() {
  const [inputValues, setInputValues] = useState<Record<keyof InvestmentInput, string>>({
    initialInvestment: '10000',
    annualInvestment: '1000',
    expectedReturn: '6',
    duration: '10',
  })

  const isInputValid = Object.values(inputValues).every(
    value => value.trim() !== '' && !isNaN(Number(value)) && Number(value) >= 0
  )

  const handleInputChange = (e: InputEventMy, inputName: keyof InvestmentInput) => {
    setInputValues(prevValues => ({
      ...prevValues,
      [inputName]: e.target.value,
    }))
  }

  return (
    <>
      <Header />
      <Inputs inputValues={inputValues} handleInputChange={handleInputChange} />
      {!isInputValid && (
        <p className="text-red-500 text-center mt-4">Please enter valid numbers (greater than 0) for all fields.</p>
      )}
      {isInputValid && <Table inputsValue={inputValues} />}
    </>
  )
}

export default App
