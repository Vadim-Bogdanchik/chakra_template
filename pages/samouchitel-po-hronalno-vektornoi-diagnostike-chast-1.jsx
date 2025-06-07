import React from 'react'
import Link from 'next/link'
import Head from 'next/head';
import { FaTelegramPlane } from 'react-icons/fa';

const book1 = () => {
	return (
		<>
			<Head>
				<title>
					Хронально векторная диагностика нумерология - скачать книги и
					самоучитель - Ольга Бекенева
				</title>
				<meta
					name='description'
					content='Самоучитель Ольги Бекеневой по хронально векторной диагностике - посмотреть содержание и скачать книги.'
				/>
			</Head>
			<div className='flex flex-col items-center select-none'>
				<img
					className='w-full h-[600px] object-cover hidden sm:block'
					src='\assets\book-descr-bg.jpg'
					alt='Всё это про одну систему'
				/>
				<img
					className='w-full h-[300px] object-cover block sm:hidden'
					src='\assets\book-descr-bg.jpg'
					alt='Всё это про одну систему'
				/>
				<div className='flex flex-col sm:flex-row items-start justify-center w-[80%] sm:w-[70%] pb-5 sm:pb-10 py-10'>
					<div className='w-full sm:w-[70%] p-5'>
						<h1 className='my-3 text-xl sm:text-3xl'>
							Самоучитель по хронально-векторной диагностике.
						</h1>
						<p className='mt-5 text-justify'>
							Ваша дата рождения — это ключ к пониманию кармических задач,
							потенциала и возможных испытаний в этой жизни. Самоучитель по
							хронально-векторной диагностике позволит расшифровать эти коды
							через числа, раскрывая энергетический баланс чакр и их влияние на
							вашу судьбу.
						</p>
						<p className='mt-5 text-justify'>В этой книге вы научитесь:</p>
						<ul className='mt-5 list-disc list-inside'>
							<li>
								Рассчитывать ёмкость чакр (в процентах) и понимать, что означают
								эти значения.
							</li>
							<li>
								Определять свои сильные и слабые стороны, чтобы осознанно
								развиваться.
							</li>
							<li>
								Гармонизировать энергии, усиливая то, что дано от рождения, и
								прорабатывая зоны роста.
							</li>
						</ul>
						<p className='mt-5 text-justify'>
							Развитие — это путь к лучшей версии себя. Но чтобы идти по нему
							осознанно, важно знать:
						</p>
						<ul className='mt-5 list-disc list-inside'>
							<li>Какими энергиями вы обладаете от рождения?</li>
							<li>Где возможны кармические уроки и как их пройти?</li>
							<li>Как использовать свои врождённые таланты?</li>
						</ul>
						<p className='mt-5 text-justify'>
							Я провела сотни консультаций, подтвердив теорию на практике. Эта
							книга — результат многолетнего опыта, который поможет вам не
							просто понять свою природу, но и научиться с ней работать.
						</p>
						<p className='mt-5 text-justify font-medium text-xl'>
							О чём эта книга?
						</p>
						<p className='mt-5 text-justify'>
							Часть 1 — основы чакральной нумерологии, расчёт энергетического
							потенциала.
						</p>
						<p className='mt-5 text-justify'>
							Часть 2 — типологии личности (от 1 до 9) и кармические задачи (от
							0/1 до 9/9).
						</p>
						<p className='mt-5 text-justify'>
							Книга по хронально векторной диагностике создана для тех, кто
							хочет самостоятельно освоить{' '}
							<a href='https://chakra-numerolog.ru' className='text-blue-500'>ХВД</a>, но теория — лишь
							начало. Главное — практика! Если после прочтения у вас останутся
							вопросы — это нормально. Система раскрывается через опыт, анализ и
							глубокую работу с собой.
						</p>
						<p className='mt-5 text-justify'>
							Хотите ускорить свой рост? Можно идти долгим путём проб и
							ошибок... или выбрать короткую дорогу — с проверенными знаниями и
							чёткими инструментами.
						</p>
						<p className='mt-5 text-justify'>
							Готовы раскрыть свой кармический код?
						</p>
						<Link
							className='w-full lg:w-[250px]'
							href='https://t.me/Chakra_numerologbot'
							scroll={false}
							target='_blank'
						>
							<button className='text-base font-semibold px-5 py-2 rounded-lg shadow bg-gradient-to-r from-teal-400 via-cyan-400 to-teal-600 hover:from-teal-500 hover:via-cyan-500 hover:to-teal-700 text-white w-full lg:w-auto mt-5 lg:mt-10 flex items-center justify-center gap-2'>
								<FaTelegramPlane className='w-5 h-5' />
								Купить книгу в Телеграмм
							</button>
						</Link>
					</div>
				</div>
			</div>
		</>
	)
}

export default book1
