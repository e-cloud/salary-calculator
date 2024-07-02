import {
  FieldError,
  FieldPath,
  FieldValues,
  PathValue,
  useController,
  UseControllerProps,
  useFormContext,
} from 'react-hook-form';
import {
  Autocomplete,
  AutocompleteChangeDetails,
  AutocompleteChangeReason,
  AutocompleteFreeSoloValueMapping,
  AutocompleteProps,
  AutocompleteValue,
  Checkbox,
  ChipTypeMap,
  TextField,
  TextFieldProps,
  useForkRef,
} from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import { useFormError } from './FormErrorProvider';
import {
  ElementType,
  forwardRef,
  ReactNode,
  Ref,
  RefAttributes,
  SyntheticEvent,
} from 'react';
import { useTransform } from './useTransform';
import { propertyExists } from './utils';

export type AutoDefault = {
  id: string | number; // must keep id in case of keepObject
  label: string;
};

export type AutocompleteElementProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
  TValue = AutoDefault | string | any,
  Multiple extends boolean | undefined = false,
  DisableClearable extends boolean | undefined = false,
  FreeSolo extends boolean | undefined = false,
  ChipComponent extends ElementType = ChipTypeMap['defaultComponent'],
> = {
  name: TName;
  options: TValue[];
  loading?: boolean;
  multiple?: Multiple;
  loadingIndicator?: ReactNode;
  rules?: UseControllerProps<TFieldValues, TName>['rules'];
  parseError?: (error: FieldError) => ReactNode;
  required?: boolean;
  label?: TextFieldProps['label'];
  showCheckbox?: boolean;
  valueField?: string;
  matchId?: boolean;
  autocompleteProps?: Omit<
    AutocompleteProps<
      TValue,
      Multiple,
      DisableClearable,
      FreeSolo,
      ChipComponent
    >,
    'name' | 'options' | 'loading' | 'renderInput'
  >;
  textFieldProps?: Omit<TextFieldProps, 'name' | 'required' | 'label'>;
  transform?: {
    input?: (
      value: PathValue<TFieldValues, TName>,
    ) => AutocompleteValue<TValue, Multiple, DisableClearable, FreeSolo>;
    output?: (
      event: SyntheticEvent,
      value: AutocompleteValue<TValue, Multiple, DisableClearable, FreeSolo>,
      reason: AutocompleteChangeReason,
      details?: AutocompleteChangeDetails<TValue>,
    ) => PathValue<TFieldValues, TName>;
  };
};

type AutocompleteElementComponent = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
  TValue = AutoDefault | string | any, // Maybe we can change it to 'unknown' type for more strict type checking
  Multiple extends boolean | undefined = false,
  DisableClearable extends boolean | undefined = false,
  FreeSolo extends boolean | undefined = false,
  ChipComponent extends ElementType = ChipTypeMap['defaultComponent'],
>(
  props: AutocompleteElementProps<
    TFieldValues,
    TName,
    TValue,
    Multiple,
    DisableClearable,
    FreeSolo,
    ChipComponent
  > &
    RefAttributes<HTMLDivElement>,
) => JSX.Element;

