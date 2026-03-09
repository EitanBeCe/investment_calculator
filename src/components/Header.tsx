import logo from '../assets/investment-calculator-logo.png';

const Header = () => {
  return (
    <div className="header center">
			<img src={logo} alt="Logo" width={50} height={50} />
			<h1>Investment Calculator</h1>
    </div>
  )
}

export default Header