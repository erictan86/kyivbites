import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: "Baba's Dumplings - Authentic Ukrainian Dumplings",
  description: 'Experience the taste of tradition with our family recipes, crafted with love and served with pride',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}