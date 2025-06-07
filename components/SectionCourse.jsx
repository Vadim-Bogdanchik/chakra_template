import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'

const textAnimation = {
	hidden: {
		y: 100,
		opacity: 0,
	},
	visible: custom => ({
		y: 0,
		opacity: 1,
		transition: { delay: custom * 0.1 },
	}),
}

const SectionCourse = () => {
	return (
		<motion.section
			initial='hidden'
			whileInView='visible'
			viewport={{ amount: 0.2, once: true }}
			transition={{ duration: 1 }}
			className='flex flex-col items-center justify-start relative min-h-[600px] py-10 lg:py-40 select-none bg-white'
		>
			<a id='course' className='relative -top-[98px]' />

			<div className='mx-auto px-8 md:px-16 lg:max-w-7xl'>
				<div className='flex flex-wrap justify-between mt-10'>
					<div className='relative flex z-[4] flex-col items-left justify-center w-full lg:w-9/12'>
						{/* <motion.img
							className='absolute top-[-55px] left-[30px] rotate-1'
							src='/assets/flower2.png'
							alt='footer logo'
							width={100}
							custom={1}
							variants={textAnimation}
						/> */}
						{/* Заголовок */}
						<div className='mb-10'>
							<motion.h3
								custom={1}
								variants={textAnimation}
								className='uppercase text-sm text-teal-500 mb-2'
							>
								Курс
							</motion.h3>
							<motion.h2
								custom={2}
								variants={textAnimation}
								className='text-[35px] lg:text-[50px]'
							>
								Практика ХВД
							</motion.h2>
						</div>
						<div className='w-10/12'>
							<p>
								Если вы прочитали мои книги, и у вас остались вопросы - это
								нормально! Потому что самое главное в работе с системой - это
								опыт.
							</p>
							<p className='mt-2'>
								Книги - это лишь теория, база, на основании которой можно
								изучать систему хвд и чакральной нумерологии. Но можно пойти
								короткой дорогой.
							</p>
							<p className='mt-2'>
								Я предлагаю Вам курс «Практика хвд», он только для тех, кто
								прочитал мои книги.
							</p>
							<p className='mt-2'>
								На курсе мы будем разбирать интересные примеры из моей практики.
								Конкретные примеры!
							</p>
							<p className='mt-2'>
								Я даю дату рождения, краткую биографию, с Вас - описание,
								объяснения.
							</p>
							<p className='mt-2'>
								Вначале работаем вместе, с моими проверками и комментариями.
							</p>
							<p className='mt-2'>
								Это не курс с группой учеников, это индивидуальная работа
								тет-а-тет.
							</p>
						</div>
						<div className='flex flex-wrap w-full'>
							<Link
								className='w-full lg:w-[350px]'
								href='https://wa.me/79057444724'
								scroll={false}
								target='_blank'
							>
								<button className='uppercase duration-500 w-full lg:w-[300px] mt-5 lg:mt-10 border-none font-medium px-5 py-5 bg-teal-300 border border-teal-300 shadow-lg hover:shadow-none hover:bg-teal-400'>
									Записаться на курс
								</button>
							</Link>
							<Link className='w-full lg:w-[150px]' href='#book' scroll={false}>
								<button className='uppercase duration-500 w-full lg:w-[200px] lg:ml-4 lg:w-[150px] mt-5 lg:mt-10 text-teal-500 border border-teal-300 font-medium px-5 py-5 hover:bg-teal-300 hover:text-white'>
									книги
								</button>
							</Link>
						</div>
						<div className='flex flex-col items-center mt-10 lg:items-start'>
							<span className='text-teal-500 font-bold opacity-60'>
								стоимость курса
							</span>
							<span className='text-[30px] sm:text-[50px] font-bold text-gray-700'>
								от 10 000 руб.*
							</span>
							<span className='text-[12px]'>
								* Уточняйте. Стоимость зависит от продолжительности практики и
								числа разборов.
							</span>
						</div>
					</div>
					<div className='flex static z-[0] flex-col items-center justify-start w-full mb-5 lg:w-2/12'>
						<img
							className='absolute top-0 right-0 opacity-[15%] h-full object-cover lg:opacity-100'
							src='/assets/img-course.png'
							alt='курс ХВД обложка раздела'
						/>
					</div>
				</div>
			</div>
		</motion.section>
	)
}

export default SectionCourse
