const Input = ({label}: {label: string}) => {
  return (
		<div className="user-input">
			<label htmlFor="user-input" className='label'>
				<span className='label-text'>{label}</span>
			</label>

			<input type="text" id="user-input" className='input input-bordered w-full max-w-xs' />
		</div>
  )
}

export default Input