// Страница по дефолту, роут создается автоматически в папке app
//если файл называется page.js
import HeroMenu from './_section/hero-menu/HeroMenu';

export default function Home() {
	return (
		<main>
			<HeroMenu />
		</main>
	);
}
