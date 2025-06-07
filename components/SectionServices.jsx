import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

import { TbHandClick } from 'react-icons/tb'

const textAnimation = {
	hidden: {
		y: 100,
		opacity: 0,
	},
	visible: (custom) => ({
		y: 0,
		opacity: 1,
		transition: { delay: custom * 0.2 },
	}),
}

const SectionServices = () => {
	return (
		<motion.section
			initial='hidden'
			whileInView='visible'
			viewport={{ amount: 0.2, once: true }}
			transition={{ duration: 2 }}
			className='relative flex flex-col items-center justify-start min-h-[900px] py-10 lg:py-20 select-non'
		>
			<a id='services' className='block relative -top-[98px]' />

			<div className=' flex flex-col items-center mx-auto px-8 md:px-16 lg:max-w-7xl'>
				{/* Заголовок */}
				<div className='mb-10 '>
					<motion.h3
						custom={1}
						variants={textAnimation}
						className='uppercase text-sm text-teal-700 mb-2'
					>
						мои
					</motion.h3>
					<motion.h2
						custom={2}
						variants={textAnimation}
						className='text-[35px] lg:text-[50px]'
					>
						Услуги
					</motion.h2>
				</div>
				<div className='flex flex-wrap items-center justify-center gap-5 sm:gap-10 w-auto'>
					{/* <Link href='https://chakra-numerolog.ru/vrozhdennyi-potencialenergoresurs.html'>
						<div className='flex items-center justify-center h-[350px] w-[250px] service-1 bg-cover bg-center '>
							<div className='flex flex-col items-center justify-between w-[140px] h-[180px] text-teal-900 text-center font-medium'>
								<p className='leading-tight pt-3 text-[13px]'>Чакроанализ</p>
								<img
									className='w-[50px] sm:w-[70px] sm:pb-10 sm:pt-3'
									src='/assets/service-2.png'
									alt='Чакроанализ'
								/>
								<TbHandClick className='block sm:hidden animate-pulse text-[35px] text-orange-600 p-1' />
							</div>
						</div>
					</Link>

					<Link href='https://chakra-numerolog.ru/zadachi-dushi.html'>
						<div className='flex items-center justify-center h-[350px] w-[250px] service-1 bg-cover bg-center '>
							<div className='flex flex-col items-center justify-between w-[140px] h-[180px] text-teal-900 text-center font-medium'>
								<p className='leading-tight pt-3 text-[13px]'>Задачи души</p>
								<img
									className='w-[70px] sm:w-[90px] sm:pb-10'
									src='/assets/service-5.png'
									alt='Задачи души'
								/>
								<TbHandClick className='block sm:hidden animate-pulse text-[35px] text-orange-600 p-1' />
							</div>
						</div>
					</Link> */}

					<Link href='https://chakra-numerolog.ru/polnyi-psikhologicheskii-profil.html'>
						<div className='flex items-center justify-center h-[350px] w-[250px] service-1 bg-cover bg-center '>
							<div className='flex flex-col items-center justify-between w-[140px] h-[180px] text-teal-900 text-center font-medium'>
								<p className='leading-tight pt-1 text-[13px]'>
									Полный психологический профиль
								</p>
								<img
									className='w-[70px] sm:w-[70px] sm:pb-10 sm:pt-3'
									src='/assets/service-8.png'
									alt='Полный психологический профиль'
								/>
								<TbHandClick className='block sm:hidden animate-pulse text-[35px] text-orange-600 p-1' />
							</div>
						</div>
					</Link>
{/* 
					<Link href='https://chakra-numerolog.ru/diagnostika-problemnoi-zony.html'>
						<div className='flex items-center justify-center h-[350px] w-[250px] service-1 bg-cover bg-center '>
							<div className='flex flex-col items-center justify-between w-[140px] h-[180px] text-teal-900 text-center font-medium'>
								<p className='leading-tight pt-1 text-[13px]'>
									Диагностика проблемной зоны
								</p>
								<img
									className='w-[70px] sm:w-[80px] sm:pb-8'
									src='/assets/service-3.png'
									alt='Диагностика проблемной зоны'
								/>
								<TbHandClick className='block sm:hidden animate-pulse text-[35px] text-orange-600 p-1' />
							</div>
						</div>
					</Link> */}

					<Link href='https://chakra-numerolog.ru/proforientacia-dlya-podrostkov.html'>
						<div className='flex items-center justify-center h-[350px] w-[250px] service-1 bg-cover bg-center '>
							<div className='flex flex-col items-center justify-between w-[140px] h-[180px] text-teal-900 text-center font-medium'>
								<p className='leading-tight pt-5 text-[13px]'>Профориентация</p>
								<img
									className='w-[70px] sm:w-[70px] sm:pb-10'
									src='/assets/service-7.png'
									alt='Профориентация'
								/>
								<TbHandClick className='block sm:hidden animate-pulse text-[35px] text-orange-600 p-1' />
							</div>
						</div>
					</Link>

					{/* <Link href='https://chakra-numerolog.ru/diagnostika-sovmestimosti.html'>
						<div className='flex items-center justify-center h-[350px] w-[250px] service-1 bg-cover bg-center '>
							<div className='flex flex-col items-center justify-between w-[140px] h-[180px] text-teal-900 text-center font-medium'>
								<p className='leading-tight pt-4 text-[13px]'>
									Диагностика совместимости
								</p>
								<img
									className='w-[70px] sm:w-[100px] sm:pb-9'
									src='/assets/service-6.png'
									alt='Диагностика совместимости'
								/>
								<TbHandClick className='block sm:hidden animate-pulse text-[35px] text-orange-600 p-1' />
							</div>
						</div>
					</Link> */}
				</div>
			</div>
		</motion.section>
	)
}

export default SectionServices
