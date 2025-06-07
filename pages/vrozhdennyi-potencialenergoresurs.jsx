import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

const vrozhdennyiPotenfialenergoresurs = () => {
	return (
		<>
			<Head>
				<title>
					Чакроанализ рассчитать по дате рождения, ХВД калькулятор чакр - расчет
					и онлайн расшифровка процентов
				</title>
				<meta
					name='description'
					content='Нумеролог ХВД - расчет чакроанализа по дате рождения в онлайн калькуляторе чакр - Нумерология Чакра'
				/>
			</Head>
			<div className='flex flex-col items-center select-none'>
				<img
					className='w-full h-[500px] object-cover hidden sm:block'
					src='/assets/bg-service.jpg'
					alt='Врождённый потенциал/энергоресурс'
				/>
				<img
					className='w-full h-[300px] object-cover block sm:hidden'
					src='/assets/bg-service-mobile.jpg'
					alt='Врождённый потенциал/энергоресурс'
				/>
				<div className='flex flex-col sm:flex-row items-start justify-center w-[80%] pb-5 sm:pb-10'>
					<div className='w-full p-5 '>
						<h3 className='my-3'>Чакроанализ</h3>
						<span className='my-3 font-medium'>
							Описание ваших сильных/слабых чакр
						</span>
						<p className='mt-5 text-justify'>
							☝🏻🧐 каждая чакра отвечает за определённую сферу жизни, и от того,
							как они раскрыты, зависит как вы проявляетесь в мир в той сфере,
							за которую отвечает чакра; Предрасположенность к той или иной
							профессии. Рекомендации по проработке слабых чакр/энергии;
							Рекомендации по компенсации избыточного потенциала сильной
							чакры/энергии; 🔮 Формат диагностики: звуковой файл 40-60 мин,
							плюс обратная связь.
						</p>
						<p className='my-5 text-xl'>Цена 5000 Руб.</p>
						<Link
							className='w-full lg:w-[250px]'
							href='https://wa.me/79057444724'
							scroll={false}
							target='_blank'
						>
							<button className='uppercase text-white  duration-500 w-full lg:w-[250px] mt-5 lg:mt-10 border-none font-medium px-5 py-5 bg-black border border-black shadow-lg hover:shadow-none hover:bg-slate-800'>
								Записаться на консультацию
							</button>
						</Link>
					</div>
				</div>
			</div>
		</>
	)
}

export default vrozhdennyiPotenfialenergoresurs
