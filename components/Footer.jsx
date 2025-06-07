// import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

// иконки
import { AiOutlineInstagram, AiOutlineWhatsApp } from 'react-icons/ai'
import { BsTelegram } from 'react-icons/bs'
import { SlSocialVkontakte } from 'react-icons/sl'

// импорты проекта

const Footer = () => {
	return (
		<section className='flex flex-col md:items-start md:flex-row items-center justify-between min-h-[370px] bg-[#2b7a78] select-none mb-[80px] sm:mb-0'>
			<div className='flex flex-col items-center flex-1 h-full w-full sm:w-1/3'>
				<div className='mt-10 mb-10'>
					<Link href='#top'>
						<img
							className='w-[160px] sm:w-[130px]'
							src='/assets/logo6.png'
							alt='footer logo'
						/>
					</Link>
				</div>
				<div>
					<p className='py-3 text-white font-semibold'>Мои соцсети:</p>
				</div>
				<div className='flex items-center justify-center gap-6 w-full'>
					<div className='flex items-center gap-2 text-white'>
						<Link href='https://wa.me/79057444724' target='blank'>
							<AiOutlineWhatsApp className='hover:text-teal-500' size={30} />
						</Link>
						<Link href='https://t.me/ezo_insight' target='blank'>
							<BsTelegram className='hover:text-teal-500' size={26} />
						</Link>
						<Link href='https://vk.com/club211281505' target='blank'>
							<SlSocialVkontakte className='hover:text-teal-500' size={28} />
						</Link>
					</div>
				</div>
				<span className='my-7 mx-10 text-[14px] text-center text-white'>
					Разобраться в себе, реализоваться, изменить свою жизнь, обрести
					счастье
				</span>
			</div>

			<div className='flex flex-col flex-1 h-full my-10 px-5 w-full sm:w-1/3'>
				<span className='text-white font-bold text-[20px] mb-10'>
					Быстрые ссылки
				</span>
				<ul className='flex flex-col gap-2 text-white'>
					<li className='duration-200 hover:text-teal-500'>
						<Link href='/#lastposts' scroll={false}>
							Статьи
						</Link>
					</li>
					<li className='duration-200 hover:text-teal-500'>
						<Link href='/#book' scroll={false}>
							Книги
						</Link>
					</li>
					<li className='duration-200 hover:text-teal-500'>
						<Link href='/policy' scroll={false}>
							Пользовательское соглашение
						</Link>
					</li>
					<li className='duration-200 hover:text-teal-500'>
						<Link href='/' scroll={false}>
							"Чакры и характер, или Как жить в ресурсе"
						</Link>
					</li>
					<li className='duration-200 hover:text-teal-500'>
						<Link href='/razbor-andzheliny-dzholi' scroll={false}>
							Разбор Анджелины Джоли
						</Link>
					</li>
					<li className='duration-200 hover:text-teal-500'>
						<Link href='/razbor-freddi-merk-yuri' scroll={false}>
							Разбор Фредди Меркьюри
						</Link>
					</li>
					<li className='duration-200 hover:text-teal-500'>
						<Link href='/razbor-minoeko-ivasak' scroll={false}>
							Разбор Миноэко Ивасак
						</Link>
					</li>
				</ul>
			</div>

			<div className='flex flex-col flex-1 h-full my-10 px-5 w-full sm:w-1/3'>
				<span className='text-white font-bold text-[20px] mb-10'>Услуги</span>
				<ul className='flex flex-col gap-2 text-white'>
					<li className='duration-200 hover:text-teal-500'>
						<Link href='/#course' scroll={false}>
							Практика ХВД
						</Link>
					</li>
					<li className='duration-200 hover:text-teal-500'>
						<Link href='/diagnostika-problemnoi-zony' scroll={false}>
							Диагностика проблемной зоны
						</Link>
					</li>
					<li className='duration-200 hover:text-teal-500'>
						<Link href='/vrozhdennyi-potencialenergoresurs' scroll={false}>
							Чакроанализ
						</Link>
					</li>
					<li className='duration-200 hover:text-teal-500'>
						<Link href='/polnyi-psikhologicheskii-profil' scroll={false}>
							Полный психологический профиль
						</Link>
					</li>
					<li className='duration-200 hover:text-teal-500'>
						<Link href='/proforientacia-dlya-podrostkov' scroll={false}>
							Профориентация для подростков
						</Link>
					</li>
					<li className='duration-200 hover:text-teal-500'>
						<Link href='/zadachi-dushi' scroll={false}>
							Задачи души
						</Link>
					</li>
					<li className='duration-200 hover:text-teal-500'>
						<Link href='/#othercourses' scroll={false}>
							Курс Дополнительное обучение
						</Link>
					</li>
				</ul>
			</div>
		</section>
	)
}

export default Footer
