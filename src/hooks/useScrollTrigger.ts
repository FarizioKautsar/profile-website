import React from 'react';

type Trigger =
  | { px: number }
  | { percent: number };

export default function useScrollTrigger(trigger: Trigger) {
  const [hit, setHit] = React.useState(false);

  React.useEffect(() => {
    if (typeof window === 'undefined') return;

    const handler = () => {
      const top = window.scrollY || document.documentElement.scrollTop || 0;
      const doc = document.documentElement;
      const docHeight = doc.scrollHeight - window.innerHeight;

      const threshold =
        'px' in trigger
          ? trigger.px
          : Math.max(0, Math.min(1, trigger.percent / 100)) * docHeight;

      if (top >= threshold) setHit(true);
    };

    handler();
    window.addEventListener('scroll', handler, { passive: true });
    window.addEventListener('resize', handler);
    return () => {
      window.removeEventListener('scroll', handler);
      window.removeEventListener('resize', handler);
    };
  }, [trigger]);

  return hit;
}