import { Button } from 'components/ui/form-elements/Button'
import Field from 'components/ui/form-elements/Field'
import { Heading } from 'components/ui/heading/Heading'
import React, { FC } from 'react'
import { useForm } from 'react-hook-form'

import stylesForm from '../../../ui/form-elements/project-form.module.scss'

import { ICategoryEditInput } from './project-edit.interface'
import { useCategoryEdit } from './useCategoryEdit'

export const CategoryEdit: FC = () => {
	const {
		handleSubmit,
		register,
		formState: { errors },
	} = useForm<ICategoryEditInput>({
		mode: 'onChange',
	})

	const { onSubmit } = useCategoryEdit()

	return (
		<>
			<Heading title="Edit Category" />
			<form onSubmit={handleSubmit(onSubmit)} className={stylesForm.form}>
				<>
					<div className={stylesForm.fields}>
						<Field
							{...register('text', {
								required: 'Name is required!',
							})}
							placeholder="Description"
						/>
					</div>
					<Button>Add Category</Button>
				</>
			</form>
		</>
	)
}
