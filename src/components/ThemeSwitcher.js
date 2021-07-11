import { useTheme } from 'next-themes';
import { SunIcon, MoonIcon } from '@heroicons/react/outline';

const ThemeSwitcher = ({ className }) => {
  const { resolvedTheme, setTheme } = useTheme();
  return (
    <button
      aria-label="Switch Theme"
      className={`flex items-center p-3 border-2 dark:border-gray-600 rounded-lg ${className}`}
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
    >
      {resolvedTheme === 'dark' ? (
        <SunIcon className="w-5 h-5 fill-current" />
      ) : (
        <MoonIcon className="w-5 h-5 fill-current" />
      )}
    </button>
  );
};

ThemeSwitcher.displayName = 'ThemeSwitcher';

export default ThemeSwitcher;
