import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="w-full">
      {/* Desktop/Tablet Footer */}
      <div className="hidden min-[810px]:flex flex-col items-center h-[124px]">
        <hr className="divider" />
        <div className="flex items-center justify-between w-full max-w-[1200px] px-10 py-0 gap-5 h-full">
          <div className="flex flex-col items-start gap-0">
            <h2 className="footer-logo-text">Contact us</h2>
            <Link href="mailto:hello@kalan.ventures" className="footer-logo-text footer-email">
              hello@kalan.ventures
            </Link>
          </div>
          <div className="flex flex-col items-end gap-1.5">
            <p className="footer-tagline">© 2025 Kalan</p>
            <p className="footer-tagline">All rights reserved.</p>
          </div>
        </div>
      </div>

      {/* Mobile Footer */}
      <div className="min-[810px]:hidden flex flex-col items-center w-full h-[300px] relative">
        <hr className="divider absolute top-0 w-full" />
        <div className="flex flex-col items-center gap-10 h-full justify-center">
          <div className="flex flex-col items-center gap-0">
            <h2 className="footer-logo-text">Contact us</h2>
            <Link href="mailto:hello@kalan.ventures" className="footer-logo-text footer-email">
              hello@kalan.ventures
            </Link>
          </div>
          <div className="flex flex-col items-center gap-1.5">
            <p className="footer-tagline">© 2025 Kalan</p>
            <p className="footer-tagline">All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}