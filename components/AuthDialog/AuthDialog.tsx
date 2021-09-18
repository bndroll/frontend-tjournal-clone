import React, {useState} from 'react'

import {Dialog, DialogContent, DialogContentText, Typography} from '@material-ui/core'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'

import styles from './AuthDialog.module.scss'
import {LoginForm} from './Forms/LoginForm'
import {RegisterForm} from './Forms/RegisterForm'
import {MainForm} from './Forms/MainForm'


interface AuthDialogProps {
	onClose: () => void
	visible: boolean
}

export const AuthDialog: React.FC<AuthDialogProps> = ({onClose, visible}) => {
	const [formType, setFormType] = useState<'main' | 'login' | 'register'>('main')

	return (
		<Dialog open={visible} onClose={onClose} maxWidth={'xs'} fullWidth>
			<DialogContent>
				<DialogContentText>
					<div className={styles.content}>
						<Typography className={styles.title}>
							{formType === 'main' ? (
								'Вход в TJournal'
							) : (
								<p onClick={() => setFormType('main')} className={styles.backTitle}>
									<ArrowBackIcon/> Войти через почту
								</p>
							)}
						</Typography>
						{formType === 'main' && <MainForm onOpenLogin={() => setFormType('login')}/>}
						{formType === 'login' && <LoginForm onOpenRegister={() => setFormType('register')}/>}
						{formType === 'register' && <RegisterForm onOpenRegister={() => setFormType('register')}
                                                                  onOpenLogin={() => setFormType('login')}/>}
					</div>
				</DialogContentText>
			</DialogContent>
		</Dialog>
	)
}