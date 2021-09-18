import React, {useState} from 'react'
import clsx from 'clsx'

import {NavigateNextOutlined as ArrowRightIcon} from '@material-ui/icons'

import data from '../../data'
import {CommentItem} from './CommentItem/CommentItem'

import styles from './SideComments.module.scss'


export const SideComments: React.FC = () => {
	const [visible, setVisible] = useState(true)

	const handleToggleVisible = () => {
		setVisible(!visible)
	}

	return (
		<div className={clsx(styles.root, !visible && styles.rotated)}>
			<h3 onClick={handleToggleVisible}>
				Комментарии <ArrowRightIcon/>
			</h3>
			{visible && data.comments.popular.map(item => (
				<CommentItem key={item.id} {...item} />
			))}
		</div>
	)
}
