import { ReactNode } from "react";
import Header from '@/components/shop/header';
import Footer from '@/components/shop/footer';

type Props = {
    children: ReactNode;
};

export default function Layout({children}: Props) {
    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Header />
            <main className="flex-1">
                {children}
            </main>
            <Footer />
        </div>
    )
}