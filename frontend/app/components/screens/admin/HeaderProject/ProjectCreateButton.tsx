import React, { FC } from 'react'
import { Button } from 'components/ui/form-elements/Button'

export const CreateButton: FC<{onClick: () => void}> = ({onClick}) => {
  return (
    <Button onClick = {onClick}>Create new</Button>
  )
}
