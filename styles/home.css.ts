import { style, styleVariants } from '@vanilla-extract/css';

export const header = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  height: 80,
  padding: '0 16px',
  gap: 10,
});

export const sortContainer = style({
  display: 'flex',
  gap: 10,
});

const baseButton = style({
  width: 64,
  height: 20,
  border: 0,
  borderRadius: 5,
  backgroundColor: 'white',
});

export const button = styleVariants({
  normal: [baseButton],
  select: [baseButton, { backgroundColor: 'gold' }],
});
