import React from 'react'
import { motion } from 'framer-motion'
import { AiOutlineMail, AiOutlineWhatsApp } from 'react-icons/ai'
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

const SectionContacts = () => {
	return (
		<motion.section
			initial='hidden'
			whileInView='visible'
			viewport={{ amount: 0.2, once: true }}
			transition={{ duration: 2 }}
			className='relative flex flex-col items-center justify-start relative h-fit py-16 lg:py-20 select-non bg-[#def2f1]'
		>
			<a id='contacts' className='block relative -top-[98px]' />

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
						Контакты
					</motion.h2>
				</div>
			</div>

			<div className=' flex items-center justify-center w-[70%] sm:w-[45%] gap-3'>
				<div className='flex flex-col gap-5 justify-center'>
					<div>
						<AiOutlineMail className='text-[30px] sm:text-[40px] text-teal-900 ' />
					</div>
					<div>
						<AiOutlineWhatsApp className='text-[30px] sm:text-[40px] text-teal-900 ' />
					</div>
				</div>

				<div className='flex flex-col justify-center gap-5'>
					<div>
						<Link
							className='w-full'
							href='mailto:hello@chakra-numerolog.ru'
							target='_blank'
						>
							<span className='text-teal-700 text-[15px] sm:text-[25px]'>
								hello@chakra-numerolog.ru
							</span>
						</Link>
					</div>
					<div>
						<Link
							className='w-full'
							href='https://wa.me/79057444724'
							target='_blank'
						>
							<span className='text-teal-700 text-[15px] sm:text-[25px]'>
								+7 905 744 47 24
							</span>
						</Link>
					</div>
				</div>
			</div>
		</motion.section>
	)
}

export default SectionContacts
