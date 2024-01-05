import '@/app/ui/global.css';
import { mountercarlo } from './ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${mountercarlo.className} antialissed`} >{children}</body>
    </html>
  );
}
