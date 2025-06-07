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
import Link from 'next/link'

const Navbar = ({ isPolicyPage = false }) => {
	// получим текущий адрес страницы
	const { asPath } = useRouter()

	const [nav, setNav] = useState(false)
	const [navColor, setNavColor] = useState(
		isPolicyPage ? 'transparent' : (asPath === '/' ? 'transparent' : 'black')
	)
	const [navText, setNavText] = useState(isPolicyPage ? 'black' : 'white')

	const handleNav = () => {
		setNav(!nav)
	}

	useEffect(() => {
		if (isPolicyPage) {
			setNavColor('transparent');
			setNavText('black');
			return;
		}
		const changeColor = () => {
			if (window.scrollY >= 60) {
				setNavColor('black')
				// setNavText('black')
			} else {
				setNavColor('transparent')
				// setNavText('white')
			}
		}

		window.addEventListener('scroll', changeColor)
		return () => window.removeEventListener('scroll', changeColor)
	}, [isPolicyPage])

	return (
		<header
			style={{ backgroundColor: `${navColor}` }}
			className='fixed left-0 top-0 w-full select-none z-[100]'
		>
			<div className='mx-auto h-[90px] w-full lg:max-w-7xl'>
				<div className='relative px-5 flex h-full items-center justify-between lg:px-8'>
					{/* ЛОГО */}
					<Link href='/'>
						<div className='flex items-center justify-between w-[210px]'>
							<img src='/assets/logo.png' alt='logo' />
							<p
								style={{ color: isPolicyPage ? 'black' : navText }}
								className={`uppercase text-xl ml-2 ${isPolicyPage ? 'text-black' : ''}`}
							>
								нумеролог
							</p>
						</div>
					</Link>

					{/* МЕНЮ */}
					<div className='flex w-full items-center justify-center'>
						<nav
							className={
								isPolicyPage
									? (nav
										? 'left-0 z-199 top-0 w-full h-screen absolute bg-transparent text-black transition-all lg:static lg:block lg:bg-transparent lg:h-full '
										: '-left-[100%] z-199 top-0 w-full h-screen absolute bg-transparent text-black transition-all lg:static lg:block lg:bg-transparent lg:h-full '
								)
								: (
									nav
										? 'left-0 z-199 top-0 w-full h-screen absolute bg-black text-white transition-all lg:static lg:block lg:bg-transparent lg:h-full '
										: '-left-[100%] z-199 top-0 w-full h-screen absolute bg-black text-white transition-all lg:static lg:block lg:bg-transparent lg:h-full '
								)
							}
						>
							<ul className={`flex flex-col h-full gap-5 items-center justify-center lg:flex-row lg:justify-center`}>
  <li onClick={handleNav}>
    <a className={`group text-2xl font-medium duration-200 xl:text-base lg:text-[14px] ${isPolicyPage ? 'text-black hover:text-teal-700' : 'text-white hover:text-teal-500'}`} href='/#top' scroll='false'>Главная<div className='relative w-full h-0.5 bg-teal-500 scale-x-0 group-hover:scale-x-100 transition-transform'></div></a>
  </li>
  <li onClick={handleNav}>
    <a className={`group text-2xl font-medium duration-200 xl:text-base lg:text-[14px] ${isPolicyPage ? 'text-black hover:text-teal-700' : 'text-white hover:text-teal-500'}`} href='/#about' scroll='false'>Обо мне<div className='relative w-full h-0.5 bg-teal-500 scale-x-0 group-hover:scale-x-100 transition-transform'></div></a>
  </li>
  <li onClick={handleNav}>
    <a className={`group text-2xl font-medium duration-200 xl:text-base lg:text-[14px] ${isPolicyPage ? 'text-black hover:text-teal-700' : 'text-white hover:text-teal-500'}`} href='/#services' scroll='false'>Услуги<div className='relative w-full h-0.5 bg-teal-500 scale-x-0 group-hover:scale-x-100 transition-transform'></div></a>
  </li>
  <li onClick={handleNav}>
    <a className={`group text-2xl font-medium duration-200 xl:text-base lg:text-[14px] ${isPolicyPage ? 'text-black hover:text-teal-700' : 'text-white hover:text-teal-500'}`} href='/#new-book-showcase' scroll='false'>Книга<div className='relative w-full h-0.5 bg-teal-500 scale-x-0 group-hover:scale-x-100 transition-transform'></div></a>
  </li>
  <li onClick={handleNav}>
    <a className={`group text-2xl font-medium duration-200 xl:text-base lg:text-[14px] ${isPolicyPage ? 'text-black hover:text-teal-700' : 'text-white hover:text-teal-500'}`} href='/#course' scroll='false'>Обучение<div className='relative w-full h-0.5 bg-teal-500 scale-x-0 group-hover:scale-x-100 transition-transform'></div></a>
  </li>
  <li onClick={handleNav}>
    <a className={`group text-2xl font-medium duration-200 xl:text-base lg:text-[14px] ${isPolicyPage ? 'text-black hover:text-teal-700' : 'text-white hover:text-teal-500'}`} href='/#contacts' scroll='false'>Контакты<div className='relative w-full h-0.5 bg-teal-500 scale-x-0 group-hover:scale-x-100 transition-transform'></div></a>
  </li>
  <li onClick={handleNav}>
    <Link href='https://wa.me/79057444724' target='_blank' scroll={false} legacyBehavior>
      <a>
        <button
          className={`text-base font-semibold px-5 py-2 rounded-lg shadow bg-gradient-to-r from-teal-400 via-cyan-400 to-teal-600 hover:from-teal-500 hover:via-cyan-500 hover:to-teal-700 text-white transition-all duration-150 hover:scale-105 active:scale-95 border-none uppercase ${isPolicyPage ? 'bg-white text-black hover:bg-teal-100 hover:text-teal-700' : ''}`}
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
						<button className={`lg:hidden ${isPolicyPage ? 'text-black' : 'text-white'}`}>
									{nav ? (
										<TfiClose
											className={`${isPolicyPage ? 'text-black' : 'text-white'} absolute top-0 right-0 m-5`}
											size={30}
											onClick={handleNav}
										/>
									) : (
										<AiOutlineMenu className={isPolicyPage ? 'text-black' : 'text-white'} size={30} onClick={handleNav} />
									)}
								</button>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Navbar
