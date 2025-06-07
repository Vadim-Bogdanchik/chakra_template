import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

const ErrBook = () => {
	return (
		<div>
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
					className='w-full h-[200px] object-cover'
					src='/assets/bg-service.jpg'
					alt='Полный психологический профиль'
				/>
				<div className='flex flex-col sm:flex-row items-start justify-center w-[80%] pb-5 sm:pb-10'>
					<div className='w-full p-5'>
						<h3 className='my-3'>Ошибка в печатном издании книги.</h3>
						<span className='my-3 font-medium color-red font-bold text-red-600 text-[15px]'>
							Обратите внимание !!!
						</span>
						<p className='mt-5'>
							Дорогой читатель, в печатном издании моей книги есть опечатка.
							Если вы будете рассчитывать по дате рождения вручную, то обратите
							внимание, что на стр. 22 и стр. 23 есть опечатка/ошибка в контурах
							(фото прилагается).
						</p>
						<p className='mt-5'>
							Стр.21. Маркер 2. Эмоциональный контур: Не правильно: 31-45,
							правильно: 75-27 эгоистичный (лидерск)
						</p>
						<p className='mt-5'>
							Стр. 23. Маркер 18. Интеллектуальный контур: Не правильно: 14-35,
							правильно: 29-41 Также хочу обратить внимание, что электронный
							калькулятор считает без ошибки, и вы смело можете им пользоваться
							для расчёта любой даты рождения.
						</p>
					</div>
				</div>

				<div className='px-5 py-5'>
					<img
						src='/assets/err-book-img1.jpg'
						alt='Ольга Бекенева'
						width={800}
						className='shadow-xl'
					/>
				</div>

				<div className='px-3 py-5'>
					<img
						src='/assets/err-book-img2.jpg'
						alt='Ольга Бекенева'
						width={800}
						className='shadow-xl'
					/>
				</div>
			</div>
		</div>
	)
}

export default ErrBook
