import Link from 'next/link'
import { motion } from 'framer-motion'

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

const SectionAbout = () => {
	return (
		<motion.section
			initial='hidden'
			whileInView='visible'
			viewport={{ amount: 0.2, once: true }}
			transition={{ duration: 2 }}
			className='flex item-center justify-center relative min-h-[600px] py-32 select-none'
		>
			<a id='about' className='relative -top-[98px]' />

			{/* Контент */}
			<div className='mx-auto px-8 md:px-16 lg:max-w-7xl'>
				<div className='flex flex-wrap justify-between'>
					<div className='flex static items-center justify-center w-full lg:w-7/12'>
						<img
							className='absolute top-0 left-0 z-[-1] opacity-10'
							src='/assets/img-ajna.png'
							alt='обложка раздела обо мне'
							width={800}
						/>
						{/* personal-photo */}
						<img
							src='/assets/personal-photo.jpg'
							alt='Ольга Бекенева'
							width={400}
							className='shadow-xl'
						/>
					</div>

					<div className='relative flex flex-col items-left justify-start py-5 px-4 w-full lg:w-4/12 mt-6 sm:mt-0'>
						{/* <img
							className='absolute top-0 sm:top-[-15px] left-[220px] rotate-12'
							src='/assets/flower1.png'
							alt='footer logo'
							width={100}
						/> */}
						<motion.h3
							custom={1}
							variants={textAnimation}
							className='uppercase text-sm text-teal-500 mb-2'
						>
							Ольга
						</motion.h3>
						<motion.h2
							custom={2}
							variants={textAnimation}
							className='text-[35px] sm:text-[50px]'
						>
							Бекенева
						</motion.h2>
						<p className='pt-1 font-medium'>Регрессолог, энерго-терапевт</p>
						<p className='mt-8 font-medium text-[20px]'>
							Я искренне считаю, что в работе с людьми важны именно люди и их
							истории. Я Ольга Бекенёва - практикующий нумеролог. За годы
							практики я собрала тысячи таких историй из обратной связи от своих
							клиентов. Весь свой опыт я собрала в книгах, где вы можете найти
							описание своег
						</p>
						<Link
							className='w-full'
							href='https://wa.me/79057444724'
							target='_blank'
							scroll={false}
						>
							<button className='uppercase duration-500 w-full mt-10 border-none font-medium px-5 py-5 bg-teal-300 shadow-lg hover:shadow-none hover:bg-teal-400'>
								задать вопрос
							</button>
						</Link>
					</div>
				</div>
			</div>
		</motion.section>
	)
}

export default SectionAbout
