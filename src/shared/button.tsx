import React from 'react';
import clsx from 'clsx';

type ButtonProps = {
  text: string;
  color: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({
  text,
  color,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(
        'text-[14px] md:text-[20px] font-bold py-4 px-7 md:px-14 rounded-[50px]',
        className
      )}
      style={{
        color: color,
      }}
      {...props}
    >
      {text}
    </button>
  );
}
