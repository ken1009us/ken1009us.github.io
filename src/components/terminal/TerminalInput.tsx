import { useRef, useEffect, type KeyboardEvent, type ChangeEvent } from 'react';
import { Prompt } from './TerminalOutput';

interface TerminalInputProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit: (value: string) => void;
  onHistoryNav: (direction: 'up' | 'down') => void;
  onTab: () => void;
  onClear: () => void;
  placeholder?: string;
}

export function TerminalInput({
  value,
  onChange,
  onSubmit,
  onHistoryNav,
  onTab,
  onClear,
  placeholder = 'Type a command...',
}: TerminalInputProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      onSubmit(value);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      onHistoryNav('up');
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      onHistoryNav('down');
    } else if (e.key === 'Tab') {
      e.preventDefault();
      onTab();
    } else if (e.key === 'l' && e.ctrlKey) {
      e.preventDefault();
      onClear();
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className="prompt-line">
      <Prompt />
      <div className="terminal-input-wrapper">
        <input
          ref={inputRef}
          type="text"
          className="terminal-input"
          value={value}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          autoFocus
          autoCapitalize="off"
          autoComplete="off"
          autoCorrect="off"
          spellCheck={false}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
}
