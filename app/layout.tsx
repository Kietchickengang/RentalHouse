import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Nhà Trọ Dương Thanh Sơn - Tiện nghi & An ninh Quận 12',
  description: 'Nhà trọ Dương Thanh Sơn tại Quận 12, TP.HCM. Diện tích 20m2 có gác, wifi miễn phí, camera an ninh 24/7. Liên hệ ngay Mr. Sơn 0776159120.',
  keywords: ['nhà trọ quận 12', 'phòng trọ an phú đông', 'thuê phòng trọ giá rẻ', 'nhà trọ Dương Thanh Sơn'],
  authors: [{ name: 'Dương Thanh Sơn' }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi" className={`${inter.variable}`}>
      <body suppressHydrationWarning className="font-sans antialiased text-slate-900 bg-slate-50">
        {children}
      </body>
    </html>
  );
}
