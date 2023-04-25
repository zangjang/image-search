import { style } from '@vanilla-extract/css';

export const item = style({
  display: 'flex',
  flexDirection: 'column',
  width: '33%',
  padding: '16px',
});

export const image = style({
  height: 0,
  paddingBottom: '60%',
  backgroundColor: 'lightgray',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
});
