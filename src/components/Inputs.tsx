import Input from "./Input.tsx"

const inputs = [
  {label: "Initial Investment"},
  {label: "Annual Investment"},
  {label: "Expected Return"},
  {label: "Duration"},
]

const Inputs = () => {
  return (
    <div className='bg-purple-500 p-4 rounded-lg md:w-1/2 max-w-md mx-auto grid grid-cols-1 gap-3 md:grid-cols-2'>
      {inputs.map((input, index) => (
        <Input key={index} label={input.label} />
      ))}
    </div>
  )
}

export default Inputs