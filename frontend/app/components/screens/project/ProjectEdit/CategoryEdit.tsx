import { Button } from 'components/ui/form-elements/Button'
import Field from 'components/ui/form-elements/Field'
import { Heading } from 'components/ui/heading/Heading'
import { useRouter } from 'next/router'
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

	const { query } = useRouter()

	const { onSubmit } = useCategoryEdit()

	const addCategory = (data: any) => {
		const projectId = String(query.id)
		onSubmit({ ...data, projectId })
	}

	return (
		<>
			<Heading title="Create Category" className="mt-6" />
			<form onSubmit={handleSubmit(addCategory)} className={stylesForm.form}>
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
