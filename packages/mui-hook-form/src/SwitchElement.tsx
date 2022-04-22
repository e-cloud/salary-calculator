import { Control, Controller, useFormContext } from 'react-hook-form';
import { FormControlLabel, FormControlLabelProps, Switch } from '@mui/material'
import React from 'react'
// ----------------------------------------------------------------------

type IProps = Omit<FormControlLabelProps, 'control'>;

export type SwitchElementProps = IProps & {
  name: string;
  control?: Control<any>
}

export default function SwitchElement({ name, ...other }: SwitchElementProps) {
  const { control } = useFormContext()
  return (
    <FormControlLabel
      control={
        <Controller
          name={name}
          control={control}
          render={({ field }) => <Switch {...field} checked={field.value} />}
        /> as any
      }
      {...other}
    />
  )
}
