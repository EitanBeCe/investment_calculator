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
    <table id="result" className="mt-6 ">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest(Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>

      <tbody>
        {results.map(result => {
          const totalInterest = result.valueEndOfYear - inputsNumbers.initialInvestment - result.annualInvestment * result.year
          const totalAmountInvested = result.valueEndOfYear - totalInterest

          return (
            <tr key={result.year}>
              <td>{result.year}</td>
              <td>{formatter.format(result.valueEndOfYear)}</td>
              <td>{formatter.format(result.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalAmountInvested)}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default Table
