import "./globals.css";
import { Nunito } from "next/font/google";

// componensts
import Navbar from "./components/Navbar/Navbar";
import RegisterModal from "./components/modals/RegisterModal";
import ToasterProvider from "./providers/ToasterProvider";
import LoginModal from "./components/modals/LoginModal";

const font = Nunito({ subsets: ["latin"] });

export const metadata = {
    title: "Airbnb",
    description: "Airbnb clone.",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={font.className}>
                <ToasterProvider />
                <LoginModal />
                <RegisterModal />
                <Navbar />
                {children}
            </body>
        </html>
    );
}
