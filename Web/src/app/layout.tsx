import type { Metadata } from 'next';
import './index.css';
import logo from "../assets/images/Logo1.png"
import Navbar from '../components/shared/Navbar/Navbar';
import Footer from '../components/shared/Footer/Footer';

export const metadata: Metadata = {
    title: 'egyptxplore',
    description: 'Explore Egypt',
    icons: { 
        icon: logo.src,
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
