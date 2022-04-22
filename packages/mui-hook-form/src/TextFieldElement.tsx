import { TextField, TextFieldProps } from '@mui/material'
import { Control, Controller, ControllerProps, FieldError, useFormContext } from 'react-hook-form';
import React from 'react'

export type TextFieldElementProps = Omit<TextFieldProps,
  'name'> & {
  validation?: ControllerProps['rules']
  name: string
  parseError?: (error: FieldError) => string
  control?: Control<any>
}

export default function TextFieldElement({
  validation = {},
  parseError,
  type,
  required,
  name,
  ...rest
}: TextFieldElementProps): JSX.Element {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { invalid, error } }) =>
        <TextField
          {...rest}
          {...field}
          required={required}
          type={type}
          error={invalid}
          helperText={error ? (typeof parseError === 'function' ? parseError(error) : error.message) : rest.helperText}
        />
      }
    />
  )
}
