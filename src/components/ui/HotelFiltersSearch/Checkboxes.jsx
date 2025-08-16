import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import Stack from '@mui/material/Stack';


export default function Checkboxes({ title , arrayOfLabels , label , onChange , setSelectedHotelFacility}) {

  const [selectedValue, setSelectedValue] = React.useState([]);
  const [checked,setChecked] = React.useState(new Array(arrayOfLabels.length).fill(false))

  const handleChange = (event,index) => {
    if (checked[index]) {
      setSelectedValue(prev => {
        const updated = { ...prev };
        delete updated[event.target.value];
        setSelectedHotelFacility(updated)
        return updated;
      });
      onChange();
      
    } else {
      setSelectedValue(prev => {
        const updated = { ...prev, [event.target.value]: event.target.value };
        setSelectedHotelFacility(updated)
        return updated;
      });
      onChange();
    }
    
    setChecked((prev)=>{
      const arr = [...prev];
      arr[index] = !arr[index];
      return(arr)
    })
  };
  
  return (
    <>
      <p style={{marginTop:'15px',color:"gray"}}>{title}</p>
      <Stack sx={{marginTop:"10px",marginBottom:"15px"}}>
        {arrayOfLabels.map((item,index)=>(
          <Stack direction='row' alignItems='center' key={index}>
            <Checkbox
              {...label}
              checked={checked[index]}
              sx={{
                color: "#ff5733",
                '&.Mui-checked': {
                  color: "#ff5733",
                },
              }}
              id={item.label}
              value={item.label}
              onChange={(e)=>handleChange(e,index)}
            />
            <label htmlFor={item.label} style={{cursor:"pointer"}}>{item.label}</label>
          </Stack>
        ))}
        
      </Stack>
    </>
  );
}
