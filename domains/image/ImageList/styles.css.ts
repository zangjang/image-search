import { style } from '@vanilla-extract/css';

export const container = style({
  height: 'calc(100vh - 80px)',
  display: 'flex',
  padding: '0 16px',
});

export const imageList = style({
  width: '100%',
  height: '100%',
});

export const imageGroup = style({
  display: 'flex',
  flexWrap: 'wrap',
});

export const imageItem = style({
  border: '1px solid black',
  width: '20%',
  padding: 16,
  '@media': {
    'screen and (max-width: 1024px)': {
      width: '50%',
    },
    'screen and (max-width: 512px)': {
      width: '100%',
    },
  },
});

export const imageText = style({
  marginTop: 5,
});

export const more = style({
  width: '100%',
  height: 20,
});
