import type { Metadata } from 'next';
import './globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '@/components/Footer';
import NavBar from '@/components/Navbar';
import Providers from './providers';

export const metadata: Metadata = {
  title: 'Campus Plate Mate',
  description: 'Aiming to reduce food waste campus wide.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className=""
        style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}
      >
        <Providers>
          <NavBar />
          <main style={{ flexGrow: 1 }}>
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
