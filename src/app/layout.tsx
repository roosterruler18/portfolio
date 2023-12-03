import "./globals.sass";
import Header from "@/components/navbar/Header";
import Footer from "@/components/footer/Footer";

export const metadata = {
  title: "Rooster Ruler",
  description: "Showcase and discover remarkable developer projects",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}