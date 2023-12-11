import "./globals.sass";
import Header from "@/components/_navbar/Header";
import Footer from "@/components/_footer/Footer";


export const metadata = {
  title: "Rooster Ruler",
  description: "Showcase and discover remarkable developer projects",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className='dark'>
      <body>
        <Header />
        <main className="dark text-foreground bg-background">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}