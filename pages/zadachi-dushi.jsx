import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

const zadachiDushi = () => {
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
					alt='Задачи души'
				/>
				<img
					className='w-full h-[300px] object-cover block sm:hidden'
					src='/assets/bg-service-mobile.jpg'
					alt='Задачи души'
				/>
				<div className='flex flex-col sm:flex-row items-start justify-center w-[80%] pb-5 sm:pb-10'>
					<div className='w-full p-5'>
						<h3 className='my-3'>Задачи души</h3>
						<span className='my-3 font-medium'>
							Для чего душа пришла в это воплощение, какой опыт вы должны
							получить в этой жизни, куда направить внимание
						</span>
						<p className='mt-5 text-justify'>
							Описание «типологии». Число души человека, природа человека,
							показатель жизненного цикла души. Описание КАРМИЧЕСКОЙ задачи.
							Созревшая личная карма. Показывает наши нереализованные задачи из
							прошлой жизни, тот опыт, который мы не завершили или провалили. И
							в нынешнем воплощении душа взяла на себя задачу либо довести до
							конца начатое, либо пересдать экзамен прошлого. Определение зоны
							уязвимости Описание РОДОВОЙ задачи. Это ваше наследство, то, что
							перешло от рода, ресурс рода, тот потенциал, что был накоплен в
							родовой иерархии или это кармические узлы, то, с чем не справились
							предки рода. Определение негативных повторяющихся событий
							(негативные родовые сценарии) и рекомендации по отработке; Наличие
							эзотерических каналов; предрасположенность к оккультным наукам; 🔮
							Формат консультации: звуковой файл 40-60 минут + обратная связь.
						</p>
						<p className='my-5 text-xl'>Цена 5000 Руб.</p>
						<Link
							className='w-full lg:w-[250px]'
							href='https://wa.me/79057444724'
							scroll={false}
							target='_blank'
						>
							<button className='uppercase text-white duration-500 w-full lg:w-[250px] mt-5 lg:mt-10 border-none font-medium px-5 py-5 bg-black border border-black shadow-lg hover:shadow-none hover:bg-slate-800'>
								Записаться на консультацию
							</button>
						</Link>
					</div>
				</div>
			</div>
		</>
	)
}

export default zadachiDushi
