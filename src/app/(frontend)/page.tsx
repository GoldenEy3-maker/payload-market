import type { Metadata } from 'next'

export default function Home() {
  return <main className="container mx-auto">Home Page</main>
}

export const metadata: Metadata = {
  title: 'Home',
  description: 'Home page',
}
