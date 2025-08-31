import * as React from 'react';

import { cn } from '@/lib/utils';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  inputClassName?: string;
  startAdornment?: React.ReactElement;
  endAdornment?: React.ReactElement;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    { className, inputClassName, type, startAdornment, endAdornment, ...props },
    ref,
  ) => {
    return (
      <div className={cn('relative flex items-center', className)}>
        {startAdornment && (
          <div className="absolute left-2">{startAdornment}</div>
        )}
        <input
          type={type}
          {...(type === 'number' && { onWheel: (e) => e.currentTarget.blur() })}
          className={cn(
            'flex h-9 w-full rounded-md border border-input bg-transparent dark:bg-input/30 px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
            startAdornment && 'pl-8', // Adjust padding for startAdornment
            endAdornment && 'pr-8', // Adjust padding for endAdornment,
            inputClassName,
          )}
          ref={ref}
          {...props}
        />
        {endAdornment}
      </div>
    );
  },
);
Input.displayName = 'Input';

export { Input };
