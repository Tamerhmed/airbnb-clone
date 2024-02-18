import React, { useState } from 'react';
import Counter from './Counter';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';

export default function SearchBar() {
	const [isSearchFocused, setIsSearchFocused] = useState(false);
	const [startDate, setStartDate] = useState(new Date());
	const [endDate, setEndDate] = useState(null);

	const handleSelect = (ranges) => {
		console.log(ranges);
		if (ranges.selection.startDate !== startDate) {
			setStartDate(ranges.selection.startDate);
		}
		if (ranges.selection.endDate !== endDate) {
			setEndDate(ranges.selection.endDate);
		}
	};

	const selectionRange = {
		startDate: startDate,
		endDate: endDate,
		key: 'selection',
	};

	return (
		<div className='flex flex-row self-center rounded-full border  p-2 mt-8 w-3/4 text-left'>
			<button onClick={() => setIsSearchFocused(true)}>
				<p className='font-bold border-r px-4 text-left'>Where</p>
				{isSearchFocused ? (
					<input
						type='text'
						placeholder='Search destinations'
						className='text-slate-800 bg-transparent border-none outline-none'
					/>
				) : (
					<p className='text-slate-600 px-4 border-r text-left'>Search destinations</p>
				)}
			</button>
			<div className='dropdown dropdown-end px-4 border-r text-left'>
				<label tabIndex={1}>
					<p className='font-bold'>Dates</p>
					<p>Select Ranged</p>
				</label>
				<div
					tabIndex={1}
					className='dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52'
				>
					<DateRangePicker
						rangeColors={['#ff385c']}
						ranges={[selectionRange]}
						minDate={new Date()}
						onChange={handleSelect}
					/>
				</div>
			</div>
			<div className='dropdown dropdown-end px-4 text-left'>
				<label tabIndex={2}>
					<p className='font-bold'>Who</p>
					<p className='text-slate-600'>Add Guests</p>
				</label>
				<div
					tabIndex={2}
					className='dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52'
				>
					<Counter label='Adults' />
				</div>
			</div>
			<button className='px-4 text-white rounded-full bg-primary p-4 justify-center items-center gap-3 flex flex-row'>
				<MagnifyingGlassIcon className='w-5 h-5' />
				<span>Search</span>
			</button>
		</div>
	);
}
