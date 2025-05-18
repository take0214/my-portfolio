import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import ThemeRegistry from "@/components/theme-registry"
import Navigation from "@/components/navigation"
import { Container, Box } from "@mui/material"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "ポートフォリオ",
  description: "私のポートフォリオサイト",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <ThemeRegistry>
          <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
            <Navigation />
            <Container component="main" sx={{ py: 4, flex: 1 }}>
              {children}
            </Container>
            <Box component="footer" sx={{ py: 3, textAlign: "center", borderTop: 1, borderColor: "divider" }}>
              <Container>
                <Box sx={{ color: "text.secondary", fontSize: "0.875rem" }}>
                  © {new Date().getFullYear()} ポートフォリオサイト
                </Box>
              </Container>
            </Box>
          </Box>
        </ThemeRegistry>
      </body>
    </html>
  )
}
