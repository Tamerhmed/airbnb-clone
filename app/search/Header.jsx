'use client';

import { useState } from 'react';
import SearchBar from './components/SearchBar';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import clsx from 'clsx';

export default function Header() {
	const [isExpanded, setIsExpanded] = useState(false);

	const toggleExpanded = () => {
		setIsExpanded((prev) => !prev);
	};

	const headerContainerClasses = clsx(
		'container',
		'mx-auto',
		'flex',
		'justify-between',
		'items-center',
		'bg-white',
		'py-8',
		{
			'h-[7.5rem]': !isExpanded,
			'h-[13rem]': isExpanded,
		}
	);

	  const searchContainerClasses = clsx(
			'search-container',
			'flex',
			'flex-row',
			'rounded-full',
			'p-4',
			'justify-center',
			'border',
			'drop-shadow-md',
			'bg-white',
			{
				'border-b-0': !isExpanded,
				'border-b-8': isExpanded,
			}
		);

	return (
		<header className='border-b bg-white z-50 fixed w-full transition-all flex'>
			<div className={headerContainerClasses}>
				<div className='text-red-500'>airbnb</div>
				{isExpanded ? (
					<SearchBar />
				) : (
					<button
						onClick={toggleExpanded}
						className={searchContainerClasses}
					>
						<div className='input flex items-center'>
							<p>Anywhere</p>
						</div>
						<div className='input flex items-center'>
							<p>AnyDate</p>
						</div>
						<div className='input flex items-center'>
							<p>Add guests</p>
						</div>
						<div className='search-btn px-4 rounded-full bg-primary h-10 w-10 flex flex-col justify-center items-center text-white'>
							<MagnifyingGlassIcon className='w-5 h-4' />
						</div>
					</button>
				)}
				<div>user</div>
			</div>
		</header>
	);
}
