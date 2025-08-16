import * as React from 'react';
import Radio from '@mui/material/Radio';
import Stack from '@mui/material/Stack';


export default function RadioButtons({ title , arrayOfLabels , label , onChange }) {
  const [selectedValue, setSelectedValue] = React.useState();

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
    onChange({target:{name:label,value:event.target.value}})
  };

  const controlProps = (item) => ({
    checked: selectedValue == item,
    onChange: handleChange,
    value: item,
    name: 'color-radio-button-demo',
    inputProps: { 'aria-label': item },
  });


  return (
    <>
    <p style={{marginTop:'15px',color:"gray"}}>{title}</p>
    <Stack sx={{marginTop:"10px",marginBottom:"15px"}}>
      {arrayOfLabels.map((item,index)=>(
        <Stack direction="row" alignItems='center' key={index}>
        <Radio
          {...controlProps(item.value)}
          sx={{
            color: "#ff5733",
            '&.Mui-checked': {
              color: "#ff5733",
            },
          }}
          id={item.label+index}
        />
        <label htmlFor={item.label+index} style={{cursor: "pointer"}}>{item.label}</label>
        </Stack>
      ))}
    </Stack>
    </>
  );
}