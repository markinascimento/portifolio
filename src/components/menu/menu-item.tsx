'use client'

// -> ReactJS
import type { ElementType } from 'react';

// -> NextJS
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// -> Icons lib

// -> Types
interface IMenuItemProps {
  name: string;
  path: string;
  Icon: ElementType;
}

export function MenuItem({ name, path, Icon }: IMenuItemProps) {
  const pathnameRendering = usePathname();

  const isActive = pathnameRendering === path;

  return (
    <li className={cn(
      'flex items-center justify-center min-h-9 px-4 rounded-full text-white',
      isActive ? 'bg-pallet-red opacity-100' : 'bg-transparent opacity-60'
    )}>
      <Link href={path} className='flex gap-2 items-center'>
        <Icon className='size-5' strokeWidth={2.5} />
        <span className='font-semibold text-lg'> {name} </span>
      </Link>
    </li>
  )
}
