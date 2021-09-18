import React from 'react'
import {useForm, FormProvider} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import {Button} from '@material-ui/core'

import {LoginFormSchema} from '../../../utils/validations'
import {FormField} from '../../FormField/FormField'


interface LoginFormProps {
	onOpenRegister: () => void
}

export const LoginForm: React.FC<LoginFormProps> = ({onOpenRegister}) => {
	const form = useForm({
		mode: 'onChange',
		resolver: yupResolver(LoginFormSchema)
	})

	const handleSubmitForm = data => {
		console.log(data)
	}

	return (
		<div>
			<FormProvider {...form}>
				<form onSubmit={form.handleSubmit(handleSubmitForm)}>
					<FormField name="email" label="Почта"/>
					<FormField name="password" label="Пароль"/>

					<div className="d-flex align-center justify-between">
						<Button disabled={!form.formState.isValid}
								type="submit"
								color="primary"
								variant="contained">
							Войти
						</Button>

						<Button onClick={onOpenRegister}
								color="primary"
								variant="text">
							Регистрация
						</Button>
					</div>
				</form>
			</FormProvider>
		</div>
	)
}