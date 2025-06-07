import React, { Component } from 'react'
import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import {
	MdOutlineArrowBackIosNew,
	MdOutlineArrowForwardIos,
} from 'react-icons/md'

export default class TsmlSlider extends Component {
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
		}
		return (
			<>
				{/* **************** МОБИЛЬНАЯ ***************** */}
				<div className=''>
					<div className='flex flex-col items-center justify-center'>
						<div className='w-[300px] sm:w-[500px]'>
							<Slider ref={(q) => (this.slider = q)} {...settings}>
								<div key={1}>
									<video
										className='h-[500px] sm:w-[800px] sm:h-[600px]'
										controls='controls'
										poster='/assets/tsml-video-cover.png'
									>
										<source
											src={require('../public/assets/tsml-video.mp4')}
											type='video/mp4'
										/>
									</video>
								</div>
								<div key={2}>
									<img
										className='object-fit'
										src='/assets/tsml-1.jpeg'
										alt='Отзыв 1'
									/>
								</div>
								<div key={3}>
									<img
										className='object-fit'
										src='/assets/tsml-2.jpeg'
										alt='Отзыв 2'
									/>
								</div>
								<div key={4}>
									<img
										className='object-fit'
										src='/assets/tsml-3.jpeg'
										alt='Отзыв 3'
									/>
								</div>
								<div key={5}>
									<img
										className='object-fit'
										src='/assets/tsml-4.jpeg'
										alt='Отзыв 4'
									/>
								</div>
								<div key={6}>
									<img
										className='object-fit'
										src='/assets/tsml-5.jpg'
										alt='Отзыв 5'
									/>
								</div>
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
				</div>
			</>
		)
	}
}
