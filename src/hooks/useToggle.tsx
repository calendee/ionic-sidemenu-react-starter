import { useState } from 'react';

const useToggle = (initial = false): [boolean, () => void] => {
  const [open, setOpen] = useState(initial);
  const toggle = () => {
    setOpen(!open);
  };

  return [open, toggle];
};

export default useToggle;
