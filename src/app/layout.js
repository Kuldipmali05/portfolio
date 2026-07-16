import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import LenisProvider from "@/components/providers/LenisProvider";
import Cursor from "@/components/ui/Cursor";

export const metadata = {
  title: "Kuldip Mali | Full Stack Developer",
  description:
    "Portfolio of Kuldip Mali showcasing full-stack, AI, and modern web development projects.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={` h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Cursor />
        <LenisProvider>
          <Navbar />
          {children}
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
