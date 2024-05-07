import { Poppins } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Header from "@/components/header";
import Footer from "@/components/footer";
import MenuButton from "@/components/menuButton";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
          integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body
        className={cn(
          `${poppins.className} bg-fixed bg-gradient-to-br from-slate-800 via-slate-700 to-slate-500`,
        )}
      >
        <main className="h-screen w-screen flex items-center justify-center">
          <div className="w-full max-w-6xl h-full lg:max-h-[55rem] flex flex-col justify-between p-7 md:p-14">
            <Header />

            <div className="flex flex-col overflow-hidden h-full">
              {children}
            </div>

            <div className="space-y-6 p-2 border-t border-california-100/30">
              <MenuButton />
              <Footer />
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
