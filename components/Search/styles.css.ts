import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  width: '100%',
  height: 40,
});

export const inputWrapper = style({
  position: 'relative',
  flexGrow: 1,
  marginRight: 10,
});

export const input = style({
  boxSizing: 'border-box',
  width: '100%',
  height: '100%',
  border: 0,
  borderRadius: 1,
  fontSize: 16,
});

export const history = style({
  position: 'absolute',
  width: '100%',
  left: 0,
  backgroundColor: 'white',
});

export const button = style({
  width: 64,
  border: 0,
  borderRadius: 5,
  fontSize: 16,
  backgroundColor: 'gold',
});
