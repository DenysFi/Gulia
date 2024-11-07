import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function cn(...args: any[]) {
  return twMerge(clsx(...args));
}
