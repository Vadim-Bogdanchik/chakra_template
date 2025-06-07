import Link from 'next/link'
import React from 'react'
import { useSelector } from 'react-redux'

const SectionTable = () => {
	const data = useSelector((state) => state.app.tableData)

	return (
		<>
			{data[0].map((data) => {
				return (
					<section
						key='0'
						className='flex item-center justify-center relative min-h-[600px] py-20 select-none bg-[#def2f1]'
					>
						{/* Контент */}
						<a id='sectiontable' className='relative -top-[98px]' />
						<div name='sectiontable' className='px-8 md:px-10 lg:w-[900px]'>
							<div className='flex flex-col items-center py-5 px-4 w-full'>
								{/* Заголовок */}
								<div className='mb-10'>
									<h3 className='uppercase text-sm text-teal-500 mb-2'>ваши</h3>
									<p className='text-[35px] sm:text-[50px] leading-10 sm:leading-normal'>
										Результаты расчета
									</p>
								</div>
								{/* Таблица */}

								{/* *********************** 11111111111111 ****************************** */}
								<div className='flex flex-wrap w-full justify-between'>
									<div className='flex flex-row items-center sm:flex-col'>
										<div>
											<img
												className='p-2 w-[70px] sm:w-[100px]'
												src='/assets/muladhara.png'
												alt='маладхара'
											/>
										</div>
										<div>
											<span className='p-2 font-bold uppercase text-[12px]'>
												муладхара
											</span>
										</div>
										<div>
											<span className='p-2 text-[20px]'>{data.muladhara}%</span>
										</div>
									</div>
									<div className='flex flex-row items-center sm:flex-col'>
										<div>
											<img
												className='p-2 w-[70px] sm:w-[100px]'
												src='/assets/svadhistana.png'
												alt='свадхана'
											/>
										</div>
										<div>
											<span className='p-2 font-bold uppercase text-[12px]'>
												свадхистана
											</span>
										</div>
										<div>
											<span className='p-2 text-[20px]'>
												{data.svadhistana}%
											</span>
										</div>
									</div>
									<div className='flex flex-row items-center sm:flex-col'>
										<div>
											<img
												className='p-2 w-[70px] sm:w-[100px]'
												src='/assets/manipura.png'
												alt='манипура'
											/>
										</div>
										<div>
											<span className='p-2 font-bold uppercase text-[12px]'>
												манипура
											</span>
										</div>
										<div>
											<span className='p-2 text-[20px]'>{data.manipura}%</span>
										</div>
									</div>
									<div className='flex flex-row items-center sm:flex-col'>
										<div>
											<img
												className='p-2 w-[70px] sm:w-[100px]'
												src='/assets/anahata.png'
												alt='анахата'
											/>
										</div>
										<div>
											<span className='p-2 font-bold uppercase text-[12px]'>
												анахата
											</span>
										</div>
										<div>
											<span className='p-2 text-[20px]'>{data.anahata}%</span>
										</div>
									</div>
									<div className='flex flex-row items-center sm:flex-col'>
										<div>
											<img
												className='p-2 w-[70px] sm:w-[100px]'
												src='/assets/vishudha.png'
												alt='вишудха'
											/>
										</div>
										<div>
											<span className='p-2 font-bold uppercase text-[12px]'>
												вишудха
											</span>
										</div>
										<div>
											<span className='p-2 text-[20px]'>{data.vishudha}%</span>
										</div>
									</div>
									<div className='flex flex-row items-center sm:flex-col'>
										<div>
											<img
												className='p-2 w-[70px] sm:w-[100px]'
												src='/assets/ajna.png'
												alt='аджна'
											/>
										</div>
										<div>
											<span className='p-2 font-bold uppercase text-[12px]'>
												аджна
											</span>
										</div>
										<div>
											<span className='p-2 text-[20px]'>{data.ajna}%</span>
										</div>
									</div>
								</div>

								{/* ************************ 222222222222222 ***************************** */}

								<div className='hidden sm:block w-full'>
									<div className='flex flex-col sm:flex-row w-full justify-between my-5 text-center'>
										<div className='w-full'>
											<div className='flex sm:flex-col w-full'>
												<div className='bg-red-300 p-3'>
													<span className='font-medium'>типология</span>
												</div>
												<div className='py-1 px-2 bg-teal-200'>
													<span className='text-[14px]'>{data.tipologiya}</span>
												</div>
											</div>
										</div>
									</div>
								</div>

								{/* ************************** ДЛЯ ТЕЛЕФОНА РАЗМЕТКА ********************************* */}
								<div className='block sm:hidden w-full'>
									<div className='flex flex-col w-full justify-between my-5 text-center'>
										<div className='bg-red-300 p-3'>
											<span className='font-medium'>типология</span>
										</div>
										<div className='py-1 px-2 bg-teal-200'>
											<span className='text-[14px]'>{data.tipologiya}</span>
										</div>
									</div>
								</div>

								{/************************ 333333333333333 *******************************/}
								<div className='hidden sm:block w-full'>
									<div className='flex flex-col sm:flex-row w-full justify-between my-5 text-center'>
										<div className='w-1/2'>
											<div className='flex sm:flex-col w-full'>
												<div className='bg-red-300 p-3'>
													<span className='font-medium'>Родовая задача</span>
												</div>
												<div className=' bg-teal-200'>
													<span className='text-[14px]'>
														{data.rodzdacha1} / {data.rodzdacha2}
													</span>
												</div>
												{/* <div className=' bg-teal-200'>
													<span className='text-[14px]'>{data.rodzdacha2}</span>
												</div> */}
											</div>
										</div>
										<div className='w-1/2'>
											<div className='flex sm:flex-col'>
												<div className='bg-red-300 p-3'>
													<span className='font-medium'>
														Кармическая задача
													</span>
												</div>
												<div className=' bg-teal-200'>
													<span className='text-[14px]'>
														{data.karmazadacha1} / {data.karmazadacha2}
													</span>
												</div>
												{/* <div className=' bg-teal-200'>
													<span className='text-[14px]'>
														{data.karmazadacha2}
													</span>
												</div> */}
											</div>
										</div>
									</div>
								</div>
								{/* ************************** ДЛЯ ТЕЛЕФОНА РАЗМЕТКА ********************************* */}
								<div className='block sm:hidden w-full'>
									<div className='flex flex-col sm:flex-row w-full justify-between my-5 text-center'>
										<div className='flex sm:flex-col w-full'>
											<div className='bg-red-300 p-3 w-1/2'>
												<span className='font-medium'>Родовая задача</span>
											</div>
											<div className='flex items-center justify-center w-1/2 bg-teal-200'>
												<div className='w-1/2'>
													<span className='text-[12px]'>
														{data.rodzdacha1} / {data.rodzdacha2}
													</span>
												</div>
												{/* <div className='w-1/2'>
													<span className='text-[12px]'>{data.rodzdacha2}</span>
												</div> */}
											</div>
										</div>
										<div className='flex sm:flex-col w-full mt-5'>
											<div className='bg-red-300 p-3 w-1/2'>
												<span className='font-medium'>Кармическая задача</span>
											</div>
											<div className='flex items-center justify-center w-1/2 bg-teal-200'>
												<div className='py-1 w-1/2'>
													<span className='text-[12px]'>
														{data.karmazadacha1} / {data.karmazadacha2}
													</span>
												</div>
												{/* <div className='py-1 w-1/2'>
													<span className='text-[12px]'>
														{data.karmazadacha2}
													</span>
												</div> */}
											</div>
										</div>
									</div>
								</div>

								{/**************************** 44444444444444444444 ***************************/}

								<div className='hidden sm:block w-full'>
									<div className='flex flex-col sm:flex-row w-full justify-between my-5 text-center'>
										<div className='w-1/6'>
											<div className='flex sm:flex-col w-full'>
												<div className='bg-red-300 p-3'>
													{data.t62 === 999 ? (
														<span className='font-medium'>0-15</span>
													) : (
														<span className='font-medium'>0-12</span>
													)}
												</div>
												<div className='bg-teal-200'>
													<span className='text-[14px]'>{data.t11}</span>
												</div>
												<div className='bg-teal-200'>
													<span className='text-[14px]'>{data.t12}</span>
												</div>
											</div>
										</div>
										<div className='w-1/6'>
											<div className='flex sm:flex-col'>
												<div className='bg-red-300 p-3'>
													{data.t62 === 999 ? (
														<span className='font-medium'>15-30</span>
													) : (
														<span className='font-medium'>12-24</span>
													)}
												</div>
												<div className='bg-teal-200'>
													<span className='text-[14px]'>{data.t21}</span>
												</div>
												<div className='bg-teal-200'>
													<span className='text-[14px]'>{data.t22}</span>
												</div>
											</div>
										</div>
										<div className='w-1/6'>
											<div className='flex sm:flex-col'>
												<div className='bg-red-300 p-3'>
													{data.t62 === 999 ? (
														<span className='font-medium'>30-45</span>
													) : (
														<span className='font-medium'>24-36</span>
													)}
												</div>
												<div className='bg-teal-200'>
													<span className='text-[14px]'>{data.t31}</span>
												</div>
												<div className='bg-teal-200'>
													<span className='text-[14px]'>{data.t32}</span>
												</div>
											</div>
										</div>
										<div className='w-1/6'>
											<div className='flex sm:flex-col'>
												<div className='bg-red-300 p-3'>
													{data.t62 === 999 ? (
														<span className='font-medium'>45-60</span>
													) : (
														<span className='font-medium'>36-48</span>
													)}
												</div>
												<div className='bg-teal-200'>
													<span className='text-[14px]'>{data.t41}</span>
												</div>
												<div className='bg-teal-200'>
													<span className='text-[14px]'>{data.t42}</span>
												</div>
											</div>
										</div>
										<div className='w-1/6'>
											<div className='flex sm:flex-col'>
												<div className='bg-red-300 p-3'>
													{data.t62 === 999 ? (
														<span className='font-medium'>60+</span>
													) : (
														<span className='font-medium'>48-60</span>
													)}
												</div>
												<div className='bg-teal-200'>
													<span className='text-[14px]'>{data.t51}</span>
												</div>
												<div className='bg-teal-200'>
													<span className='text-[14px]'>{data.t52}</span>
												</div>
											</div>
										</div>

										{data.t61 != 999 && (
											<div className='w-1/6'>
												<div className='flex sm:flex-col'>
													<div className='bg-red-300 p-3'>
														<span className='font-medium'>60+</span>
													</div>
													<div className='bg-teal-200'>
														<span className='text-[14px]'>{data.t61}</span>
													</div>
													<div className='bg-teal-200'>
														<span className='text-[14px]'>{data.t62}</span>
													</div>
												</div>
											</div>
										)}
									</div>
								</div>
								{/* ************************** ДЛЯ ТЕЛЕФОНА РАЗМЕТКА ********************************* */}
								<div className='block sm:hidden w-full'>
									<div className='flex flex-col sm:flex-row w-full justify-between my-5 text-center'>
										<div className='w-full'>
											<div className='bg-red-300 p-3'>
												{data.t62 === 999 ? (
													<span className='font-medium'>0-15</span>
												) : (
													<span className='font-medium'>0-12</span>
												)}
											</div>
											<div className='bg-teal-200'>
												<span className='text-[14px]'>{data.t11}</span>
											</div>
											<div className='bg-teal-200'>
												<span className='text-[14px]'>{data.t12}</span>
											</div>

											<div className='bg-red-300 p-3'>
												{data.t62 === 999 ? (
													<span className='font-medium'>15-30</span>
												) : (
													<span className='font-medium'>12-24</span>
												)}
											</div>
											<div className='bg-teal-200'>
												<span className='text-[14px]'>{data.t21}</span>
											</div>
											<div className='bg-teal-200'>
												<span className='text-[14px]'>{data.t22}</span>
											</div>

											<div className='bg-red-300 p-3'>
												{data.t62 === 999 ? (
													<span className='font-medium'>30-45</span>
												) : (
													<span className='font-medium'>24-36</span>
												)}
											</div>
											<div className='bg-teal-200'>
												<span className='text-[14px]'>{data.t31}</span>
											</div>
											<div className='bg-teal-200'>
												<span className='text-[14px]'>{data.t32}</span>
											</div>

											<div className='bg-red-300 p-3'>
												{data.t62 === 999 ? (
													<span className='font-medium'>45-60</span>
												) : (
													<span className='font-medium'>36-48</span>
												)}
											</div>
											<div className='bg-teal-200'>
												<span className='text-[14px]'>{data.t41}</span>
											</div>
											<div className='bg-teal-200'>
												<span className='text-[14px]'>{data.t42}</span>
											</div>

											<div className='bg-red-300 p-3'>
												{data.t62 === 999 ? (
													<span className='font-medium'>60+</span>
												) : (
													<span className='font-medium'>48-60</span>
												)}
											</div>
											<div className='bg-teal-200'>
												<span className='text-[14px]'>{data.t51}</span>
											</div>
											<div className='bg-teal-200'>
												<span className='text-[14px]'>{data.t52}</span>
											</div>

											{data.t62 != 999 && (
												<div>
													<div className='bg-red-300 p-3'>
														<span className='font-medium'>60+</span>
													</div>
													<div className='bg-teal-200'>
														<span className='text-[14px]'>{data.t61}</span>
													</div>
													<div className='bg-teal-200'>
														<span className='text-[14px]'>{data.t62}</span>
													</div>
												</div>
											)}
										</div>
									</div>
								</div>

								{/* ************************* 555555555555 **************************** */}
								<div className='hidden sm:block w-full'>
									<div className='flex flex-col sm:flex-row w-full justify-between my-5 text-center'>
										<div className='w-full'>
											<div className='flex sm:flex-col'>
												<div className='bg-red-300 p-3'>
													<span className='font-medium'>эмоциональный</span>
												</div>
												<div className='py-1 px-2 bg-teal-200'>
													<span className='text-[14px]'>{data.emotion}</span>
												</div>
											</div>
										</div>
									</div>
								</div>

								{/* ************************* 555555555555 **************************** */}

								<div className='hidden sm:block w-full'>
									<div className='flex flex-col sm:flex-row w-full justify-between text-center'>
										<div className='w-1/2'>
											<div className='flex sm:flex-col mt-5'>
												<div className='bg-red-300 p-3'>
													<span className='font-medium'>физический</span>
												</div>
												<div className='py-1 px-2 bg-teal-200'>
													<span className='text-[14px]'>{data.phisic}</span>
												</div>
											</div>
										</div>
										<div className='w-1/2'>
											<div className='flex sm:flex-col mt-5'>
												<div className='bg-red-300 p-3'>
													<span className='font-medium'>интеллектуальный</span>
												</div>
												<div className='py-1 px-2 bg-teal-200'>
													<span className='text-[14px]'>{data.intellect}</span>
												</div>
											</div>
										</div>
									</div>
								</div>

								{/* ************************** ДЛЯ ТЕЛЕФОНА РАЗМЕТКА ********************************* */}
								<div className='block sm:hidden w-full'>
									<div className='flex flex-col w-full justify-between my-5 text-center'>
										<div className='bg-red-300 p-3 mt-5'>
											<span className='font-medium'>физический</span>
										</div>
										<div className='py-1 px-2 bg-teal-200'>
											<span className='text-[14px]'>{data.phisic}</span>
										</div>

										<div className='bg-red-300 p-3 mt-5'>
											<span className='font-medium'>эмоциональный</span>
										</div>
										<div className='py-1 px-2 bg-teal-200'>
											<span className='text-[14px]'>{data.emotion}</span>
										</div>

										<div className='bg-red-300 p-3 mt-5'>
											<span className='font-medium'>интеллектуальный</span>
										</div>
										<div className='py-1 px-2 bg-teal-200'>
											<span className='text-[14px]'>{data.intellect}</span>
										</div>
									</div>
								</div>

								{/* ************************* 6666666666666 **************************** */}
								<div className='hidden sm:block w-full'>
									<div className='flex flex-col sm:flex-row w-full justify-between my-5 text-center'>
										<div className='w-1/4'>
											<div className='flex sm:flex-col w-full'>
												<div className='bg-red-300 p-3'>
													<span className='font-medium'>инь</span>
												</div>
												<div className='py-1 px-2 bg-teal-200'>
													<span className='text-[14px]'>{data.inj}</span>
												</div>
											</div>
										</div>
										<div className='w-1/4'>
											<div className='flex sm:flex-col'>
												<div className='bg-red-300 p-3'>
													<span className='font-medium'>янь</span>
												</div>
												<div className='py-1 px-2 bg-teal-200'>
													<span className='text-[14px]'>{data.jan}</span>
												</div>
											</div>
										</div>
										<div className='w-1/4'>
											<div className='flex sm:flex-col'>
												<div className='bg-red-300 p-3'>
													<span className='font-medium'>хочу</span>
												</div>
												<div className='py-1 px-2 bg-teal-200'>
													<span className='text-[14px]'>{data.hoschu}</span>
												</div>
											</div>
										</div>
										<div className='w-1/4'>
											<div className='flex sm:flex-col'>
												<div className='bg-red-300 p-3'>
													<span className='font-medium'>могу</span>
												</div>
												<div className='py-1 px-2 bg-teal-200'>
													<span className='text-[14px]'>{data.mogu}</span>
												</div>
											</div>
										</div>
									</div>
								</div>
								{/* ************************** ДЛЯ ТЕЛЕФОНА РАЗМЕТКА ********************************* */}

								<div className='block sm:hidden w-full'>
									<div className='flex flex-col sm:flex-row w-full justify-between my-5 text-center'>
										<div className='w-full'>
											<div className='bg-red-300 p-3'>
												<span className='font-medium'>инь</span>
											</div>
											<div className='py-1 px-2 bg-teal-200'>
												<span className='text-[14px]'>{data.inj}</span>
											</div>
										</div>
										<div className='w-full'>
											<div className='bg-red-300 p-3'>
												<span className='font-medium'>янь</span>
											</div>
											<div className='py-1 px-2 bg-teal-200'>
												<span className='text-[14px]'>{data.jan}</span>
											</div>
										</div>
										<div className='w-full'>
											<div className='bg-red-300 p-3'>
												<span className='font-medium'>хочу</span>
											</div>
											<div className='py-1 px-2 bg-teal-200'>
												<span className='text-[14px]'>{data.hoschu}</span>
											</div>
										</div>
										<div className='w-full'>
											<div className='bg-red-300 p-3'>
												<span className='font-medium'>могу</span>
											</div>
											<div className='py-1 px-2 bg-teal-200'>
												<span className='text-[14px]'>{data.mogu}</span>
											</div>
										</div>
									</div>
								</div>

								{/* ************************* 6666666666666 **************************** */}
								<div className='hidden sm:block w-full'>
									<div className='flex flex-col sm:flex-row w-full justify-between my-5 text-center'>
										<div className='w-1/2'>
											<div className='flex sm:flex-col w-full'>
												<div className='bg-red-300 p-3'>
													<span className='font-medium'>потенцитал 'Я'</span>
												</div>
												<div className='py-1 px-2 bg-teal-200'>
													<span className='text-[14px]'>
														{data.potencialya}
													</span>
												</div>
											</div>
										</div>
										<div className='w-1/2'>
											<div className='flex sm:flex-col'>
												<div className='bg-red-300 p-3'>
													<span className='font-medium'>потенциал 'МЫ'</span>
												</div>
												<div className='py-1 px-2 bg-teal-200'>
													<span className='text-[14px]'>
														{data.potencialmi}
													</span>
												</div>
											</div>
										</div>
									</div>
								</div>
								{/* ************************** ДЛЯ ТЕЛЕФОНА РАЗМЕТКА ********************************* */}
								<div className='block sm:hidden w-full'>
									<div className='flex flex-col sm:flex-row w-full justify-between my-5 text-center'>
										<div className='w-full'>
											<div className='bg-red-300 p-3'>
												<span className='font-medium'>потенцитал 'Я'</span>
											</div>
											<div className='py-1 px-2 bg-teal-200'>
												<span className='text-[14px]'>{data.potencialya}</span>
											</div>
										</div>
										<div className='w-full'>
											<div className='bg-red-300 p-3'>
												<span className='font-medium'>потенциал 'МЫ'</span>
											</div>
											<div className='py-1 px-2 bg-teal-200'>
												<span className='text-[14px]'>{data.potencialmi}</span>
											</div>
										</div>
									</div>
								</div>

								{/* *********************** КНОПКИ ****************************** */}
								<div className='flex items-center justify-center w-full'>
									<Link
										className='flex items-center justify-center w-full'
										href='https://wa.me/79057444724'
										target='blank'
									>
										<button className='text-[14px] uppercase duration-500 w-full sm:w-[300px] mt-10 border border-teal-300 font-medium py-5 bg-teal-300 shadow-lg hover:shadow-none hover:bg-teal-500'>
											получить консультацию
										</button>
									</Link>
								</div>
							</div>
						</div>
					</section>
				)
			})}
		</>
	)
}

export default SectionTable
