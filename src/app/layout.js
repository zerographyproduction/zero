import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';

export const metadata = {
  title: 'Zerography Production',
  description: 'Bringing your vision to life through stunning visuals',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' className='scroll-smooth'>
      <head>
        <link
          rel='icon'
          href='/src/assets/favicon/favicon.ico'
          type='image/x-icon'
        />
        <link
          rel='shortcut icon'
          href='/src/assets/favicon/favicon.ico'
          type='image/x-icon'
        />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/src/assets/favicon/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/src/assets/favicon/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/src/assets/favicon/favicon-16x16.png'
        />
        <link rel='manifest' href='/favicon/site.webmanifest' />
        <link
          rel='mask-icon'
          href='/src/assets/favicon/safari-pinned-tab.svg'
          color='#5bbad5'
        />
        <meta name='msapplication-TileColor' content='#ffffff' />
        <meta name='theme-color' content='#ffffff' />
      </head>
      <body className='bg-black'>
        <div className='min-h-screen flex flex-col'>
          <Header />
          <main className='flex-grow pt-24'>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
