import { InvestmentInput } from './investment.ts'

export type InputValues = Record<keyof InvestmentInput, string>

export type InputEventMy = React.ChangeEvent<HTMLInputElement>
