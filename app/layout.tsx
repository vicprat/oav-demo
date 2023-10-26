import "./globals.css";

import { Footer, NavBar } from "@components";

export const metadata = {
  title: "One Action View Front End Demo App",
  description: "One Action View Front End Demo App",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className='relative'>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
