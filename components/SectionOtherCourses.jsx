import React, { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { TfiClose } from 'react-icons/tfi'
import { TbHandClick } from 'react-icons/tb'

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

const SectionOtherCourses = () => {
	const [showModalCourse1, setShowModalCourse1] = useState(false)
	const [showModalCourse2, setShowModalCourse2] = useState(false)
	const [showModalCourse3, setShowModalCourse3] = useState(false)
	const [showModalCourse4, setShowModalCourse4] = useState(false)

	return (
		<motion.section
			initial='hidden'
			whileInView='visible'
			viewport={{ amount: 0.2, once: true }}
			transition={{ duration: 2 }}
			className='relative flex flex-col items-center justify-start relative min-h-[900px] py-10 lg:py-40 select-non overlay_book bg-fixed bg-repeat bg-center'
		>
			<a id='othercourses' className='block relative -top-[98px]' />

			<div className='flex flex-col items-center mx-auto px-8 md:px-16 lg:max-w-7xl'>
				{/* Заголовок */}
				<div className='relative mb-10 '>
					<motion.h3
						custom={1}
						variants={textAnimation}
						className='uppercase text-sm text-teal-700 mb-2'
					>
						прочие
					</motion.h3>
					<motion.h2
						custom={2}
						variants={textAnimation}
						className='text-[35px] lg:text-[50px]'
					>
						Мои курсы
					</motion.h2>
				</div>

				<div className='flex flex-wrap items-center justify-center sm:justify-between gap-5 w-auto'>
					<div className='relative flex flex-col justify-between h-[450px] w-[250px] course-1 bg-cover bg-center text-gray-900'>
						<div>
							<p className='uppercase font-bold text-[17px] text-center bg-white bg-opacity-50 py-5'>
								Самостоятельный
								<br />
								курс
							</p>
							<p className='text-[35px] text-center py-3 font-bold'>
								50 000 <span className='font-light text-[19px]'>Руб.</span>
							</p>
							<p
								className='animate-pulse uppercase text-center font-medium text-[16px] underline hover:cursor-pointer'
								onClick={() => {
									setShowModalCourse1(true)
								}}
							>
								Описание курса
							</p>
						</div>
						<Link
							className='w-full hover:cursor-pointer p-3'
							href='https://wa.me/79057444724'
							scroll={false}
							target='_blank'
						>
							<button className='uppercase duration-500 w-full mt-5 lg:mt-10 border-none font-medium px-5 py-5 bg-teal-300 border border-teal-300 shadow-lg hover:shadow-none hover:bg-teal-400'>
								Записаться
							</button>
						</Link>
					</div>

					<div className='relative flex flex-col justify-between h-[500px] w-[300px] course-2 bg-cover bg-center text-gray-900'>
						<div>
							<p className='uppercase font-bold text-[17px] text-center bg-white bg-opacity-50 py-5'>
								совместный
								<br />
								курс
							</p>
							<p className='text-[35px] text-center py-3 font-bold'>
								100 000 <span className='font-light text-[19px]'>Руб.</span>
							</p>
							<p
								className='animate-pulse uppercase text-center font-medium text-[16px] underline hover:cursor-pointer'
								onClick={() => {
									setShowModalCourse2(true)
								}}
							>
								Описание курса
							</p>
						</div>
						<Link
							className='w-full hover:cursor-pointer p-3'
							href='https://wa.me/79057444724'
							scroll={false}
							target='_blank'
						>
							<button className='uppercase duration-500 w-full mt-5 lg:mt-10 border-none font-medium px-5 py-5 bg-teal-300 border border-teal-300 shadow-lg hover:shadow-none hover:bg-teal-400'>
								Записаться
							</button>
						</Link>
					</div>

					{/* <div className='relative flex flex-col justify-between h-[450px] w-[250px] course-3 bg-cover bg-center text-gray-900'>
						<div>
							<p className='uppercase font-bold text-[17px] text-center bg-white bg-opacity-50 py-5'>
								курс
								<br />с сопровождением
							</p>
							<p className='text-[35px] text-center py-3 font-bold'>
								33 000 <span className='font-light text-[19px]'>Руб.</span>
							</p>
							<p
								className='animate-pulse uppercase text-center font-medium text-[16px] underline hover:cursor-pointer'
								onClick={() => {
									setShowModalCourse3(true)
								}}
							>
								Описание курса
							</p>
						</div>
						<Link
							className='w-full hover:cursor-pointer p-3'
							href='https://wa.me/79057444724'
							scroll={false}
							target='_blank'
						>
							<button className='uppercase duration-500 w-full mt-5 lg:mt-10 border-none font-medium px-5 py-5 bg-teal-300 border border-teal-300 shadow-lg hover:shadow-none hover:bg-teal-400'>
								Записаться
							</button>
						</Link>
					</div> */}

					<div className='relative flex flex-col justify-between h-[450px] w-[250px] course-4 bg-cover bg-center text-gray-900'>
						<div>
							<p className='uppercase font-bold text-[17px] text-center bg-white bg-opacity-50 py-5'>
								курсы
								<br />
								дополнительные
							</p>
							<p className='text-[35px] text-center py-3 font-bold'>
								80 000 <span className='font-light text-[19px]'>Руб.</span>
							</p>
							<p
								className='animate-pulse uppercase text-center font-medium text-[16px] underline hover:cursor-pointer'
								onClick={() => {
									setShowModalCourse4(true)
								}}
							>
								Описание курсов
							</p>
						</div>
						<Link
							className='w-full hover:cursor-pointer p-3'
							href='https://wa.me/79057444724'
							scroll={false}
							target='_blank'
						>
							<button className='uppercase duration-500 w-full mt-5 lg:mt-10 border-none font-medium px-5 py-5 bg-teal-300 border border-teal-300 shadow-lg hover:shadow-none hover:bg-teal-400'>
								Записаться
							</button>
						</Link>
					</div>
				</div>

				{showModalCourse1 ? (
					<div className='fixed top-0 left-0 flex flxe-col items-center justify-center w-full h-screen z-[105] bg-teal-600 duration-300'>
						<div className='flex flex-col items-start justify-center text-white w-[80%] h-full'>
							<h1 className='font-medium text-2xl leading-6 mt-10'>
								Самостоятельный 🤓
							</h1>
							<p className='mb-5'>
								(Я вам высылаю материал без обратной связи)
							</p>
							<p className='text-[13px]'>
								📍6 часов лекций в виде голосовых файлов + письменный материал+
								методическое пособие «задачи души» + книга «самоучитель по
								чакровой нумерологии» - В лекциях (файлах) я делюсь своими
								наработками по теме:
								<br />
								🌸чакры;
								<br />
								🌸энергия инь/ян;
								<br />
								🌸потенциал хочу/могу и я/мы; <br />
								🌸формулы расчёта ёмкости чакр <br />
								🌸описание типологий; <br />
								🌸расчёт и описание задач по роду/карме/периодам.
							</p>
							<p className='text-[18px] my-3'>Цена курса: 50 000 рублей.</p>
							<Link
								className='w-full lg:w-[250px]'
								href='https://wa.me/79057444724'
								scroll={false}
								target='_blank'
							>
								<button className='uppercase duration-500 w-full lg:w-[250px] mt-5 lg:mt-10 border-none font-medium px-5 py-5 bg-black border border-black shadow-lg hover:shadow-none hover:bg-slate-800'>
									Записаться на курс
								</button>
							</Link>
						</div>

						<TfiClose
							onClick={() => {
								setShowModalCourse1(false)
							}}
							className='absolute top-0 right-0 text-white m-5'
							size={40}
						/>
					</div>
				) : null}
				{showModalCourse2 ? (
					<div className='fixed top-0 left-0 flex flxe-col items-center justify-center w-full h-screen z-[105] bg-teal-500 duration-300'>
						<div className='flex flex-col items-start justify-center text-white w-[80%] h-full'>
							<h1 className='font-medium text-2xl leading-6 mt-10'>
								Совместный🤓🤗
							</h1>
							<p className='mb-5'>
								(Полное ведение вас по ходу обучения. Индивидуальная работа с
								каждой ученицей/учеником. Время обучения не ограничено)
							</p>

							<p className='text-[13px]'>
								📍6 часов лекций в виде голосовых файлов + письменный материал.
								<br />
								- В лекциях (файлах) я делюсь своими наработками по теме:
								<br />
								🌸чакры;
								<br />
								🌸энергия инь/ян;
								<br />
								🌸потенциал хочу/могу и я/мы;
								<br />
								🌸формулы расчёта ёмкости чакр;
								<br />
								🌸описание типологий;
								<br />
								🌸расчёт и описание задач по роду/карме/периодам;
								<br />
								🙌🏻Моя задача научить вас работать самостоятельно, «видеть»
								цифры, настроить на эгрегор нумерологии.
								<br />+ Домашнее задание (примеры из моей практики:
								мужчина/женщина/ребёнок/пара) с моей проверкой и
								комментариями☝🏻🧐.
								<br />+ Возможность рассчитать двух своих близких/знакомых под
								мою проверку.
							</p>
							<p className='text-[18px] my-3'>Цена курса: 100 000 рублей.</p>
							<Link
								className='w-full lg:w-[250px]'
								href='https://wa.me/79057444724'
								scroll={false}
								target='_blank'
							>
								<button className='uppercase duration-500 w-full lg:w-[250px] mt-5 lg:mt-10 border-none font-medium px-5 py-5 bg-black border border-black shadow-lg hover:shadow-none hover:bg-slate-800'>
									Записаться на курс
								</button>
							</Link>
						</div>

						<TfiClose
							onClick={() => {
								setShowModalCourse2(false)
							}}
							className='absolute top-0 right-0 text-white m-5'
							size={40}
						/>
					</div>
				) : null}
				{showModalCourse3 ? (
					<div className='fixed top-0 left-0 flex flxe-col items-center justify-center w-full h-screen z-[105] bg-teal-500 duration-300'>
						<div className='flex flex-col items-start justify-center text-white w-[80%] h-full'>
							<h1 className='font-thin text-2xl leading-6 my-10'>
								Обучение с сопровождением 🤓
							</h1>
							<p className='text-[13px]'>
								В этот блок входит всё, что описано в блоке «совместный» + После
								окончания обучения вы можете ко мне обращаться, советоваться,
								консультироваться по любым вопросам.
							</p>
							<p className='text-[18px] my-3'>Цена курса: 33 000 рублей.</p>
						</div>

						<TfiClose
							onClick={() => {
								setShowModalCourse3(false)
							}}
							className='absolute top-0 right-0 text-white m-5'
							size={40}
						/>
					</div>
				) : null}
				{showModalCourse4 ? (
					<div className='fixed top-0 left-0 flex flxe-col items-center justify-center w-full h-screen z-[105] bg-teal-500 duration-300'>
						<div className='flex flex-col items-start justify-center text-white w-[80%] h-full'>
							<h1 className='font-thin text-2xl leading-6 my-10'>
								Дополнительное обучение 🤓
							</h1>
							<p className='text-[13px]'>
								Курс «Дополнительное обучение» Для тех, кто проходил обучение,
								но остались вопросы, или для тех, кто изучает систему
								самостоятельно. Уроки подбираются индивидуально под ваш запрос.
								Сначала я даю практический материал, но основной уклон идёт на
								практику. Обучение индивидуальное.
							</p>
							<p className='text-[18px] my-3'>Цена 80 000 Руб.</p>
						</div>

						<TfiClose
							onClick={() => {
								setShowModalCourse4(false)
							}}
							className='absolute top-0 right-0 text-white m-5'
							size={40}
						/>
					</div>
				) : null}
			</div>
		</motion.section>
	)
}

export default SectionOtherCourses
