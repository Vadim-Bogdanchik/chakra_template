import Link from 'next/link'
import React from 'react'
import { useEffect, useState } from 'react'
import { MdArrowUpward } from 'react-icons/md'
// RiServiceLine
import { RiServiceLine } from 'react-icons/ri'

import { TbBook, TbTable } from 'react-icons/tb'

const MobileMenu = () => {
	const [menuShow, setMenuShow] = useState(false)

	useEffect(() => {
		const showMenu = () => {
			if (window.scrollY >= 400) {
				setMenuShow(true)
			} else {
				setMenuShow(false)
			}
		}

		window.addEventListener('scroll', showMenu)
	})

	return (
		// Показывать только на мобильном
		<div className='block sm:hidden'>
			{/* Показывать после прокрутки */}
			<div
				className={
					menuShow
						? 'fixed bottom-0 w-full h-[80px] bg-inherit z-[20] duration-500'
						: 'fixed -bottom-[100px] w-full h-[80px] bg-inherit z-[20] duration-500'
				}
			>
				<div className='flex items-top justify-between w-full h-full bg-teal-400 px-10 shadow-2xl pt-3'>
					<div className='flex flex-col items-center'>
						<div className='w-1/4 flex items-center justify-center w-[40px] h-[40px] bg-teal-500 rounded-full text-teal-800'>
							<Link href='#forma-link' scroll={false}>
								<TbTable size={20} />
							</Link>
						</div>

						<span className='text-[12px] text-teal-800 py-1'>Таблица</span>
					</div>
					<div className='flex flex-col items-center'>
						<div className='w-1/4 flex items-center justify-center w-[40px] h-[40px] bg-teal-500 rounded-full text-teal-800'>
							<Link href='#book' scroll={false}>
								<TbBook size={20} />
							</Link>
						</div>

						<span className='text-[12px] text-teal-800 py-1'>Книги</span>
					</div>
					<div className='flex flex-col items-center'>
						<div className='w-1/4 flex items-center justify-center w-[40px] h-[40px] bg-teal-500 rounded-full text-teal-800'>
							<Link href='#services' scroll={false}>
								<RiServiceLine size={20} />
							</Link>
						</div>
						<span className='text-[12px] text-teal-800 py-1'>Услуги</span>
					</div>
					<div className='flex flex-col items-center'>
						<div className='w-1/4 flex items-center justify-center w-[40px] h-[40px] bg-teal-500 rounded-full text-teal-800'>
							<Link href='/'>
								<MdArrowUpward size={20} />
							</Link>
						</div>
						<span className='text-[12px] text-teal-800 py-1'>Вверх</span>
					</div>
				</div>
			</div>
		</div>
	)
}

export default MobileMenu
