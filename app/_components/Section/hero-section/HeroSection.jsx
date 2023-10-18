import styles from './hero.module.scss';

const HeroSection = () => {
	return (
		<section className='container pt-52'>
			<div className={styles.hero_section}>
				<div className='relative'>
					<div className={styles.fill_circle} />
					<div className={styles.rounded_circle} />
				</div>
				<h1 className='heading-large mt-10'>Cosy Cafe</h1>
				<h1 className={`heading-large mt-2 ${styles.hero_second_title}`}>
					Perfection Served
				</h1>
			</div>
		</section>
	);
};

export default HeroSection;
