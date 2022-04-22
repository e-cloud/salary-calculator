import { Autocomplete, AutocompleteProps } from '@mui/material';
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';

export type AutocompleteElementProps<T,
  Multiple extends boolean | undefined = undefined,
  DisableClearable extends boolean | undefined = undefined,
  FreeSolo extends boolean | undefined = undefined,
  > = AutocompleteProps<T, Multiple, DisableClearable, FreeSolo> & { name: string }

export default function AutocompleteElement<T,
  Multiple extends boolean | undefined = undefined,
  DisableClearable extends boolean | undefined = undefined,
  FreeSolo extends boolean | undefined = undefined,
  >({
      options = [],
      renderInput,
      getOptionLabel,
      defaultValue,
      name,
      renderOption,
    }: AutocompleteElementProps<T, Multiple, DisableClearable, FreeSolo>) {
  const { control } = useFormContext();
  return (
    <Controller
      render={({ field, ...props }) => (
        <Autocomplete
          options={options}
          getOptionLabel={getOptionLabel}
          renderOption={renderOption}
          renderInput={renderInput}
          onChange={(_, data) => field.onChange(data)}
          {...props}
        />
      )}
      defaultValue={defaultValue}
      name={name}
      control={control}
    />
  );
}
