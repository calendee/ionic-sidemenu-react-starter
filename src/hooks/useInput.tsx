import { useState } from 'react';
import { InputChangeEventDetail } from '@ionic/core';

const useInput = (initialValue: any) => {
  const [value, setValue] = useState(initialValue);

  // TODO : PR Opportunity : Type the event properly or open bug report on Ionic for it
  const changeValue = (
    e?: CustomEvent<InputChangeEventDetail>,
    value?: string | number,
  ) => {
    if (e) {
      setValue((e.target as HTMLInputElement).value);
    } else {
      // Sometimes, logic in the component might need to reset the value of the input
      setValue(value);
    }
  };

  return [value, changeValue];
};

export default useInput;
