/**
 * スクロール効果
 * スクロールに応じた背景色変更とリード文表示
 */
document.addEventListener("DOMContentLoaded", () => {
  const firstView = document.querySelector(".first-view")
  const leadSection = document.querySelector(".lead-section")

  if (!firstView || !leadSection) return

  // スクロール位置に応じた処理
  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY
    const windowHeight = window.innerHeight

    // ファーストビューのスクロール効果
    if (scrollY > 0) {
      const opacity = Math.max(0, 1 - scrollY / (windowHeight * 0.5))
      firstView.style.opacity = opacity
    } else {
      firstView.style.opacity = 1
    }

    // リード文のフェードイン
    if (scrollY > windowHeight * 0.3) {
      leadSection.classList.add("aos-animate")
    }
  })

  // リード文の初期状態（非表示）
  leadSection.style.opacity = 0
  leadSection.style.transform = "translateY(30px)"
  leadSection.style.transition = "opacity 0.8s ease-out, transform 0.8s ease-out"

  // AOS属性の追加
  leadSection.setAttribute("data-aos", "fade-up")
  leadSection.setAttribute("data-aos-duration", "800")
  leadSection.setAttribute("data-aos-offset", "200")
})
