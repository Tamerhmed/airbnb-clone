import { useState } from 'react';


const CounterIcon= ({ icon, onClick }) =>{
	return (
		<button 
    className='border rounded-full w-5 h-5 flex justify-center items-center'
    onClick={onClick}>
			<span className='text-slate-900'>{icon}</span>
		</button>
	);
}


export default function Counter({ label }) {
	const [count, setCount] = useState(0);

	return (
		<div className='flex justify-between'>
			<p className='font-bold'>{label}</p>
			<div className='flex items-center gap-x-1'>
				{count > 0 && (
					<CounterIcon
						icon='-'
						onClick={() => setCount((prevCount) => prevCount - 1)}
					/>
				)}
				<span>{count}</span>
				<CounterIcon
					icon='+'
					onClick={() => setCount((prevCount) => prevCount + 1)}
				/>
			</div>
		</div>
	);
}
