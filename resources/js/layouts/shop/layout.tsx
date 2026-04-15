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
            <main className="flex-1">{children}</main>
            <Footer />
        </div>
    );
}
