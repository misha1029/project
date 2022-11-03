import { Button } from 'components/ui/form-elements/Button'
import Field from 'components/ui/form-elements/Field'
import { Heading } from 'components/ui/heading/Heading'
import React, { FC } from 'react'
import { useForm } from 'react-hook-form'
import { Meta } from 'utils/meta/Meta'

import stylesForm from '../../../ui/form-elements/project-form.module.scss'
import { IProjectEditInput } from '../ProjectEdit/project-edit.interface'

import { useProjectCreate } from './useProjectCreate'

export const ProjectCreate: FC = () => {
	const {
		handleSubmit,
		register,
		formState: { errors },
	} = useForm<IProjectEditInput>({
		mode: 'onChange',
	})

	const { onSubmit } = useProjectCreate()

	return (
		<Meta title="Create Project">
			<Heading title="Create Project" />
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
					<Button>Create</Button>
				</>
			</form>
		</Meta>
	)
}
