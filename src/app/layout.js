import { Inter } from "next/font/google";
import "./globals.css";
import App from "./components/App";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Carrito de compras",
    description: "Proeba realizada por jorgegwd.com",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <App>{children}</App>
            </body>
        </html>
    );
}
