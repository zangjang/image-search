import { style } from '@vanilla-extract/css';

export const imageWrapper = style({
  position: 'relative',
  width: '100%',
  height: 0,
  paddingTop: '56.25%',
  overflow: 'hidden',
});

export const image = style({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  objectFit: 'fill',
});
