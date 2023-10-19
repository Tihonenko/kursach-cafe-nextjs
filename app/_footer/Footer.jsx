import Link from 'next/link';

import styles from './footer.module.scss';

const Footer = () => {
	return (
		<footer className='mt-52'>
			<div className={styles.content}>
				<div>
					<h3 className={styles.content_heading}>Menu</h3>
					<ul className={styles.content_list}>
						<li>
							<Link href='/'>Coffee</Link>
						</li>
						<li>
							<Link href='/'>Tea</Link>
						</li>
						<li>
							<Link href='/'>Sandwiches</Link>
						</li>
					</ul>
				</div>
				<div className='col-start-3'>
					<h3 className={styles.content_heading}>About</h3>
					<ul className={styles.content_list}>
						<li>
							<Link href='/'>About us</Link>
						</li>
						<li>
							<Link href='/'>Gallery</Link>
						</li>

						<li>
							<Link href='/'>Careers</Link>
						</li>
						<li>
							<Link href='/'>Contact</Link>
						</li>
					</ul>
				</div>
			</div>
			<div className='mt-10 border-t border-mainBlack py-10'>
				<div className='container select-none'>
					<p>© Cosy Coffee Place - The Best in Town</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
