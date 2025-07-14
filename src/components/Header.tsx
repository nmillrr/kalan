import Image from 'next/image'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-[#EEEEEE] h-16">
      <div className="flex items-center gap-2.5 px-5 h-full">
        <Image
          src="/transparent-logo.png"
          alt="Kalan Logo"
          width={20}
          height={20}
          className="flex-shrink-0"
        />
        <h1 className="header-title">Kalan</h1>
      </div>
    </header>
  )
}