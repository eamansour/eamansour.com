import type { Metadata } from 'next';
import '@/styles/globals.css';
import Footer from '@/components/Footer';

const title = 'Eamonn Mansour | Portfolio';
const description = 'Eamonn Mansour, Software Engineer';
const metadataUrl = 'https://eamansour.com';
const image = '/images/EM.png';

export const metadata: Metadata = {
  metadataBase: new URL(metadataUrl),
  title: title,
  description: description,
  openGraph: {
    title: title,
    description: description,
    images: image,
    url: metadataUrl,
  },
  twitter: {
    title: title,
    description: description,
    images: image,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
