import { TextField, TextFieldProps } from '@mui/material'
import { Controller, FieldError, useFormContext } from 'react-hook-form';
import React from 'react'

export type TextFieldElementProps = Omit<TextFieldProps, 'name'> & {
  name: string
  parseError?: (error: FieldError) => string
}

export default function TextFieldElement({
  parseError,
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
          error={invalid}
          helperText={error ? (typeof parseError === 'function' ? parseError(error) : error.message) : rest.helperText}
        />
      }
    />
  )
}
