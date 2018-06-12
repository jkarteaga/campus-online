import React from 'react'
import Helmet from 'react-helmet'
import {colors} from '../constants'
import Navbar from '../components/Navbar'
import TextHero from '../components/TextHero'

const NotFoundPage = () => (
	<div
		style={{
			background: colors.base,
			position: 'absolute',
			minHeight: '100vh',
			width: '100%',
			zIndex: '0',
		}}
	>
		<Helmet title={'Campus Online | 404'} />
		<Navbar style={{position: 'fixed', top: 0, zIndex: 2}} />
		<TextHero title="404" sub="Página não encontrada" />
	</div>
)

export default NotFoundPage
