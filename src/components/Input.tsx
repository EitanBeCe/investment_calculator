import { InputEventMy } from '../util/types.ts'

interface InputProps {
  label: string
  //   name: keyof InvestmentInput;
  value: string
  onChange: (e: InputEventMy) => void
}

const Input = ({ label, value, onChange }: InputProps) => {
  return (
    <div className="user-input">
      <label htmlFor="user-input" className="label">
        <span className="label-text">{label}</span>
      </label>

      <input
        type="number"
        id="user-input"
        className="input input-bordered w-full max-w-xs"
        value={value}
        onChange={e => onChange(e)}
      />
    </div>
  )
}

export default Input
