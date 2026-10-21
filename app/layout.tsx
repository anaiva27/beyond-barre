import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/assets/styles/globals.css";
import { APP_NAME, APP_DESCRIPTION, SERVER_URL } from "@/lib/constants";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Barre & Beyond",
	description: "Ageless body with Barre & Beyond.",
	metadataBase: new URL(SERVER_URL),
	openGraph: {
		title: "Barre & Beyond",
		description: "Ageless body with Barre & Beyond.",
		siteName: "Barre & Beyond",
		locale: "en_US",
		type: "website",
		images: [
			{
				url: "/og-image.png", // Located in your /public folder
				width: 1200,
				height: 630,
				alt: "Preview image for Barre & Beyond",
			},
		],
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${inter.className} antialiased`}>{children}</body>
		</html>
	);
}
