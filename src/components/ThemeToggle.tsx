import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isLight = theme === 'light';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isLight ? 'Switch to dark mode' : 'Switch to light mode'}
      title={isLight ? 'Switch to dark mode' : 'Switch to light mode'}
      className="relative grid h-10 w-10 place-items-center overflow-hidden rounded-full border border-border bg-surface text-foreground shadow-[var(--clay-shadow-soft)] transition hover:-translate-y-0.5"
    >
      <span
        className={`absolute transition-all duration-500 ${
          isLight ? 'translate-y-0 rotate-0 opacity-100' : '-translate-y-4 rotate-90 opacity-0'
        }`}
      >
        <Sun className="h-5 w-5 text-amber-500" />
      </span>
      <span
        className={`absolute transition-all duration-500 ${
          isLight ? 'translate-y-4 -rotate-90 opacity-0' : 'translate-y-0 rotate-0 opacity-100'
        }`}
      >
        <Moon className="h-5 w-5 text-indigo-300" />
      </span>
    </button>
  );
}
