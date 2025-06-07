import type { NextPage } from 'next'
import Head from 'next/head'

const Error: NextPage = () => {
	return (
		<div>
			<Head>
				<title>
					Чакроанализ рассчитать по дате рождения, ХВД калькулятор чакр - расчет и онлайн расшифровка процентов
				</title>
				<meta
					name='404'
					content='Нумеролог ХВД - расчет чакроанализа по дате рождения в онлайн калькуляторе чакр - Нумерология Чакра'
				/>
				<link rel='icon' href='/favicon.ico'/>
			</Head>
			<div className='flex w-full h-screen items-center justify-center'>
				<img className='p-5' src='/assets/404-img.png' alt='404error' />
			</div>
		</div>
	)
}

export default Error
