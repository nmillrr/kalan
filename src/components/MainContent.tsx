import Image from 'next/image'
import Link from 'next/link'

export default function MainContent() {
  return (
    <div className="flex flex-col items-center flex-1">
      <div className="w-full max-w-[680px] px-10 py-20 flex flex-col gap-10 max-[999px]:max-w-[680px] max-[999px]:px-10 max-[999px]:py-20 max-[809px]:max-w-full max-[809px]:px-5 max-[809px]:py-10 max-[809px]:gap-[30px]">
        {/* Header Section */}
        <div className="flex flex-col gap-5 max-w-[500px] max-[809px]:max-w-[300px]">
          <Image
            src="/transparent-logo.png"
            alt="Kalan Logo"
            width={48}
            height={48}
            className="flex-shrink-0"
          />
          <h1 className="h1">Kalan</h1>
          <p className="body-text">
            We incubate small businesses, low-budget founders, and nonprofit organizations. Check out our client work{' '}
            <Link href="#" className="link-blue">↗</Link>
          </p>
        </div>

        {/* Case Studies Section */}
        <div className="flex flex-col gap-10">
          <hr className="divider" />
          
          <div className="flex flex-col gap-2.5">
            <h2 className="h2">Case Studies</h2>
            <div className="flex flex-col gap-2.5">
              <Link href="#" className="body-text link-blue">
                🌍 USF Study Abroad
              </Link>
              <Link href="#" className="body-text link-blue">
                🔯 Rabbi Lazowski
              </Link>
              <Link href="#" className="body-text link-blue">
                💚 WeHa Washes
              </Link>
            </div>
          </div>

          <hr className="divider" />

          <div className="flex flex-col gap-2.5">
            <h2 className="h2">About</h2>
            <Link href="#" className="body-text link-blue">
              ⭐ Our Mission
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}