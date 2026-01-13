// import { useState, useEffect } from "react";
// import { Metadata } from "next"
// import { Inter, Geist_Mono } from "next/font/google"
// import { Analytics } from "@vercel/analytics/next"
// import "../styles/global.css"

// const _inter = Inter({ subsets: ["latin"] })
// const _geistMono = Geist_Mono({ subsets: ["latin"] })

// export const metadata: Metadata = {
//   title: "North Central Engineering - Fire Alarm & Safety Systems",
//   description:
//     "Professional fire alarm installation, maintenance, and safety solutions. Protecting lives and property with cutting-edge fire safety technology.",
//   generator: "v0.app",
//   icons: {
//     icon: [
//       {
//         url: "/icon-light-32x32.png",
//         media: "(prefers-color-scheme: light)",
//       },
//       {
//         url: "/icon-dark-32x32.png",
//         media: "(prefers-color-scheme: dark)",
//       },
//       {
//         url: "/icon.svg",
//         type: "image/svg+xml",
//       },
//     ],
//     apple: "/apple-icon.png",
//   },
// }

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode
// }>) {
//   return (
//     <html lang="en">
//       <body className={`font-sans antialiased`}>
//         {children}
//         <Analytics />
//       </body>
//     </html>
//   )
// }
