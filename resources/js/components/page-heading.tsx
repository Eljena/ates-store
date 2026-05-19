import { cn } from '@/lib/utils';

interface PageHeadingProps {
    text: string;
    className?: string;
}

export default function PageHeading({ text, className }: PageHeadingProps) {
    return <h1 className={cn('text-3xl font-bold', className)}>{text}</h1>;
}
