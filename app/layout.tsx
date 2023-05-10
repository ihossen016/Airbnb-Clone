import "./globals.css";
import { Nunito } from "next/font/google";

// componensts
import Navbar from "./components/Navbar/Navbar";
import RegisterModal from "./components/modals/RegisterModal";
import ToasterProvider from "./providers/ToasterProvider";
import LoginModal from "./components/modals/LoginModal";

// actions
import { getCurrentUser } from "./actions/getCurrentUser";

const font = Nunito({ subsets: ["latin"] });

export const metadata = {
    title: "Airbnb",
    description: "Airbnb clone.",
};

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const currentUser = await getCurrentUser();

    return (
        <html lang="en">
            <body className={font.className}>
                <ToasterProvider />
                <LoginModal />
                <RegisterModal />
                <Navbar currentUser={currentUser} />
                {children}
            </body>
        </html>
    );
}
