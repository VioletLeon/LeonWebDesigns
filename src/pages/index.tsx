import Image from 'next/image';
import { Inter } from 'next/font/google';
import LandingPage from '@/components/component/v0-software-consult';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main>
      <LandingPage />
    </main>
  );
}
