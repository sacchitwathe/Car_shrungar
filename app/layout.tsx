import { Footer, Navbar } from '@/components'
import './globals.css'



export const metadata = {
  title: 'Car Shrungar',
  description: 'Discover professionally tested and approved cars in your city.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative">
      <Navbar />
        {children}</body>
      <Footer />
    </html>
  )
}
