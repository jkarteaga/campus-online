import React from 'react'
import styled from 'styled-components'
import {withState} from 'recompose'
import {colors} from '../../constants'
import Link from '../StylableLink'

const Wrapper = styled.div`
	display: flex;
	line-height: 1.5rem;
	align-items: baseline;
	margin-left: -1rem;
	margin-right: -1rem;
	overflow: hidden;
`

const Title = styled(Link)`
	display: block;
	position: relative;
	z-index: 1;
	font-weight: 500;
	color: currentColor;
	text-decoration: none;
	padding: 1rem 0.5rem 1rem 1rem;
	&:after {
		content: '';
		background: linear-gradient(to left, transparent, ${colors.base});
		position: absolute;
		height: 100%;
		left: 100%;
		width: 3rem;
		pointer-events: none;
	}
`

// [TODO]: black magic scroll bars and dynamic shadows
const List = styled.ul`
	display: flex;
	overflow: scroll;
	flex: 1;
	${p =>
		p.expanded &&
		`
		overflow: initial;
		flex-wrap: wrap;
	`};
`

const Item = styled(Link)`
	color: currentColor;
	display: block;
	text-decoration: none;
	font-size: 0.75rem;
	text-transform: uppercase;
	font-weight: 600;
	padding: 0.25rem 0.75rem;
	white-space: nowrap;
	opacity: 0.66;
	&:hover {
		opacity: 1;
	}
`

const ShowMore = styled.div`
	display: block;
	cursor: pointer;
	position: relative;
	padding: 1rem 1rem 0.5rem 1rem;
	user-select: none;
	&:before {
		content: '';
		background: linear-gradient(to right, transparent, ${colors.base});
		position: absolute;
		height: 100%;
		right: 100%;
		width: 3rem;
		pointer-events: none;
	}
	&:after {
		content: '···';
		line-height: 1rem;
		${p =>
			p.expanded &&
			`
			content: '×';
			font-size: 1.5rem;
		`} position: relative;
	}
`

const enhance = withState('expanded', 'onExpand', false)

const ScrollList = enhance(
	({title, to, list, style, className, expanded, onExpand}) => (
		<Wrapper to={to} style={style} className={className}>
			<Title>{title}</Title>
			<List expanded={expanded}>
				{list.map(({label, url}) => (
					<li key={url}>
						<Item to={url}>{label}</Item>
					</li>
				))}
			</List>
			<ShowMore
				expanded={expanded}
				onClick={() => onExpand(expanded => !expanded)}
			/>
		</Wrapper>
	),
)

export default ScrollList