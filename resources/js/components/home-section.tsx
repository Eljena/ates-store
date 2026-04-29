import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

type HomeSectionProps = {
    title: string;
    className?: string;
    children: ReactNode;
};

export default function HomeSection({
    title,
    className,
    children,
}: HomeSectionProps) {
    return (
        <div
            className={cn(
                'flex flex-col items-center gap-5 border-b py-10',
                className,
            )}
        >
            <h2 className="py-5 text-2xl font-semibold">{title}</h2>
            {children}
        </div>
    );
}
