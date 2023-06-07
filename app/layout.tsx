import './globals.css';
import { Open_Sans } from 'next/font/google';
import Navbar from './(shared)/Navbar';
import Footer from './(shared)/Footer';
import TopBar from './(shared)/TopBar';

const openSans = Open_Sans({
  subsets: ["latin"],
});

export const metadata = {
  title: 'Shaka Blog',
  description: 'Blog built with Next JS',
}; 


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={openSans.className} lang="en">
      <body>
        <header>
        <TopBar />
        <Navbar /> 
        </header>
        {children}
        <Footer /> 
      </body>
    </html>
  );
}

