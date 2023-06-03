import { Nunito } from 'next/font/google'

import Navbar from '@/app/components/Navbar/Navbar';
import LoginModal from '@/app/components/modals/LoginModal';
import RegisterModal from '@/app/components/modals/RegisterModal';
import SearchModal from '@/app/components/modals/SearchModal';
import RentModal from '@/app/components/modals/RentModal';

import ToasterProvider from '@/app/providers/ToasterProvider';

import '@/app/globals.css'
import ClientOnly from '@/app/components/ClientOnly';
import Provider from "@/app/components/Provider";
import getCurrentUser from '@/app/functions/getCurrentUser';

export const metadata = {
  title: 'Tripnest',
  description: 'Tripnest booking',
}

const font = Nunito({
  subsets: ['latin'],
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body className={font.className}>
        <Provider>
          <ClientOnly>
            <ToasterProvider />
            <LoginModal />
            <RegisterModal />
            <SearchModal />
            <RentModal />
            <Navbar currentUser={currentUser} />
          </ClientOnly>
          <div className="pb-20 pt-28">
            {children}
          </div>
        </Provider>
      </body>
    </html>
  )
}
