import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

const proforientafiyaDlyaPodrostkov = () => {
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
					className='w-full h-[400px] object-cover hidden sm:block'
					src='/assets/bg-service.jpg'
					alt='Профориентация'
				/>
				<img
					className='w-full h-[300px] object-cover block sm:hidden'
					src='/assets/bg-service-mobile.jpg'
					alt='Профориентация'
				/>
				<div className='flex flex-col sm:flex-row items-start justify-center w-[80%] pb-5 sm:pb-10'>
					<div className='w-full p-5'>
						<h3 className='my-3'>Профориентация</h3>
						<span className='my-3 font-medium'>для подростков</span>
						<p className='mt-5'>
							Сильные стороны вашего ребёнка, рекомендации, как их использовать
							во благо, чтобы сила приносила пользу, а не разрушала. Описание
							родовой и кармический задачи. Примеры профессий, через которые эти
							задачи можно проработать (на эти задачи можно выйти). Описание
							слабых стороны, рекомендации по гармонизации. 🌸 Диагностику можно
							делать под запрос, если ребёнок уже понимает, что хочет. Тогда во
							время консультации я буду рекомендовать, как лучше всего проявить
							себя, чтобы реализовать задуманное. Формат диагностики: звуковой
							файл 60 мин, плюс обратная связь, ответы на вопросы.
						</p>
						<p className='my-5 text-xl'>15 000 Руб.</p>
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

export default proforientafiyaDlyaPodrostkov
