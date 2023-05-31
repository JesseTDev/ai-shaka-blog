import './globals.css';
import { Open_Sans } from 'next/font/google';
import Navbar from './(shared)/Navbar';
import TopBar from './(shared)/TopBar';
import Footer from './(shared)/Footer';

const openSans = Open_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'Shaka Blog',
  description: 'Blog built with Next JS',
}; 

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={openSans.className}>
      <body>
        <TopBar />
        <Navbar />
        {children}
         <Footer /> 
        </body>
       
    </html>
  )
}
