import "./globals.css";
import { Nunito } from "next/font/google";

// componensts
import Navbar from "./components/Navbar/Navbar";
import Modal from "./components/modals/Modal";

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
                <Modal actionLabel="Submit" isOpen />
                <Navbar />
                {children}
            </body>
        </html>
    );
}
