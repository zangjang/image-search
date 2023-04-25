import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  width: '100%',
  height: 40,
});

export const input = style({
  flexGrow: 1,
  marginRight: 10,
  border: 0,
  borderRadius: 1,
  fontSize: 16,
});

export const button = style({
  width: 64,
  border: 0,
  borderRadius: 5,
  fontSize: 16,
  background: 'gold',
});
