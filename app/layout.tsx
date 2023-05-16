import "./globals.css";
import { Nunito } from "next/font/google";

// componensts
import Navbar from "./components/Navbar/Navbar";
import ToasterProvider from "./providers/ToasterProvider";
import LoginModal from "./components/modals/LoginModal";
import RegisterModal from "./components/modals/RegisterModal";
import RentModal from "./components/modals/RentModal";
import SearchModal from "./components/modals/SearchModal";

// actions
import { getCurrentUser } from "./actions/getCurrentUser";

const font = Nunito({ subsets: ["latin"] });

export const metadata = {
    title: "Airbnb Clone",
    description: "Airbnb clone.",
};

export const dynamic = "force-dynamic";
// 'auto' | 'force-dynamic' | 'error' | 'force-static'

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
                <RentModal />
                <SearchModal />
                <LoginModal />
                <RegisterModal />
                <Navbar currentUser={currentUser} />

                <div className="pb-20 pt-28">{children}</div>
            </body>
        </html>
    );
}
