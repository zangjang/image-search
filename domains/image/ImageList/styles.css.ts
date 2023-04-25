import { style } from '@vanilla-extract/css';

export const container = style({
  height: 'calc(100vh - 80px)',
  display: 'flex',
});

export const imageList = style({
  width: '100%',
  height: '100%',
});

export const imageGroup = style({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
});
