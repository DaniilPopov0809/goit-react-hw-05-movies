import React from 'react';

import { Input, Slider, Wave, Moon, Sun, Label } from './Toggle.styled';

const Toggle = ({ value, onChange }) => {
  
  return (
    <Label htmlFor="toggler">
      <Input
        id="toggler"
        type="checkbox"
        onClick={onChange}
        checked={value}
        readOnly
      />
    
      <Slider />
      <Wave />
      {value && <Moon size={20} />}
      {!value && <Sun size={25} />}
    </Label>
  );
};

export default Toggle;
