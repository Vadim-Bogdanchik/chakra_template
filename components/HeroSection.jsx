import Link from 'next/link'
import { Button } from './ui/button'
import { FloatingLabelInput } from './ui/floating-label-input'
import { useEffect, useRef, useState } from 'react'

// ... (other imports)

import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import { Formik, Form, Field, useFormik } from 'formik'
import schema from '../components/schemas/'

// импорты проекта
import TableData from './TableData'
import { setTableSectionOpen, setTableData } from '../redux/features/appSlice'

// иконки
import { AiOutlineInstagram, AiOutlineWhatsApp } from 'react-icons/ai'
import { BsTelegram } from 'react-icons/bs'
import { SlSocialVkontakte } from 'react-icons/sl'

const formatDateInput = value => {
	if (!value) return value
	const dateIn = value.replace(/[^\d]/g, '')
	const dateInLen = dateIn.length

	if (dateInLen < 2) {
		return dateIn
	}

	if (dateInLen < 3) return `${dateIn.slice(0, 2)}`

	if (dateInLen < 5) {
		return `${dateIn.slice(0, 2)}.${dateIn.slice(2)}`
	}

	return `${dateIn.slice(0, 2)}.${dateIn.slice(2, 4)}.${dateIn.slice(4, 8)}`
}

