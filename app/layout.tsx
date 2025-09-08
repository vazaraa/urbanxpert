import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Layout from '@/components/Layout';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'UrbanXpert - Professional Home & Business Maintenance Services',
  description: 'Expert home and business maintenance solutions including electrical, plumbing, cleaning, AC repair, pest control, and smart home automation.',
  keywords: 'home maintenance, business services, electrical repair, plumbing, cleaning, AC repair, pest control',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
}