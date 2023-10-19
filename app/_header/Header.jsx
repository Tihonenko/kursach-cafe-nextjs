'use client';

import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';

import { ChevronDownIcon } from '@/components/Proxy/proxy-library';

import useMediaQuery from '../hooks/useMediaQuery';

import NavItem from './NavItem';

const navData = [
	{
		name: 'Home',
		path: '',
	},
	{
		name: 'Menu',
		path: 'menu',
	},
	{
		name: 'About',
		path: 'about',
	},
	{
		name: 'Carrers',
		path: 'work',
	},
	{
		name: 'Gallery',
		path: 'gallery',
	},
];

const burgerVariant = {
	hidden: {
		transform: 'translateY(-100%)',
		opacity: 1,
		transition: {
			type: 'spring',
			duration: 0.37,
			delay: 0.47,
			stiffness: 47,
		},
	},
	visible: {
		transform: 'translateY(-5%)',
		opacity: 1,
		transition: {
			type: 'spring',
			duration: 0.3,
			delay: 0.2,
			stiffness: 47,
		},
	},
	exit: {
		transform: 'translateY(-100%)',
		opacity: 0,
	},
};

const listVariant = {
	hidden: (custom) => ({
		transform: 'translateX(-27%)',
		opacity: 0,
		transition: {
			type: 'spring',
			stiffness: 47,
			duration: 0.2,
			delay: custom * 0.1,
		},
	}),
	visible: (custom) => ({
		transform: 'translateX(0%)',
		opacity: 1,
		transition: {
			type: 'spring',
			stiffness: 47,
			duration: 0.2,
			delay: custom * 0.1,
		},
	}),
	exit: (custom) => ({
		transform: 'translateX(10%)',

		opacity: 0,
		transition: {
			type: 'spring',
			stiffness: 107,
			duration: 0.1,
			delay: (navData.length - custom - 1) * 0.07, //Переворачиваем порядок исчезновения элементов
		},
	}),
};

const Header = () => {
	const isAboveSmallQuery = useMediaQuery('(min-width: 809px)');

	const [open, setOpen] = useState(false);

	const handleClick = () => {
		setOpen(!open);
	};

	return (
		<header className='fixed z-10 w-full bg-secondaryBrown py-3'>
			<div className='container grid grid-cols-4'>
				<div className='col-start-1 '>
					<h2 className='text-left font-main text-4xl'>Cosy</h2>
				</div>
				{isAboveSmallQuery ? (
					<nav className='col-span-3 hidden w-full place-self-center md:block'>
						<ul className='grid grid-cols-5'>
							{navData.map((item, idx) => (
								<li key={idx} className='text-right'>
									<NavItem link={item} />
								</li>
							))}
						</ul>
					</nav>
				) : (
					<>
						<button
							onClick={handleClick}
							className='relative col-start-4 block justify-self-stretch md:hidden'
						>
							<ChevronDownIcon
								className={
									open
										? 'transition-settings rotate-180'
										: 'transition-settings rotate-0'
								}
								boxSize='25px'
							/>
						</button>
						<motion.nav
							initial={{ transform: 'translateY(-100%)', opacity: 0 }}
							variants={burgerVariant}
							animate={open ? 'visible' : 'hidden'}
							className='container absolute -z-30 grid h-[150px] w-full grid-cols-4 bg-secondaryBrown md:hidden'
						>
							<ul className='col-span-3 col-start-2 mt-16 grid grid-flow-col grid-rows-2'>
								<AnimatePresence>
									{open &&
										navData.map((item, idx) => (
											<motion.li
												className='text-center'
												custom={idx}
												initial='hidden'
												variants={listVariant}
												key={idx}
												reverse={open ? 'false' : 'true'}
												animate={open ? 'visible' : 'hidden'}
												exit='exit'
												onClick={() => setIsOpen((prev) => !prev)}
											>
												<NavItem link={item} key={idx} />
											</motion.li>
										))}
								</AnimatePresence>
							</ul>
						</motion.nav>
					</>
				)}
			</div>
		</header>
	);
};

export default Header;
