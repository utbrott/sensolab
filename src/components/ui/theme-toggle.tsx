import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { Button } from './button';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';

export function ThemeToggle() {
  const [isMounted, setIsMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const t = theme === 'light' ? 'dark' : 'light';

  return isMounted ? (
    <Button
      variant='default'
      modifier='ghost'
      iconOnly
      onClick={() => setTheme(t)}
    >
      {theme === 'light' ? (
        <SunIcon className='w-5 h-5' />
      ) : (
        <MoonIcon className='w-5 h-5' />
      )}
    </Button>
  ) : null;
}
