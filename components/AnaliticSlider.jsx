import React, { Component } from 'react'
import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import {
	MdOutlineArrowBackIosNew,
	MdOutlineArrowForwardIos,
} from 'react-icons/md'
import Link from 'next/link'

export default class AnaliticSlider extends Component {
	constructor(props) {
		super(props)
		this.next = this.next.bind(this)
		this.previous = this.previous.bind(this)
	}
	next() {
		this.slider.slickNext()
	}
	previous() {
		this.slider.slickPrev()
	}

	render() {
		const settings = {
			dots: true,
			infinite: true,
			arrows: false,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: true,
		}
		return (
			<>
				<div className='flex flex-col items-center justify-center'>
					<div className='w-[300px] sm:w-[400px]'>
						<Slider ref={(q) => (this.slider = q)} {...settings}>
							<Link href='/razbor-andzheliny-dzholi'>
								<div
									key={1}
									className='cursor-pointer scale-100 hover:scale-110 ease-in duration-500'
								>
									<img
										className='object-fit'
										src='/assets/angelina-jolli.jpg'
										alt='Чакроанализ Анджелина Джоли'
									/>
								</div>
							</Link>
							<Link href='/razbor-freddi-merk-yuri'>
								<div
									key={2}
									className='cursor-pointer  scale-100 hover:scale-110 ease-in duration-500'
								>
									<img
										className='object-fit'
										src='/assets/freddi-mercury.jpg'
										alt='Чакроанализ Фреди Меркьюри'
									/>
								</div>
							</Link>
							<Link href='/razbor-minoeko-ivasak'>
								<div
									key={3}
									className='cursor-pointer  scale-100 hover:scale-110 ease-in duration-500'
								>
									<img
										className='object-fit'
										src='/assets/Mineko-Iwasaki.jpg'
										alt='Чакроанализ Минеко Ивасаки'
									/>
								</div>
							</Link>
						</Slider>
					</div>
					<div className='flex ite justify-between w-full pt-4'>
						<div className='w-[20%] text-center'>
							<button className='text-[40px]' onClick={this.previous}>
								<MdOutlineArrowBackIosNew />
							</button>
						</div>
						<div className='w-[20%] text-center'>
							<button className='text-[40px]' onClick={this.next}>
								<MdOutlineArrowForwardIos className='' />
							</button>
						</div>
					</div>
				</div>
			</>
		)
	}
}
