import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import AuthProvider from '../context/AuthProvider';
import { Toaster } from "@/components/ui/sonner"
import Navbar from '@/components/Navbar';
import { LoaderProvider } from '@/context/LoaderContext';
import GlobalLoader from '@/components/GlobalLoader';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Iqbals Project',
  description: 'Real feedback from real people.',
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default async function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" >
      <AuthProvider>
        <body className={inter.className}>
          <Navbar />
          <LoaderProvider>
          <GlobalLoader/>
          {children}
          </LoaderProvider>
          <Toaster />
        </body>
      </AuthProvider>
    </html>
  );
}