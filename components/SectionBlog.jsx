import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

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

const SectionBlog = () => {
	return (
		<motion.section
			initial='hidden'
			whileInView='visible'
			viewport={{ amount: 0.2, once: true }}
			transition={{ duration: 2 }}
			className='relative flex flex-col items-center justify-start relative h-fit py-10 lg:py-20 select-non overlay_book bg-fixed bg-center'
		>
			<a id='lastposts' className='block relative -top-[98px]' />

			<div className=' flex flex-col items-center mx-auto px-8 md:px-16 lg:max-w-7xl'>
				{/* Заголовок */}
				<div className='mb-10 '>
					<motion.h3
						custom={1}
						variants={textAnimation}
						className='uppercase text-sm text-teal-700 mb-2'
					>
						читайте
					</motion.h3>
					<motion.h2
						custom={2}
						variants={textAnimation}
						className='text-[35px] lg:text-[50px]'
					>
						Мой блог
					</motion.h2>
				</div>
			</div>
			<div className='flex flex-col sm:flex-row items-center justify-center w-[80%] sm:w-[50%] h-fit gap-10'>
				<div className='w-full h-full bg-white pb-5'>
					<img
						className='w-full'
						src='/assets/bg-post-1mini.jpg'
						alt='обложка статья 1'
					/>
					<div className='p-2'>
						<p className='font-medium text-[16px]'>Всё это про одну систему</p>
						<p className='font-light text-[14px] mb-3 text-[12px]'>
							<span>Дата:</span> 12.03.2022
						</p>
						<p className='text-[12px]'>
							ХВД, хронально-векторная диагностика, чакральная
							нумерология,чакровая нумерология, расчет...
						</p>
					</div>
					<Link
						className='w-full flex items-center justify-center my-2'
						href='https://chakra-numerolog.ru/stat-ya-1.html'
					>
						<button className='uppercase w-[80%] py-3 bg-teal-300 border border-teal-300 shadow-lg hover:shadow-none hover:bg-teal-400'>
							читать
						</button>
					</Link>
				</div>
				<div className='w-full h-full bg-white  pb-5'>
					<img
						className='w-full'
						src='/assets/bg-post-2mini.jpg'
						alt='обложка статья 2'
					/>
					<div className='p-2'>
						<p className='font-medium text-[16px]'>Нумеролог</p>
						<p className='font-light text-[14px] mb-3 text-[12px]'>
							<span>Дата:</span> 20.07.2022
						</p>
						<p className='text-[12px]'>
							У человека, который решил заняться работой с цифрами, должны быть
							хорошо развиты специфические качества...
						</p>
					</div>

					<Link
						className='w-full flex items-center justify-center my-2'
						href='https://chakra-numerolog.ru/stat-ya-2.html'
					>
						<button className='uppercase w-[80%] py-3 bg-teal-300 border border-teal-300 shadow-lg hover:shadow-none hover:bg-teal-400'>
							читать
						</button>
					</Link>
				</div>
			</div>
		</motion.section>
	)
}

export default SectionBlog
