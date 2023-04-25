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

export const imageItem = style({
  width: '20%',
  padding: '16px',
  '@media': {
    'screen and (max-width: 1024px)': {
      width: '50%',
    },
    'screen and (max-width: 512px)': {
      width: '100%',
    },
  },
});
