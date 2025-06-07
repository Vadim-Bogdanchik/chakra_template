import React from 'react'
import { motion } from 'framer-motion'

import TsmlSlider from './TsmlSlider'

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

const SectionTestimonials = () => {
	return (
		<motion.section
			initial='hidden'
			whileInView='visible'
			viewport={{ amount: 0.2, once: true }}
			transition={{ duration: 2 }}
			className='relative flex flex-col items-center justify-start h-fit py-10 lg:py-20 select-non bg-slate-200'
		>
			<a id='testimonials' className='block relative -top-[98px]' />

			<div className=' flex flex-col items-center px-3 md:px-16 lg:max-w-7xl'>
				{/* Заголовок */}
				<div className='mb-10 '>
					<motion.h3
						custom={1}
						variants={textAnimation}
						className='uppercase text-sm text-teal-700 mb-2'
					>
						Отзывы
					</motion.h3>
					<motion.h2
						custom={2}
						variants={textAnimation}
						className='text-[35px] lg:text-[50px]'
					>
						Клиентов
					</motion.h2>
				</div>

				<TsmlSlider />
			</div>
		</motion.section>
	)
}

export default SectionTestimonials
