import React from 'react'
import Navbar from '../../components/Navbar'
import Container from '../../components/Container'
import Content from '../../components/Content'
import AboutHero from '../../components/AboutHero/index'

const AboutPage = ({title, content}) => (
	<div style={{background: 'white'}}>
		<Navbar
			style={{
				position: 'sticky',
				top: 0,
				zIndex: 2,
			}}
			links={[
				{href: '/about', label: 'Sobre'},
				{href: '/contact', label: 'Contato'},
			]}
		/>
		<AboutHero />
		<Container>
			<h2>{title}</h2>
			<Content>{content}</Content>
		</Container>
	</div>
)

export default AboutPage
