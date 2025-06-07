import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import {
	AiOutlineMenu,
	AiOutlineClose,
	AiOutlineInstagram,
	AiOutlineWhatsApp,
} from 'react-icons/ai'
import { TfiClose } from 'react-icons/tfi'
import { BsTelegram } from 'react-icons/bs'
import { SlSocialVkontakte } from 'react-icons/sl'
import Link from 'next/link';
import { Sparkles } from 'lucide-react';

const Navbar = ({ isPolicyPage = false }) => {
	// получим текущий адрес страницы
	const { asPath } = useRouter()

	const [nav, setNav] = useState(false)
	const handleNav = () => {
		setNav(!nav)
	}

	return (
		<header
			className='fixed left-0 top-0 w-full select-none z-[100] bg-black/30 backdrop-blur-sm'
		>
			<div className='mx-auto h-[90px] w-full lg:max-w-7xl'>
				<div className='relative px-5 flex h-full items-center justify-between lg:px-8'>
					{/* ЛОГО */}
					<Link href='/'>
						<div className='flex items-center space-x-2'>
							<div className="flex items-center justify-center w-9 h-9 rounded-lg bg-gradient-to-br from-pink-500 via-purple-500 to-fuchsia-500 p-1.5">
								<Sparkles className="text-white w-full h-full" strokeWidth={1.5} />
							</div>
							<p
								className="uppercase text-xl bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent"
							>
								нумеролог
							</p>
						</div>
					</Link>

					{/* МЕНЮ */}
					<div className='flex w-full items-center justify-center'>
						<nav
							className={
								nav
									? 'left-0 z-199 top-0 w-full h-screen absolute bg-black text-white transition-all lg:static lg:block lg:bg-transparent lg:h-full '
									: '-left-[100%] z-199 top-0 w-full h-screen absolute bg-black text-white transition-all lg:static lg:block lg:bg-transparent lg:h-full '
							}
						>
							<ul className={`flex flex-col h-full gap-5 items-center justify-center lg:flex-row lg:justify-center`}>
  <li onClick={handleNav}>
    <a className="group text-2xl font-medium duration-200 xl:text-base lg:text-[14px] text-white hover:text-pink-500" href='/#top' scroll='false'>Главная</a>
  </li>
  <li onClick={handleNav}>
    <a className="group text-2xl font-medium duration-200 xl:text-base lg:text-[14px] text-white hover:text-pink-500" href='/#about' scroll='false'>Обо мне</a>
  </li>
  <li onClick={handleNav}>
    <a className="group text-2xl font-medium duration-200 xl:text-base lg:text-[14px] text-white hover:text-pink-500" href='/#services' scroll='false'>Услуги</a>
  </li>
  <li onClick={handleNav}>
    <a className="group text-2xl font-medium duration-200 xl:text-base lg:text-[14px] text-white hover:text-pink-500" href='/#new-book-showcase' scroll='false'>Книга</a>
  </li>
  <li onClick={handleNav}>
    <a className="group text-2xl font-medium duration-200 xl:text-base lg:text-[14px] text-white hover:text-pink-500" href='/#course' scroll='false'>Обучение</a>
  </li>
  <li onClick={handleNav}>
    <a className="group text-2xl font-medium duration-200 xl:text-base lg:text-[14px] text-white hover:text-pink-500" href='/#contacts' scroll='false'>Контакты</a>
  </li>
  <li onClick={handleNav}>
    <Link href='https://wa.me/79057444724' target='_blank' scroll={false} legacyBehavior>
      <a>
        <button
          className="text-base font-semibold px-5 py-2 rounded-lg shadow bg-gradient-to-r from-pink-500 via-purple-600 to-fuchsia-600 hover:from-pink-600 hover:via-purple-700 hover:to-fuchsia-700 text-white transition-all duration-150 hover:scale-105 active:scale-95 border-none uppercase"
          style={{ minWidth: 180 }}
          aria-label='Получить консультацию в WhatsApp'
        >
          Получить консультацию
        </button>
      </a>
    </Link>
  </li>
							</ul>
						</nav>
					</div>

					{/* КНОПКИ */}
					<div className='flex'>
						{/* КНОПКА КОНСУЛЬТАЦИИ */}
						{/* <button className='hidden mr-5 text-white lg:ml-4 sm:w-[210px] sm:block relative text-xs border-2 font-medium border-white rounded-md bg-transparent py-2 px-4 uppercase transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-y-0 before:bg-teal-500 before:transition-transform before:duration-300 before:content-[""] before:hover:scale-y-100 lg:text-sm'>
							<Link href='#consultation' scroll={false}>
								Моя консультация
							</Link>
						</button> */}

						{/* КНОПКА МЕНЮ */}
						<button className="lg:hidden text-white">
									{nav ? (
										<TfiClose
											className="text-white absolute top-0 right-0 m-5"
											size={30}
											onClick={handleNav}
										/>
									) : (
										<AiOutlineMenu className="text-white" size={30} onClick={handleNav} />
									)}
								</button>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Navbar
