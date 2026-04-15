import type { ReactNode } from 'react';
import Footer from '@/components/shop/footer';
import Header from '@/components/shop/header';

type Props = {
    children: ReactNode;
};

export default function Layout({ children }: Props) {
    return (
        <div className="flex min-h-screen flex-col bg-white">
            <Header />
            <main className="flex-1">
                <div className="mx-auto max-w-7xl px-4 py-6">{children}</div>
            </main>
            <Footer />
        </div>
    );
}
