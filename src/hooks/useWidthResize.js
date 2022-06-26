import { useEffect, useState } from 'react';

/**
 * "useWidthResize() returns an object with a width property that updates when the window is resized."
 *
 * Now let's use it in a component:
 * @returns An object with a width property.
 */
const useWidthResize = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  return { width };
};

export default useWidthResize;
