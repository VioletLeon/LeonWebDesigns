import Image from 'next/image';
import { Inter } from 'next/font/google';
import LandingPage from '@/components/component/v0-software-consult';
import { GoogleTagManager } from '@next/third-parties/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main>
      <GoogleTagManager gtmId="G-3HTPSW2YN7" />
      <LandingPage />
    </main>
  );
}
