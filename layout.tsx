import type {Metadata} from 'next';
import { Inter, Source_Sans_3 } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const sourceSans = Source_Sans_3({
  subsets: ['latin'],
  variable: '--font-source-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Dr. Mahesh P | Shiva\'s Speciality Clinic - Diabetes Expert in Bangalore',
  description: 'Expert medical care by Dr. Mahesh P at Shiva\'s Speciality Clinic, Bangalore. Specialized General Physician expert in treating diabetics.',
  keywords: ['Dr Mahesh P', 'Shiva Speciality Clinic', 'Diabetes Expert Bangalore', 'General Physician Bangalore', 'Diabetes treatment Bangalore'],
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} ${sourceSans.variable}`}>
      <body suppressHydrationWarning className="font-body bg-[#F8FAFC] text-slate-900">
        {children}
      </body>
    </html>
  );
}
