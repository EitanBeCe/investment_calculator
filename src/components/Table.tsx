import { calculateInvestmentResults, formatter, InvestmentInput } from '../util/investment.ts'
import { InputValues } from '../util/types.ts'

interface TableProps {
  inputsValue: InputValues
}

const Table = ({ inputsValue }: TableProps) => {
  const inputsNumbers: InvestmentInput = {
    initialInvestment: Number(inputsValue.initialInvestment),
    annualInvestment: Number(inputsValue.annualInvestment),
    expectedReturn: Number(inputsValue.expectedReturn),
    duration: Number(inputsValue.duration),
  }

  const results = calculateInvestmentResults(inputsNumbers)

  return (
    // <table className="w-full max-w-2xl mx-auto mt-6 bg-white rounded-lg shadow-md">
    <table className="result md:w-1/2 max-w-md mx-auto mt-6">
      <thead>
        <tr>
          <th className="py-2 px-4 border-b">Year</th>
          <th className="py-2 px-4 border-b">Investment Value</th>
          <th className="py-2 px-4 border-b">Interest(Year)</th>
          <th className="py-2 px-4 border-b">Total Interest</th>
          <th className="py-2 px-4 border-b">Invested Capital</th>
        </tr>
      </thead>

      <tbody>
        {results.map(result => (
          <tr key={result.year}>
            <td className="py-2 px-4 border-b">{result.year}</td>
            <td className="py-2 px-4 border-b">{formatter.format(result.annualInvestment)}</td>
            <td className="py-2 px-4 border-b">{formatter.format(result.interest)}</td>
            <td className="py-2 px-4 border-b">{formatter.format(1000)}</td>
            <td className="py-2 px-4 border-b">{formatter.format(1000)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Table
