import React from 'react'
import {useFormContext} from 'react-hook-form'

import {TextField} from '@material-ui/core'


interface FormFieldProps {
	name: string
	label: string
}

export const FormField: React.FC<FormFieldProps> = ({name, label}) => {
	const {register, formState} = useFormContext()

	return (
		<TextField {...register(name)}
				   name={name}
				   label={label}
				   error={!!formState.errors[name]?.message}
				   helperText={formState.errors[name]?.message}
				   className="mb-20"
				   size="small"
				   variant="outlined"
				   fullWidth
		/>
	)
}