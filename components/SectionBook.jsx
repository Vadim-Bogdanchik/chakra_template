import Link from 'next/link'
import React, { useState } from 'react'
import { TfiClose } from 'react-icons/tfi'
import { FaStar, FaStarHalfAlt } from 'react-icons/fa'
import { motion } from 'framer-motion'
// import SectionErrBook from './SectionErrBook'

import book1testimonials from '../consts/book1Testimonials'
import book2testimonials from '../consts/book2Testimonials'

const textAnimation = {
	hidden: {
		y: 100,
		opacity: 0,
	},
	visible: custom => ({
		y: 0,
		opacity: 1,
		transition: { delay: custom * 0.2 },
	}),
}

const SectionBook = () => {
	const [showModalBook1, setShowModalBook1] = useState(false)
	const [showModalBook2, setShowModalBook2] = useState(false)
	// const [showModalBookDesc1, setShowModalBookDesc1] = useState(false)
	// const [showModalBookDesc2, setShowModalBookDesc2] = useState(false)

	const [tmlsBook1, setTmlsBook1] = useState(false)
	const [tmlsBook2, setTmlsBook2] = useState(false)

	return (
		<motion.section
			initial='hidden'
			whileInView='visible'
			viewport={{ amount: 0.2, once: true }}
			transition={{ duration: 2 }}
			className='relative flex flex-col items-center justify-start relative min-h-[600px] py-10 lg:py-40 select-non overlay_book bg-fixed bg-center'
		>
			<a id='book' className='block relative -top-[98px]' />

			<div className=' flex flex-col items-center mx-auto px-8 md:px-16 lg:max-w-7xl'>
				{/* Заголовок */}
				<div className='relative mb-10 '>
					<motion.h3
						custom={1}
						variants={textAnimation}
						className='uppercase text-sm text-teal-700 mb-2'
					>
						моя
					</motion.h3>
					<motion.h2
						custom={2}
						variants={textAnimation}
						className='text-[35px] lg:text-[50px]'
					>
						Книга
					</motion.h2>
				</div>
			</div>

			{/* ****************************************** ДЕСКТОПНАЯ ВЕРСИЯ ВЕРСИЯ ******************************* */}
			<div className='hidden sm:block'>
				<div className='flex flex-row items-center'>
					<div className='flex flex-col items-center w-[600px]'>
						<img
							className='mx-1 px-10'
							src='/assets/book111.png'
							alt='обложка книга 1'
							width={400}
						/>
						<div
							onClick={() => {
								setTmlsBook1(true)
							}}
							className='flex gap-2 items-center cursor-pointer  my-[10px]'
						>
							<div className='flex items-center text-yellow-400 gap-1 text-[19px]'>
								<div>
									<FaStar />
								</div>
								<div>
									<FaStar />
								</div>
								<div>
									<FaStar />
								</div>
								<div>
									<FaStar />
								</div>
								<div>
									<FaStarHalfAlt />
								</div>
							</div>
							<div>
								<span>Отзывы</span>
							</div>
						</div>
						<div>
							<p>
								<span className='text-3xl'>477</span> Руб.
							</p>
						</div>
						<div className='flex items-center gap-5 justify-between mt-10 w-[80%]'>
							<Link
								href='https://chakra-numerolog.ru/samouchitel-po-hronalno-vektornoi-diagnostike-chast-1.html'
								target='_blank'
							>
								<button
									// onClick={() => {
									// 	setShowModalBookDesc1(true)
									// }}
									className='uppercase w-[250px] py-2 bg-teal-300 border border-teal-300 shadow-lg hover:shadow-none hover:bg-teal-400'
								>
									содержание
								</button>
							</Link>
							<Link
								href='https://wa.me/79057444724'
								scroll={false}
								target='_blank'
							>
								<button className='uppercase w-[250px] py-2 bg-teal-300 border border-teal-300 shadow-lg hover:shadow-none hover:bg-teal-400'>
									Заказать
								</button>
							</Link>
						</div>
					</div>
					{/* <div className='flex flex-col items-center w-[600px]'>
						<img
							className='mx-1 px-10'
							src='/assets/book222.png'
							alt='обложка книга 2'
							width={400}
						/>
						<div
							onClick={() => {
								setTmlsBook2(true)
							}}
							className='flex gap-2 items-center cursor-pointer my-[10px]'
						>
							<div className='flex items-center gap-1 text-yellow-400 text-[19px]'>
								<div>
									<FaStar />
								</div>
								<div>
									<FaStar />
								</div>
								<div>
									<FaStar />
								</div>
								<div>
									<FaStar />
								</div>
								<div>
									<FaStar />
								</div>
							</div>
							<div>
								<span>Отзывы</span>
							</div>
						</div>
						<div>
							<p>
								<span className='text-3xl'>980</span> Руб.
							</p>
						</div>
						<div className='flex items-center gap-5 justify-between mt-10 w-[80%]'>
							<Link
								href='https://chakra-numerolog.ru/samouchitel-po-hronalno-vektornoi-diagnostike-chast-2.html'
								target='_blank'
							>
								<button
									// onClick={() => {
									// 	setShowModalBookDesc1(true)
									// }}
									className='uppercase w-[250px] py-2 bg-teal-300 border border-teal-300 shadow-lg hover:shadow-none hover:bg-teal-400'
								>
									содержание
								</button>
							</Link>
							<Link
								className=''
								href='https://wa.me/79057444724'
								scroll={false}
								target='_blank'
							>
								<button className='uppercase w-[250px] py-2 bg-teal-300 border border-teal-300 shadow-lg hover:shadow-none hover:bg-teal-400'>
									Заказать
								</button>
							</Link>
						</div>
					</div> */}
				</div>
				{/* ********* МОБИЛЬНАЯ ВЕРСИЯ ДЛЯ ДЕСКТОПА ************* */}
				{/* <div className='fixed left-0 bottom-[-500px] bg-teal-500 w-full h-[400px] z-[105] duration-300'>
					<TfiClose
						onClick={() => {
							setShowModalBookDesc1(false)
						}}
						className='absolute top-0 right-0 text-white m-5 hover:cursor-pointer'
						size={40}
					/>
					<div className='flex flex-col text-white w-full h-full px-20 pt-20'>
						<h3 className='font-thin text-3xl leading-7'>
							Самоучитель по хронально-векторной диагностике.
						</h3>
						<h3 className='text-3xl'>Часть 1</h3>
						<span className='text-2xl mb-5'>Описание книги</span>
						<span className='text-[13px] overflow-scroll'>
							В дате рождения заложена информация о карме, то есть о
							возможностях и жизненных рисках человека в этом воплощении. Все
							это можно увидеть через цифры, по методу хронально-векторной
							диагностики. В книге вы узнаете, как рассчитываются ёмкости чакр
							человека (в процентах), и получите интерпретацию этих значений.
							Цель книги - показать сильные и слабые стороны человека, его
							врождённый потенциал, чтобы направить его двигаться, развиваться,
							расти. Ведь развитие состоит в том, чтобы стать лучшей версией
							себя, а для этого полезно знать, каким ты пришел в этот мир и
							главное, что с этим делать, как гармонизировать сильные энергии и
							развивать слабые. Автор книги рассчитала множество людей по данной
							системе и провела сотни консультаций с клиентами, получая обширную
							обратную связь, что позволило проверить и подтвердить теорию
							чакровой нумерологии на практике, а также уточнить множество
							важных практических моментов.
						</span>
					</div>
				</div> */}
				{/* <div className='fixed left-0 bottom-[-500px] bg-teal-500 w-full h-[500px] z-[105] duration-300'>
					<TfiClose
						onClick={() => {
							setShowModalBookDesc2(false)
						}}
						className='absolute top-0 right-0 text-white m-5 hover:cursor-pointer'
						size={40}
					/>
					<div className='flex flex-col text-white w-full h-full px-20 pt-20'>
						<h3 className='font-thin text-3xl leading-7'>
							Самоучитель по хронально-векторной диагностике.
						</h3>
						<h3 className='text-3xl'>Часть 2</h3>
						<h4 className='mb-10 text-[14px] leading-7 font-normal'>
							(Типологии личности и кармические задачи души)
						</h4>
						<span className='text-2xl mb-5'>Описание книги</span>
						<span className='text-[13px]'>
							Данная книга рассчитана на тех, кто самостоятельно изучает систему
							хронально-векторной диагностики. Первая часть была посвящена
							чакрам и расчету врожденного энергетического потенциала. Во второй
							части речь идет о типологиях и кармических задачах. В книге вы
							найдете описание от первой до девятой типологии и интерпретации
							кармических задач от 0/1 до 9/9.
						</span>
					</div>
				</div> */}
			</div>
			{/* Всплывающие окна ОТЗЫВЫ */}
			{tmlsBook1 ? (
				<div className='fixed top-0 left-0 flex flxe-col items-center justify-center w-full h-screen z-[105] bg-teal-500 duration-300'>
					<div className='relative flex flex-col items-start justify-start text-white w-[85%] bg-[#def2f1] h-[calc(100%_-_140px)]'>
						<div className='modal-content text-black overflow-scroll'>
							{book1testimonials.map(t => (
								<div key={t.id} className='p-5 flex flex-col'>
									<span className='font-[600]'>{t.name}</span>
									<span className='text-[12px]'>{t.date}</span>
									<span className='text-[12px]'>{t.rating}</span>
									<p className='mt-[10px] text-[14px]'>{t.text}</p>
								</div>
							))}
						</div>
					</div>

					<TfiClose
						onClick={() => {
							setTmlsBook1(false)
						}}
						className='absolute top-0 right-0 text-white m-5'
						size={40}
					/>
				</div>
			) : null}
			{tmlsBook2 ? (
				<div className='fixed top-0 left-0 flex flxe-col items-center justify-center w-full h-screen z-[105] bg-teal-500 duration-300'>
					<div className='relative flex flex-col items-start justify-start text-white w-[80%] h-full bg-[#def2f1] h-[calc(100%_-_140px)]'>
						<div className='modal-content text-black overflow-scroll'>
							{book2testimonials.map(t => (
								<div key={t.id} className='p-5 flex flex-col'>
									<span className='font-[600]'>{t.name}</span>
									<span className='text-[12px]'>{t.date}</span>
									<span className='text-[12px]'>{t.rating}</span>
									<p className='mt-[10px] text-[14px]'>{t.text}</p>
								</div>
							))}
						</div>
					</div>

					<TfiClose
						onClick={() => {
							setTmlsBook2(false)
						}}
						className='absolute top-0 right-0 text-white m-5'
						size={40}
					/>
				</div>
			) : null}
			{/* ****************************************** МОБИЛЬНАЯ ВЕРСИЯ ******************************* */}
			<div className='block sm:hidden'>
				{/* Книга 1 */}
				<div className='flex flex-col items-center justify-center w-full my-5'>
					<img
						className='mx-1 px-10'
						src='/assets/book111.png'
						alt='обложка книга 1'
						width={800}
					/>

					<div
						onClick={() => {
							setTmlsBook1(true)
						}}
						className='flex gap-2 items-center cursor-pointer  my-[10px]'
					>
						<div className='flex items-center text-yellow-400 gap-1 text-[19px]'>
							<div>
								<FaStar />
							</div>
							<div>
								<FaStar />
							</div>
							<div>
								<FaStar />
							</div>
							<div>
								<FaStar />
							</div>
							<div>
								<FaStarHalfAlt />
							</div>
						</div>
						<div>
							<span>Отзывы</span>
							<span className='animate-pulse text-[20px]'> 👈🏻</span>
						</div>
					</div>
					<div>
						<p>
							<span className='text-3xl'>477</span> Руб.
						</p>
					</div>
					<div className='flex items-center gap-5 justify-center w-full my-5 px-5'>
						<Link
							href='https://chakra-numerolog.ru/samouchitel-po-hronalno-vektornoi-diagnostike-chast-1.html'
							target='_blank'
						>
							<button className='text-[15px] uppercase w-[150px] py-2 bg-teal-300 border border-teal-300 shadow-lg hover:shadow-none hover:bg-teal-400'>
								содержание
							</button>
						</Link>

						<Link
							href='https://wa.me/79057444724'
							scroll={false}
							target='_blank'
						>
							<button className='text-[15px] uppercase w-[150px] py-2 bg-teal-300 border border-teal-300 shadow-lg hover:shadow-none hover:bg-teal-400'>
								Заказать
							</button>
						</Link>
					</div>
				</div>
				{/* <div className='flex flex-col items-center justify-center w-full my-5'>
					<img
						className='mx-1 px-10'
						src='/assets/book222.png'
						alt='обложка книга 1'
						width={800}
					/>
					<div
						onClick={() => {
							setTmlsBook2(true)
						}}
						className='flex gap-2 items-center cursor-pointer  my-[10px]'
					>
						<div className='flex items-center text-yellow-400 gap-1 text-[19px]'>
							<div>
								<FaStar />
							</div>
							<div>
								<FaStar />
							</div>
							<div>
								<FaStar />
							</div>
							<div>
								<FaStar />
							</div>
							<div>
								<FaStar />
							</div>
						</div>
						<div>
							<span>Отзывы</span>
							<span className='animate-pulse text-[20px]'> 👈🏻</span>
						</div>
					</div>
					<div>
						<p>
							<span className='text-3xl'>980</span> Руб.
						</p>
					</div>
					<div className='flex items-center gap-5 justify-center w-full my-5 px-5'>
						<Link
							href='https://chakra-numerolog.ru/samouchitel-po-hronalno-vektornoi-diagnostike-chast-2.html'
							target='_blank'
						>
							<button className='uppercase w-[150px] py-2 bg-teal-300 border border-teal-300 shadow-lg hover:shadow-none hover:bg-teal-400'>
								содержание
							</button>
						</Link>

						<Link
							href='https://wa.me/79057444724'
							scroll={false}
							target='_blank'
						>
							<button className='uppercase w-[150px] py-2 bg-teal-300 border border-teal-300 shadow-lg hover:shadow-none hover:bg-teal-400'>
								Заказать
							</button>
						</Link>
					</div>
				</div> */}

				{/* Всплывающие окна МОБИЛЬНАЯ */}
				{/* {showModalBook1 ? (
					<div className='fixed top-0 left-0 flex flxe-col items-center justify-center w-full h-screen z-[105] bg-teal-500 duration-300'>
						<div className='flex flex-col items-start justify-center text-white w-[80%] h-full'>
							<h3 className='font-thin text-2xl leading-6 mt-10'>
								Самоучитель по хронально-векторной диагностике.
							</h3>
							<h3 className='mb-5 text-xl'>Часть 1</h3>
							<span className='text-xl mb-2'>Описание книги</span>
							<p className='text-[13px]'>
								В дате рождения заложена информация о карме, то есть о
								возможностях и жизненных рисках человека в этом воплощении. Все
								это можно увидеть через цифры, по методу хронально-векторной
								диагностики. В книге вы узнаете, как рассчитываются ёмкости чакр
								человека (в процентах), и получите интерпретацию этих значений.
								Цель книги - показать сильные и слабые стороны человека, его
								врождённый потенциал, чтобы направить его двигаться,
								развиваться, расти. Ведь развитие состоит в том, чтобы стать
								лучшей версией себя, а для этого полезно знать, каким ты пришел
								в этот мир и главное, что с этим делать, как гармонизировать
								сильные энергии и развивать слабые. Автор книги рассчитала
								множество людей по данной системе и провела сотни консультаций с
								клиентами, получая обширную обратную связь, что позволило
								проверить и подтвердить теорию чакровой нумерологии на практике,
								а также уточнить множество важных практических моментов.
							</p>
						</div>

						<TfiClose
							onClick={() => {
								setShowModalBook1(false)
							}}
							className='absolute top-0 right-0 text-white m-5'
							size={40}
						/>
					</div>
				) : null} */}
				{showModalBook2 ? (
					<div className='fixed top-0 left-0 flex flxe-col items-center justify-center w-full h-screen z-[105] bg-teal-500'>
						<div className='flex flex-col items-start justify-center text-white w-[80%] h-full'>
							{/* <h3 className='font-thin text-2xl leading-6'>
								Самоучитель по хронально-векторной диагностике.
							</h3>
							<h3 className='text-xl'>Часть 2</h3>
							<h4 className='mb-10 text-[14px] leading-7 font-normal'>
								(Типологии личности и кармические задачи души)
							</h4> */}
							<span className='text-xl mb-2'>Описание книги</span>
							<p className='text-[13px]'>
								Данная книга рассчитана на тех, кто самостоятельно изучает
								систему хронально-векторной диагностики. Первая часть была
								посвящена чакрам и расчету врожденного энергетического
								потенциала. Во второй части речь идет о типологиях и кармических
								задачах. В книге вы найдете описание от первой до девятой
								типологии и интерпретации кармических задач от 0/1 до 9/9.
							</p>
						</div>

						<TfiClose
							onClick={() => {
								setShowModalBook2(false)
							}}
							className='absolute top-0 right-0 text-white m-5'
							size={40}
						/>
					</div>
				) : null}
			</div>
			{/* --- Блок уведомления об ошибке в книге --- */}
			{/* <div className="w-full flex justify-center mt-8">
				<SectionErrBook />
			</div> */}
		</motion.section>
	)
}

export default SectionBook
