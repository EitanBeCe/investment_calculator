import { useState } from 'react'
import Header from './components/Header.tsx'
import Inputs from './components/Inputs.tsx'
import Table from './components/Table.tsx'
import { InvestmentInput } from './util/investment.ts'
import { InputEventMy } from './util/types.ts'

function App() {
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
    <>
      <Header />
      <Inputs inputValues={inputValues} handleInputChange={handleInputChange} />
      <Table inputsValue={inputValues} />
    </>
  )
}

export default App
