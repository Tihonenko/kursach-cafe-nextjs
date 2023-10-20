'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import MenuCard from '../../MenuCard/MenuCard';
import Loading from '../../loading';

import { selectDrink } from '@/redux/slices/MenuSlice';

const HeroMenu = () => {
	const searchParams = useSearchParams();
	const selectsDrink = searchParams.get('drink');
	const selectsEat = searchParams.get('eat');
	const dispatch = useDispatch();

	const drink = useSelector((state) => state.menu.selectedDrink);

	useEffect(() => {
		dispatch(selectDrink(selectsDrink));
	}, [selectDrink, selectsDrink]);

	return (
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
	);
};

export default HeroMenu;
