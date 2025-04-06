import Link from "next/link"

export function Footer() {
  return (
    <footer className="py-12 text-white footer-modern">
      <div className="container mx-auto px-4">
        <div className="mb-8 flex flex-col justify-between gap-8 md:flex-row md:items-start">
          <div>
            <Link href="/" className="flex items-center">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E3%82%A2%E3%82%BB%E3%83%83%E3%83%88%204-my6jh9WIW1WcjnPFwcyjBoscmIofbw.png"
                alt="sen llc logo"
                className="h-8 w-auto mr-2 brightness-0 invert"
              />
              <span className="text-xl font-medium">sen llc</span>
            </Link>
            <p className="mt-2 text-sm text-white/70 tracking-wider">住む、つくる、手に入れる。</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-sm font-bold mb-4 uppercase tracking-wider">サービス</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/rental" className="text-sm text-white/70 hover:text-white transition-colors">
                    育てる住まい
                  </Link>
                </li>
                <li>
                  <Link href="/renovation" className="text-sm text-white/70 hover:text-white transition-colors">
                    リノベーション
                  </Link>
                </li>
                <li>
                  <Link href="/projects" className="text-sm text-white/70 hover:text-white transition-colors">
                    施工事例
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-sm text-white/70 hover:text-white transition-colors">
                    サイトについて・運営会社
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-sm text-white/70 hover:text-white transition-colors">
                    お問い合わせ
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-bold mb-4 uppercase tracking-wider">フォローする</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-white/70 hover:text-white transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-instagram"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </a>
                <a href="#" className="text-white/70 hover:text-white transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center text-sm text-white/70">
          <p>© {new Date().getFullYear()} 合同会社巛（sen llc）All Rights Reserved.</p>
          <div className="mt-2 flex justify-center space-x-4">
            <Link href="/privacy" className="text-white/70 hover:text-white transition-colors">
              プライバシーポリシー
            </Link>
            <Link href="/terms" className="text-white/70 hover:text-white transition-colors">
              利用規約
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

