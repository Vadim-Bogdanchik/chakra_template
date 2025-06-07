import { Html, Head, Main, NextScript } from 'next/document'
import YandexMetrikaTag from '../components/YandexMetrika'

export default function Document() {
	return (
		<Html lang='ru' style={{ scrollBehavior: 'smooth' }}>
			<Head>
				<link rel='icon' href='/favicon.ico' />
				<link rel='preconnect' href='https://fonts.googleapis.com' />
				<link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
				<link
					href='https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;500;600;700;800;900&display=swap'
					rel='stylesheet'
				/>
			</Head>
			<body>
				<Main />
				<NextScript />
				<YandexMetrikaTag
					yid={91848669}
					clickmap={true}
					trackLinks={true}
					accurateTrackBounce={true}
					webvisor={true}
				/>
				{/* <!-- Yandex.Metrika counter --> */}
			</body>
		</Html>
	)
}
