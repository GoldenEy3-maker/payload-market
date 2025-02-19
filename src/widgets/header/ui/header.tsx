import { ThemeToggle } from '@/features/theme'
import Link from 'next/link'

export function Header() {
  return (
    <header className="container mx-auto sticky top-0 flex items-center justify-between gap-x-6">
      <Link href="/">Главная</Link>
      <ThemeToggle />
    </header>
  )
}
