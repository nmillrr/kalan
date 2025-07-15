import Image from 'next/image'
import Link from 'next/link'

interface HeaderProps {
  subtitle?: string
}

export default function Header({ subtitle }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-[#EEEEEE] h-16">
      <div className="flex items-center gap-2.5 px-5 h-full max-[809px]:px-[30px]">
        <Image
          src="/transparent-logo.png"
          alt="Kalan Logo"
          width={20}
          height={20}
          className="flex-shrink-0"
        />
        <Link href="/" className="header-title hover:opacity-80 transition-opacity">
          Kalan
        </Link>
        {subtitle && (
          <>
            <span className="text-[#BCBEC4] font-mono text-sm font-normal mx-1">/</span>
            <span className="header-subtitle">{subtitle}</span>
          </>
        )}
      </div>
    </header>
  )
}