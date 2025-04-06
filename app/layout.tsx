import { Geist, Geist_Mono, Roboto } from 'next/font/google';
import type { Metadata } from 'next';
import Navbar from '@/components/navbar';
import './globals.css';

const roboto = Roboto({
  subsets: ['latin'],
});

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Gas Hiền Phát',
  description: 'Chào mừng đến với Gas Hiền Phát',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${roboto.className} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
