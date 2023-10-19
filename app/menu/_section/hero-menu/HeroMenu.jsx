'use client';

import { motion } from 'framer-motion';
import { Suspense, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ChevronDownIcon } from '@/components/Proxy/proxy-library';

import MenuCard from '../../MenuCard/MenuCard';
import Loading from '../../loading';

import { selectDrink } from '@/redux/slices/MenuSlice';

export const listVariants = {
	open: {
		height: 'auto',
	},
	close: {
		height: '0px',
	},
};

const HeroMenu = () => {
	const dispatch = useDispatch();

	const [drinksOpen, setDrinksOpen] = useState(false);
	const [eatOpen, setEatOpen] = useState(false);

	const drink = useSelector((state) => state.menu.selectedDrink);

	useEffect(() => {
		dispatch(selectDrink('coffee'));
	}, [selectDrink]);

	const drinksHandler = (drink) => {
		dispatch(selectDrink(drink));
	};

	return (
		<section className='container pt-20'>
			<h1 className='heading-large text-left'>MENU</h1>

			<div className='grid grid-cols-4'>
				<div className='grid grid-cols-4 justify-items-start gap-28'>
					<div className='grid w-[100px] grid-flow-row auto-rows-auto'>
						<button
							onClick={() => setDrinksOpen((prev) => !prev)}
							className='mt-10 flex items-start'
						>
							<p>DRINKS</p>
							<ChevronDownIcon
								className={`transition-settings ${
									drinksOpen ? 'rotate-180' : 'rotate-0'
								}`}
								boxSize={25}
							/>
						</button>
						<motion.ul
							className='overflow-hidden'
							initial='hidden'
							variants={listVariants}
							animate={drinksOpen ? 'open' : 'close'}
						>
							<motion.li>
								<button onClick={() => drinksHandler('tea')}>
									TEA
								</button>
							</motion.li>
							<motion.li>
								<button onClick={() => drinksHandler('coffee')}>
									COFFEE
								</button>
							</motion.li>
							<motion.li>
								<button>COCTAIL</button>
							</motion.li>
						</motion.ul>
					</div>
					{/* LIST DRINKS TYPE */}
					<div className='grid w-[100px] grid-flow-row auto-rows-auto'>
						<button
							onClick={() => setEatOpen((prev) => !prev)}
							className='mt-10 flex items-start'
						>
							<p>EAT</p>
							<ChevronDownIcon
								className={`transition-settings ${
									eatOpen ? 'rotate-180' : 'rotate-0'
								}`}
								boxSize={25}
							/>
						</button>
						<motion.ul
							className='overflow-hidden'
							initial='hidden'
							variants={listVariants}
							animate={eatOpen ? 'open' : 'close'}
						>
							<motion.li>
								<button>TEA</button>
							</motion.li>
							<motion.li>
								<button>COFFEE</button>
							</motion.li>
							<motion.li>
								<button>COCTAIL</button>
							</motion.li>
						</motion.ul>
					</div>
					{/* LIST EAT TYPE */}
				</div>
			</div>
			<Suspense fallback={<Loading />}>
				<div className='mt-10 grid grid-cols-1 place-items-center gap-x-5 gap-y-10 md:grid-cols-2'>
					{drink === 0 ? (
						<h3>Not found</h3>
					) : (
						<>
							{drink?.types?.map((type, idx) => (
								<MenuCard key={idx} type={type} />
							))}
						</>
					)}
				</div>
			</Suspense>
		</section>
	);
};

export default HeroMenu;
