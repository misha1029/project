import { SleletonLoader } from 'components/ui/Skeleton/SleletonLoader'
import { Button } from 'components/ui/form-elements/Button'
import Field from 'components/ui/form-elements/Field'
import { Heading } from 'components/ui/heading/Heading'
import React, { FC } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { Meta } from 'utils/meta/Meta'

import stylesForm from '../../../ui/form-elements/project-form.module.scss'

import { CategoryEdit } from './CategoryEdit'
import { IProjectEditInput } from './project-edit.interface'
import { useProjectEdit } from './useProjectEdit'

export const ProjectEdit: FC = () => {
	const {
		handleSubmit,
		register,
		formState: { errors },
		setValue,
	} = useForm<IProjectEditInput>({
		mode: 'onChange',
	})

	const { onSubmit } = useProjectEdit(setValue)

	return (
		<Meta title="Edit Project">
			<Heading title="Edit Project" />
			<form onSubmit={handleSubmit(onSubmit)} className={stylesForm.form}>
				<>
					<div className={stylesForm.fields}>
						<Field
							{...register('name', {
								required: 'Name is required!',
							})}
							placeholder="Name"
							error={errors.name}
						/>

						<Field
							{...register('description', {
								required: 'Name is required!',
							})}
							placeholder="Description"
							error={errors.name}
						/>
					</div>

					<Button>Update</Button>
				</>
			</form>
			<CategoryEdit />
		</Meta>
	)
}
