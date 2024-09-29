import { Inter } from 'next/font/google';
import './globals.css';
import Sidebar from '@/components/Sidebar';
import News from '@/components/News';

const inter = Inter({
  subsets: ['latin'],
});

export const metadata = {
  title: 'X Clone',
  description: 'Clone of X using Next.js 14',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`${inter.className} antialiased`}>
        <div className='mx-auto flex max-w-6xl justify-between'>
          <div>
            <Sidebar />
          </div>

          <div>{children}</div>

          <div>
            <News />
          </div>
        </div>
      </body>
    </html>
  );
}