const AutocompleteElement = forwardRef(function AutocompleteElement<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
  TValue = AutoDefault | string | any,
  Multiple extends boolean | undefined = false,
  DisableClearable extends boolean | undefined = false,
  FreeSolo extends boolean | undefined = false,
  ChipComponent extends ElementType = ChipTypeMap['defaultComponent'],
>(
  props: AutocompleteElementProps<
    TFieldValues,
    TName,
    TValue,
    Multiple,
    DisableClearable,
    FreeSolo,
    ChipComponent
  >,
  ref: Ref<HTMLDivElement>,
) {
  const {
    textFieldProps,
    autocompleteProps,
    name,
    options,
    loading,
    showCheckbox,
    rules,
    loadingIndicator,
    required,
    multiple,
    label,
    valueField = 'id',
    parseError,
    transform,
    matchId,
  } = props;

  const errorMsgFn = useFormError();
  const customErrorFn = parseError || errorMsgFn;

  const validationRules = {
    ...rules,
    ...(required && {
      required: rules?.required || 'This field is required',
    }),
  };

  const { control } = useFormContext();

  const {
    field,
    fieldState: { error },
  } = useController({
    name,
    control,
    disabled: autocompleteProps?.disabled,
    rules: validationRules,
  });

  const getOptionLabel = (
    option: TValue | AutocompleteFreeSoloValueMapping<FreeSolo>,
  ): string => {
    if (typeof autocompleteProps?.getOptionLabel === 'function') {
      return autocompleteProps.getOptionLabel(option);
    }
    if (propertyExists(option, 'label')) {
      return `${option?.label}`;
    }
    return `${option}`;
  };

  const isOptionEqualToValue = (option: TValue, value: TValue): boolean => {
    if (typeof autocompleteProps?.isOptionEqualToValue == 'function') {
      return autocompleteProps.isOptionEqualToValue(option, value);
    }
    const optionKey = propertyExists(option, valueField)
      ? option[valueField]
      : option;
    const valueKey = propertyExists(value, valueField)
      ? value[valueField]
      : value;
    return optionKey === valueKey;
  };

  const matchOptionByValue = (currentValue: TValue) => {
    return options.find(option => {
      if (matchId && propertyExists(option, valueField)) {
        return option[valueField] === currentValue;
      }
      return isOptionEqualToValue(option, currentValue);
    });
  };

  const { value, onChange } = useTransform<
    TFieldValues,
    TName,
    AutocompleteValue<TValue, Multiple, DisableClearable, FreeSolo>
  >({
    value: field.value,
    onChange: field.onChange,
    transform: {
      input:
        typeof transform?.input === 'function'
          ? transform.input
          : newValue => {
              return (
                multiple
                  ? (Array.isArray(newValue) ? newValue : []).map(
                      matchOptionByValue,
                    )
                  : matchOptionByValue(newValue) ?? null
              ) as AutocompleteValue<
                TValue,
                Multiple,
                DisableClearable,
                FreeSolo
              >;
            },
      output:
        typeof transform?.output === 'function'
          ? transform.output
          : (
              _event: SyntheticEvent,
              newValue: AutocompleteValue<
                TValue,
                Multiple,
                DisableClearable,
                FreeSolo
              >,
            ) => {
              if (multiple) {
                const newValues = Array.isArray(newValue) ? newValue : [];
                return (
                  matchId
                    ? newValues.map(currentValue =>
                        propertyExists(currentValue, valueField)
                          ? currentValue[valueField]
                          : currentValue,
                      )
                    : newValues
                ) as PathValue<TFieldValues, TName>;
              }
              return (
                matchId && propertyExists(newValue, valueField)
                  ? newValue[valueField]
                  : newValue
              ) as PathValue<TFieldValues, TName>;
            },
    },
  });

  const handleInputRef = useForkRef(field.ref, textFieldProps?.inputRef);

  const loadingElement = loadingIndicator || (
    <CircularProgress color="inherit" size={20} />
  );

  return (
    <Autocomplete
      {...autocompleteProps}
      value={value}
      loading={loading}
      multiple={multiple}
      options={options}
      disableCloseOnSelect={
        typeof autocompleteProps?.disableCloseOnSelect === 'boolean'
          ? autocompleteProps.disableCloseOnSelect
          : !!multiple
      }
      isOptionEqualToValue={isOptionEqualToValue}
      getOptionLabel={getOptionLabel}
      onChange={(event, newValue, reason, details) => {
        onChange(event, newValue, reason, details);
        if (autocompleteProps?.onChange) {
          autocompleteProps.onChange(event, newValue, reason, details);
        }
      }}
      ref={ref}
      renderOption={
        autocompleteProps?.renderOption ??
        (showCheckbox
          ? (props, option, { selected }) => {
              return (
                <li {...props}>
                  <Checkbox sx={{ marginRight: 1 }} checked={selected} />
                  {getOptionLabel(option)}
                </li>
              );
            }
          : undefined)
      }
      onBlur={event => {
        field.onBlur();
        if (typeof autocompleteProps?.onBlur === 'function') {
          autocompleteProps.onBlur(event);
        }
      }}
      renderInput={params => (
        <TextField
          name={name}
          required={rules?.required ? true : required}
          label={label}
          {...textFieldProps}
          {...params}
          error={!!error}
          InputLabelProps={{
            ...params.InputLabelProps,
            ...textFieldProps?.InputLabelProps,
          }}
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <>
                {loading ? loadingElement : null}
                {params.InputProps.endAdornment}
              </>
            ),
            ...textFieldProps?.InputProps,
          }}
          inputProps={{
            ...params.inputProps,
            ...textFieldProps?.inputProps,
          }}
          helperText={
            error
              ? typeof customErrorFn === 'function'
                ? customErrorFn(error)
                : error.message
              : textFieldProps?.helperText
          }
          inputRef={handleInputRef}
        />
      )}
    />
  );
});
AutocompleteElement.displayName = 'AutocompleteElement';
export default AutocompleteElement as AutocompleteElementComponent;
