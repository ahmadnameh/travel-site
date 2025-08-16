import * as React from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { useState } from 'react';

export default function HalfRating({ value ,type="uncotrolled" }) {
  const [atingValue,setRatingValue] = useState(value|0);
  return (
    <Stack spacing={1}>
      <Rating name="half-rating-read" defaultValue={value} precision={0.5} readOnly={type!='controlled'}/>
    </Stack>
  );
}