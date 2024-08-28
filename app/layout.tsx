import { Navbar } from "@/components";
import "@mantine/carousel/styles.css";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Dropdown App",
    description: "",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <MantineProvider defaultColorScheme="light">
                    <Navbar />
                    {children}
                </MantineProvider>
            </body>
        </html>
    );
}
