import * as React from 'react';
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export default function DatePickerValue({ textLabel , name , value , onChange }) {

  function redestructDate(n) {
    let d = new Date(n)
    onChange({target:{name:name,value:`${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()}`}})
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label={textLabel}
          name={name}
          value={value ? dayjs(value) : null}
          onChange={(newValue) => redestructDate(newValue)}
          
          sx={{
            '.MuiFormLabel-root': {
              '&.Mui-focused': {
                color:"#03314b",
                
              }
            },
            '.MuiInputBase-root' : {
              '&.Mui-focused' : {
                borderColor: "#ababab",
                '.MuiOutlinedInput-notchedOutline' : {
                  borderColor: "#ababab",
                }
              }
            },
            '.MuiOutlinedInput-notchedOutline' : {
              borderColor: "#ababab",
            }
          }}
        />
    </LocalizationProvider>
  );
}