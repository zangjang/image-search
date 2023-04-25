import { style } from '@vanilla-extract/css';

export const container = style({
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

export const imageWrapper = style({
  position: 'relative',
  paddingTop: '56.25%',
  overflow: 'hidden',
});

export const image = style({
  position: 'absolute',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  maxWidth: '100%',
  height: 'auto',
});
