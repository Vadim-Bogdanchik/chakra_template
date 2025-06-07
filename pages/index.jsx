import React from 'react'
import Head from 'next/head'
import { useSelector } from 'react-redux'

// импорты проекта
import HeroSection from '../components/HeroSection'
import SectionAbout from '../components/SectionAbout'
import SectionCourse from '../components/SectionCourse'
import SectionOtherCourses from '../components/SectionOtherCourses'
import SectionConsultation from '../components/SectionConsultation'
import SectionTable from '../components/SectionTable'
import SectionServices from '../components/SectionServices'
import SectionMyAnalysisout from '../components/SectionMyAnalysis'
import SectionTestimonials from '../components/SectionTestimonials'
import SectionBlog from '../components/SectionBlog'
import SectionContacts from '../components/SectionContacts'
import NewBookShowcase from '../components/NewBookShowcase';
import ButtonTop from '../components/ButtonTop'
import MobileMenu from '../components/MobileMenu'
// import SectionErrBook from '../components/SectionErrBook'

const Home = () => {
	const openTable = useSelector(state => state.app.tableSectionOpen)

	return (
		<div>
			<Head>
				<title>
					Чакроанализ рассчитать по дате рождения, ХВД калькулятор чакр - расчет
					и онлайн расшифровка процентов
				</title>
				<meta
					name='description'
					content='Нумеролог ХВД - расчет чакроанализа по дате рождения в онлайн калькуляторе чакр - Нумерология Чакра'
				/>
				<link rel="icon" href="https://chakra-numerolog.ru/favicon.ico" type="image/x-icon"></link>
			</Head>
			<ButtonTop />
			<MobileMenu />
			<HeroSection />
			{openTable && <SectionTable id='qwe' />}

			{/* <SectionErrBook /> */}
			<SectionAbout />
			<NewBookShowcase />
			<SectionCourse />
			{/* <SectionOtherCourses /> */}
			<SectionServices />
			<SectionMyAnalysisout />
			<SectionTestimonials />

			<SectionBlog />
			<SectionContacts />
		</div>
	)
}

export default Home
