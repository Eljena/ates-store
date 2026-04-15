import type { ReactNode } from 'react';

type HomeSectionProps = {
    title: string;
    children: ReactNode;
};

export default function HomeSection({ title, children }: HomeSectionProps) {
    return (
        <div className="flex flex-col items-center gap-5 border-b py-10">
            <h2 className="py-5 text-2xl font-semibold">{title}</h2>
            {children}
        </div>
    );
}
