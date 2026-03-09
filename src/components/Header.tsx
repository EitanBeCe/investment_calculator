import { memo } from 'react'
import logo from '/investment-calculator-logo.png'

const Header = () => {
  return (
    <div id="header">
      <img className="m-4 mx-auto" src={logo} alt="Logo" width={80} height={80} />
      <h1 className="center font-bold text-xl">Investment Calculator</h1>
    </div>
  )
}

export default memo(Header)
