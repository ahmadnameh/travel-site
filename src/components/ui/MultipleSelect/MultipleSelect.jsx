import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';


export default function MultipleSelect({ data, initValue = "", name, textLabel, onChange }) {

  const[value,setValue] = useState(initValue)

  const handleChange = (event) => {
    onChange({target:{name:event.target.name,value:event.target.value}})
    setValue(event.target.value)
  };

  return (
    <div>
      <FormControl 
      sx={{
        width:"100%",
        '.MuiFormLabel-root': {
          '&.Mui-focused': {
            color:"#03314b",
            
          }
        },
        '.MuiInputBase-root' : {
          '&.Mui-focused' : {
            borderColor: "#ababab",
            '.MuiOutlinedInput-notchedOutline' : {
              borderColor:"#ababab"
            }
          }
        },
        '.MuiOutlinedInput-notchedOutline' : {
          borderColor:"#ababab",
        }
      }}>
        <InputLabel id="demo-multiple-name-label">{textLabel}</InputLabel>
        <Select
          required
          labelId="demo-name-label"
          id="demo-multiple-name"
          name={name}
          value={value}
          onChange={handleChange}
          input={<OutlinedInput label="Name" />}
        >
          {data[0]&&data.map((item,index) => (
            <MenuItem
              key={index}
              value={item.name}
            >
              {item.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
