import { useState } from 'react';

// TODO: PR opportunity: add type for  initialValue
const useInput = (initialValue: any) => {
  const [value, setValue] = useState(initialValue);

  const changeValue = (
    e?: React.ChangeEvent<HTMLInputElement>,
    value?: string | number | [],
  ) => {
    if (e) {
      setValue(e.target.value);
    } else {
      setValue(value);
    }
  };

  return [value, changeValue];
};

export default useInput;
