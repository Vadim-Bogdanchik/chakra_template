import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { store } from '../redux/store'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Script from 'next/script'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			{/* <Script
				src='https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID'
				strategy='afterInteractive'
			/>
			<Script id='google-analytics' strategy='afterInteractive'>
				{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'GA_MEASUREMENT_ID');
        `}
			</Script> */}

			{/* REDUX храниличе */}
			<Provider store={store}>
				<Navbar />
				<Component {...pageProps} />
				<Footer />
			</Provider>
		</>
	)
}

export default MyApp

export function reportWebVitals(metric: any) {
	if (metric.label === 'web-vital') {
		console.log(metric)
	}
}
