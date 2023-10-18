import React from 'react';

import LinkButton from '../../UI/LinkButton';

const Join = () => {
	return (
		<section className='conteiner mt-52'>
			<div className='grid grid-flow-row auto-rows-min place-items-center gap-5'>
				<h3 className='heading-medium'>Join Today</h3>
				<p className='max-w-[500px] text-center leading-7'>
					Be the first to know about exclusive promotions, new menu items,
					and events. Don’t miss out on the wildest coffee experience
					you'll ever have!
				</p>
				<div className='w-full uppercase md:w-1/3'>
					<LinkButton href=''>Subscribe now</LinkButton>
				</div>
			</div>
		</section>
	);
};

export default Join;
