import { type Metadata } from "next";
import {
  ClerkProvider,
  GoogleOneTap,
  // SignInButton,
  // SignUpButton,
  // SignedIn,
  // SignedOut,
  // UserButton,
} from "@clerk/nextjs";
import { Outfit } from "next/font/google";
import "./globals.css";
// import ResponsiveNav from "@/_components/Home/NavBar/ResponsiveNav";
// import Footer from "@/_components/Home/Footer/Footer";

const font = Outfit({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vishnu Bus Transportation",
  description: "Online Seat Reservation Platform",
  icons: "/logo.jpeg", // Ensure this path is correct
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <GoogleOneTap />
      <html lang="en">
        <head>
          <link rel="icon" href="/logo1.png" type="image/png" />
        </head>
        <body className={`${font.className} antialiased`}>
          {/* <ResponsiveNav /> */}
          {children}
          {/* <Footer /> */}
        </body>
      </html>
    </ClerkProvider>
  );
}