const HeroSection = () => {
	const dispatch = useDispatch()
	const router = useRouter()
	const [name, setName] = useState('')
	const [date, setDate] = useState('')
	const [err, setErr] = useState(false)
	const [agree, setAgree] = useState(false)

	const refName = useRef(null)
	const refSubmit = useRef(null)

	const handleForm = e => {
		e.preventDefault()

		if (
			parseInt(date.substring(0, 2)) < 32 &&
			parseInt(date.substring(3, 5)) < 13 &&
			parseInt(date.substring(6, 10)) >= 1900 &&
			parseInt(date.substring(6, 10)) <= 2151
		) {
			setErr(false)

			router.push('#sectiontable')
			dispatch(setTableSectionOpen(true))
			// Выполняем расчет и сохраняем в РЕДАКС

			dispatch(setTableData(TableData(date)))
		} else {
			setErr(true)
		}
	}

	const handleDate = e => {
		const formatedInput = formatDateInput(e.target.value)
		setDate(formatedInput)

		if (formatedInput.length === 10) {
			refSubmit.current.focus()
		}
	}

	const handleDateBlur = e => {
		// console.log('-->')
	}

	const handleName = e => {
		const nameIn = e.target.value.replace(/[^\a-zа-яё]/gi, '')
		if (nameIn.length < 15) {
			setName(nameIn)
		}
	}

	useEffect(() => {
		refName.current.focus()
	}, [])

	return (
		<section
			id='top'
			className='flex item-center justify-center relative h-[850px] sm:h-screen pt-28 pb-10 select-none '
		>
			{/* видео бэкграунд */}
			{/* <video
				className='hidden sm:block absolute top-0 left-0 w-full h-[850px] sm:h-screen object-cover z-[-100]'
				autoPlay
				muted
				loop
				id='bgVideo'
			>
				<source
					src={require('../public/assets/herovideo.mp4')}
					type='video/mp4'
				/>
			</video> */}

			<img
				className='block sm:hidden absolute top-0 left-0 w-full h-[850px] sm:h-screen object-cover z-[-100]'
				src='/assets/gif-bg-2.gif'
				alt='обложка hero мобильная'
			/>
			<img
				className='hidden sm:block absolute top-0 left-0 w-full h-[850px] sm:h-screen object-cover z-[-100]'
				src='/assets/gif-bg-3.gif'
				alt='обложка hero декстопная'
			/>

			{/* Оверлэй */}
			<div className='hidden sm:block absolute top-0 left-0 w-full h-[850px] sm:h-screen object-cover bg-black/50 sm:bg-black/60 z-[-99]'></div>

			{/* КОНТЕНТ */}
			<div className='mx-auto px-8 md:px-16 lg:max-w-7xl lg:flex lg:items-center z-10'>
				<div className='flex flex-wrap'>
					<div className='w-full lg:w-7/12'>
						<h1 className='text-white text-center mb-5 text-[20px] font-bold sm:text-[36px] sm:text-left tracking-widest leading-5 sm:leading-9'>
							Чакроанализ (ХВД) - расчет чакр по дате рождения
						</h1>

						<p className='hidden sm:block text-white mb-3 max-w-[580px] text-[14px] leading-5'>
							В дате рождения человека заложена карма, возможности и риски,
							сильные и слабые стороны. Все это можно узнать по системе
							чакральной нумерологии, хронально-векторной диагностики" на новый:
							"В дате рождения человека заложена карма, возможности и риски,
							сильные и слабые стороны. Все это можно рассчитать по системе ХВД
							- хронально-векторной диагностики
						</p>

{/* КНОПКА КНИГА */}
<div className="flex justify-center sm:justify-start mb-6">
	<Link href="#new-book-showcase" scroll={false}>
		<button
			type="button"
			className="flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-teal-400 via-cyan-400 to-teal-600 hover:from-teal-500 hover:via-cyan-500 hover:to-teal-700 shadow transition-all duration-200 uppercase text-base sm:text-lg"
		>
			<svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6l4 2" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 19.5A2.5 2.5 0 016.5 17H20" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6.5 17V5A2.5 2.5 0 019 2.5h10A2.5 2.5 0 0121.5 5v12a2.5 2.5 0 01-2.5 2.5H6.5z" /></svg>
			Книга
		</button>
	</Link>
</div>

						{/* <p className='text-white mb-5 max-w-[580px] text-[14px] leading-4 sm:leading-5'>
							Узнать свой врожденный энергетический потенциал, тип души,
							кармические задачи.
						</p> */}

						
						{/* <button>!</button> */}
					</div>

					{/* Разделитель */}
					<div className='hidden px-4 lg:block lg:w-1/12'></div>

					<div className='flex flex-col items-center justify-start rounded-xl py-5 px-4 w-full min-h-[350px] bg-white lg:w-4/12'>
						<h2 className='text-xl sm:text-2xl text-center font-medium mb-5 sm:mb-10'>
							Калькулятор чакр
						</h2>

						{/* ********************** ФОРМА ********************* */}
						<a id='forma-link' className='relative -top-[200px]' />
						<form className='flex flex-col gap-1 w-full px-3'>
							<FloatingLabelInput
								ref={refName}
								value={name}
								onChange={handleName}
								label='Ваше имя*'
								className='h-[50px] bg-gray-100 focus:bg-teal-100 border-none'
								type='text'
								name='name'
								id='name'
								required
							/>
							<FloatingLabelInput
								onBlur={handleDateBlur}
								onChange={handleDate}
								value={date}
								label='Дата рождения*'
								className={`h-[50px] bg-gray-100 focus:bg-teal-100 border-none ${err ? 'border-red-400 focus:border-red-500 ring-2 ring-red-200' : ''}`}
								type='text'
								name='date'
								id='date'
								placeholder='ДД.ММ.ГГГГ'
								required
							/>
							{err && (
							<div className="flex justify-center items-center mt-2 mb-3 text-xs text-red-500 font-medium text-center w-full">
								<svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01" /></svg>
								Введите верную дату
							</div>
						) }
							<Button
								ref={refSubmit}
								onClick={e => {
									handleForm(e)
								}}
								type='submit'
								className='uppercase py-5 mt-2 duration-500 border-none font-medium w-full bg-teal-500 shadow-lg hover:shadow-none hover:bg-teal-600 focus:outline-2 focus:outline-teal-700 focus:shadow-white'
								style={{ letterSpacing: 1 }}
								disabled={!agree}
							>
								рассчитать
							</Button>

							{/* Согласие на обработку персональных данных */}
							<div className="flex items-start justify-center mt-4 mb-2 text-xs text-gray-600 w-full">
								<input
									id="agree"
									type="checkbox"
									checked={agree}
									onChange={e => setAgree(e.target.checked)}
									className="mt-1 accent-teal-600 rounded border-gray-300 focus:ring-teal-500"
									required
								/>
								<label htmlFor="agree" className="ml-2 select-none">
									Я согласен на обработку моих персональных данных
									<span className="ml-1 text-teal-600 underline cursor-pointer">
										<a href="/user-agreement" target="_blank" rel="noopener noreferrer">
											(Пользовательское соглашение об использовании персональных данных)
										</a>
									</span>
								</label>
							</div>
						</form>

						{/* ************************** КОНЕЦ ФОРМЫ ********************* */}
					</div>

					{/* соцсети */}
					<div className='hidden fixed absolute left-5 inset-y-1/3 xl:block'>
						<div className='flex flex-col gap-2 text-white '>
							<Link href='https://wa.me/79057444724' target='blank'>
								<AiOutlineWhatsApp className='hover:text-teal-500' size={20} />
							</Link>
							<Link href='https://t.me/ezo_insight' target='blank'>
								<BsTelegram className='hover:text-teal-500' size={18} />
							</Link>
							<Link href='https://vk.com/club211281505' target='blank'>
								<SlSocialVkontakte className='hover:text-teal-500' size={19} />
							</Link>
						</div>

						<div className=' border-l border-white h-[50px] m-2 mb-14' />

						<div className='text-white -rotate-90 text-left -ml-12'>
							<span>Мои соцсети</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default HeroSection
