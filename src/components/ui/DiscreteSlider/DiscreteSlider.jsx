import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';


export default function DiscreteSlider({ value = 0, name, textLabel, onChange }) {

    const [valueq, setValueq] = React.useState(value);

    const handleChange = (event, newValue) => {
      setValueq(newValue)
      onChange({target:{name:event.target.name,value:event.target.value}})
    };


  const CustomSlider = styled(Slider)({
    color: '#1976d2', // main track color
    height: 8,
  });
  return (
    <Box sx={{ width: 300 }}>
      <Typography variant="body1" sx={{color:"#03314b"}}>
        {textLabel} : 
        {valueq !== 0 && <span className='price'> {valueq}$</span>}
      </Typography>
      <Slider
        aria-label="Temperature"
        valueLabelDisplay="auto"
        step={100}
        marks
        min={0}
        max={2000}
        name={name}
        onChange={handleChange}
        value={valueq}
        color=''
        sx={{
          color: '#03314b',
          height: 8,
          '& .MuiSlider-track': {
            backgroundColor: '#03314b',
          },
          '& .MuiSlider-rail': {
            backgroundColor: '#e0e0e0',
          },
          '& .MuiSlider-thumb': {
            backgroundColor: '#fff',
            border: '2px solid #ff5722',
          },
          '& .MuiSlider-valueLabel': {
            backgroundColor: '#004871',
            color: 'white',
            fontWeight: 'bold',
          },
        }}
      />
    </Box>
  );
}