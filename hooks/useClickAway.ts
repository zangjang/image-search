import { type RefObject, useEffect } from 'react';

const defaultEvents = ['mousedown', 'touchstart'];

export default function useClickAway(
  ref: RefObject<HTMLElement | null>,
  onClickAway: (event: Event) => void,
  events: string[] = defaultEvents,
) {
  useEffect(() => {
    const handler = (event: Event) => {
      if (event.target instanceof HTMLElement) {
        const { current: el } = ref;
        el && !el.contains(event.target) && onClickAway(event);
      }
    };

    for (const eventName of events) {
      window.addEventListener(eventName, handler);
    }

    return () => {
      for (const eventName of events) {
        window.removeEventListener(eventName, handler);
      }
    };
  }, [onClickAway, events]);
}
