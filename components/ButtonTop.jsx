import Link from 'next/link'
import React from 'react'
import { useEffect, useState } from 'react'
import { MdArrowUpward } from 'react-icons/md'

const ButtonTop = () => {
	const [btnShow, setBtnShow] = useState(false)

	useEffect(() => {
		const showBtn = () => {
			if (window.scrollY >= 900) {
				setBtnShow(true)
			} else {
				setBtnShow(false)
			}
		}

		window.addEventListener('scroll', showBtn)
	})

	return (
		<div className={btnShow ? 'hidden sm:block' : 'hidden'}>
			<Link href='#top' scroll={false}>
				<div className='fixed flex items-center justify-center bottom-10 right-10 w-14 h-14 text-teal-200 bg-teal-500 rounded-md z-[101] shadow-lg hover:cursor-pointer hover:bg-teal-400 duration-300 hover:shadow-white'>
					<MdArrowUpward size={26} />
				</div>
			</Link>
		</div>
	)
}

export default ButtonTop
