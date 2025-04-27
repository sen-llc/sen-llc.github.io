/**
 * スクロールガイド機能
 * クリック時のスムーズスクロールとスクロールに応じたフェードアウト
 */
document.addEventListener("DOMContentLoaded", () => {
  const scrollGuide = document.getElementById("scroll-guide")
  const leadSection = document.querySelector(".lead-section")

  if (!scrollGuide || !leadSection) return

  // スクロールガイドのクリックイベント
  scrollGuide.addEventListener("click", (e) => {
    e.preventDefault()

    // 次のセクションへスムーズスクロール
    const headerHeight = document.querySelector("header")?.offsetHeight || 0
    const targetPosition = leadSection.getBoundingClientRect().top + window.pageYOffset - headerHeight

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    })
  })

  // スクロール時のフェードアウト効果
  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY
    const windowHeight = window.innerHeight

    // スクロール量に応じて透明度を調整
    if (scrollY > 0) {
      const opacity = Math.max(0, 1 - scrollY / (windowHeight * 0.2))
      scrollGuide.style.opacity = opacity.toString()

      // 完全に透明になったら非表示に
      if (opacity <= 0) {
        scrollGuide.style.visibility = "hidden"
      } else {
        scrollGuide.style.visibility = "visible"
      }
    } else {
      scrollGuide.style.opacity = "1"
      scrollGuide.style.visibility = "visible"
    }
  })

  // 背景色に応じてスクロールガイドの色を調整する関数
  function adjustScrollGuideColor() {
    // 背景が暗い場合は白色、明るい場合は深緑色に
    const isDarkBackground = true // 実際の実装では背景の明るさを判定

    if (isDarkBackground) {
      scrollGuide.style.color = "#ffffff"
    } else {
      scrollGuide.style.color = "#2a382f"
    }
  }

  // 初期カラー設定
  adjustScrollGuideColor()

  // リサイズ時にも色を調整
  window.addEventListener("resize", adjustScrollGuideColor)
})
