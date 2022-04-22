import {FormProps} from '@/components/calculator/calculator-form.tsx';
import {ElementType, forwardRef, Ref} from 'react';
import {FieldPath, FieldValues} from 'react-hook-form';
import {Box, ChipTypeMap} from '@mui/material';
import {AutocompleteElementProps, AutoDefault} from '@/modules/react-hook-form-mui/AutocompleteElement.tsx';
import {yuanSuffix} from '@/components/calculator/form-utils.tsx';
import {AutocompleteElement} from '@/modules/react-hook-form-mui';

export const SimpleYuanAutoComplete = forwardRef(function SimpleYuanAutoComplete<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
  TValue = AutoDefault | string | any,
  Multiple extends boolean | undefined = false,
  DisableClearable extends boolean | undefined = false,
  FreeSolo extends boolean | undefined = false,
  ChipComponent extends ElementType = ChipTypeMap['defaultComponent'],
>(props: AutocompleteElementProps<
    TFieldValues,
    TName,
    TValue,
    Multiple,
    DisableClearable,
    FreeSolo,
    ChipComponent
  > & { width?: number },
  ref: Ref<HTMLDivElement>) {
  return <AutocompleteElement
    ref={ref}
    name={props.name}
    label={props.label}
    required
    valueField="value"
    matchId
    options={props.options}
    autocompleteProps={{
      freeSolo: true,
      sx: {width: props.width ?? 300, display: 'inline-flex'},
      disableClearable: true,
      forcePopupIcon: false,
      getOptionLabel: x => x.value?.toString() || '',
      renderOption: (props, option) => (
        <Box {...props} component="li" key={option.label}>
          {option.label}
        </Box>
      ),
      componentsProps: {
        popper: { placement: 'bottom-start', style: { width: 'fit-content' } }
      }
    }}
    textFieldProps={{
      variant: 'standard',
      type: 'number',
      InputProps: yuanSuffix,
    }}
  />;
});
