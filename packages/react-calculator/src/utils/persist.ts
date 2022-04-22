import { useEffect } from 'react';
import { Path, UseFormWatch } from 'react-hook-form';
import { UseFormSetValue } from 'react-hook-form/dist/types/form';

export interface PersistOptions {
  exclude?: Path<any>[];
  include?: string[];
  onDataRestored?: (data: any) => void;
  validate?: boolean;
  dirty?: boolean;
}

const useFormPersist = (
  storageKey: string,
  {
    watch,
    setValue,
  }: { watch: UseFormWatch<any>; setValue: UseFormSetValue<any> },
  {
    exclude = [],
    onDataRestored,
    validate = false,
    dirty = false,
  } = {} as PersistOptions,
) => {
  useEffect(() => {
    const rawData =
      sessionStorage.getItem(storageKey) || localStorage.getItem(storageKey);
    if (rawData) {
      const data = JSON.parse(rawData);
      const dataRestored = {} as any;

      Object.keys(data).forEach(key => {
        const shouldSet = !exclude.includes(key);
        if (shouldSet) {
          dataRestored[key] = data[key];
          setValue(key, data[key], {
            shouldValidate: validate,
            shouldDirty: dirty,
          });
        }
      });

      if (onDataRestored) {
        onDataRestored(dataRestored);
      }
    }
  }, [storageKey]);

  useEffect(() => {
    const subscription = watch(value => {
      sessionStorage.setItem(storageKey, JSON.stringify(value));
      localStorage.setItem(storageKey, JSON.stringify(value));
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  return {
    clear: () => {
      sessionStorage.removeItem(storageKey);
      localStorage.removeItem(storageKey);
    },
  };
};

export default useFormPersist;
