import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

const polnyiPsikhologicheskiiProfil = () => {
	return (
		<>
			<Head>
				<title>
					Чакроанализ рассчитать по дате рождения, ХВД калькулятор чакр - расчет
					и онлайн расшифровка процентов
				</title>
				<meta
					name='description'
					content='Нумеролог ХВД - расчет чакроанализа по дате рождения в онлайн калькуляторе чакр - Нумерология Чакраа'
				/>
			</Head>
			<div className='flex flex-col items-center select-none'>
				<img
					className='w-full h-[400px] object-cover hidden sm:block'
					src='/assets/bg-service.jpg'
					alt='Полный психологический профиль'
				/>
				<img
					className='w-full h-[300px] object-cover block sm:hidden'
					src='/assets/bg-service-mobile.jpg'
					alt='Полный психологический профиль'
				/>
				<div className='flex flex-col sm:flex-row items-start justify-center w-[80%] pb-5 sm:pb-10'>
					<div className='w-full p-5'>
						<h3 className='my-3'>Полный психологический профиль</h3>
						<span className='my-3 font-medium'>
							на основе чакральной нумерологии и хвд
						</span>
						<p className='mt-5'>
							Включает в себя расчёт энергопотенциала и задачи души. Диагностика
							помогает понять, почему вы такой/такая как есть, и что с этим
							делать. Что входит: Разбор каждой чакры/определение вашей силы,
							ресурса, через который проще всего взаимодействовать с миром. ☝🏻🧐
							Даст понимание, через какие Ваши энергии вы можете притянуть
							удачу. Рекомендации, как включить силу и начать использовать её во
							благо, жить в своём ресурсе. Рекомендации по проработке слабой
							чакры или как использовать слабую энергию во благо. Родовой
							сценарий и ваше место в нем. Как использовать потенциал и силу
							рода и избежать рисков негативных родовых сценариев. Личная
							кармическая задача. Задача из прошлого воплощения. С чем душа ушла
							из прошлой жизни. Какой опыт нужно довести до конца, что
							переделать, доделить, «пересдать экзамен». 🔮 Форма диагностики:
							Звуковой файл час-полтора часа, плюс обратная связь.
						</p>
						<p className='my-5 text-xl'>Цена 18 000 Руб.</p>
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

export default polnyiPsikhologicheskiiProfil
