/**
 * ページトップへ戻るボタンの機能
 * スクロール位置に応じてボタンの表示/非表示を切り替え、
 * クリック時にページトップへスムーススクロールする
 */
document.addEventListener("DOMContentLoaded", () => {
  const backToTopButton = document.getElementById("back-to-top")

  if (!backToTopButton) return

  // スクロール位置に応じてボタンの表示/非表示を切り替え
  function toggleBackToTopButton() {
    if (window.scrollY > 300) {
      backToTopButton.classList.add("visible")
      backToTopButton.style.opacity = "1"
      backToTopButton.style.pointerEvents = "auto"
    } else {
      backToTopButton.classList.remove("visible")
      backToTopButton.style.opacity = "0"
      backToTopButton.style.pointerEvents = "none"
    }
  }

  // 初期状態では非表示
  backToTopButton.style.opacity = "0"
  backToTopButton.style.pointerEvents = "none"

  // スクロールイベントのリスナーを追加
  window.addEventListener("scroll", () => {
    // スクロールのパフォーマンス最適化のためにrequestAnimationFrameを使用
    window.requestAnimationFrame(toggleBackToTopButton)
  })

  // ボタンクリック時の処理
  backToTopButton.addEventListener("click", (e) => {
    e.preventDefault()

    // スムーススクロールでページトップへ
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })

    // フォーカスをページの先頭に移動
    document.querySelector("header").focus()
  })

  // キーボードアクセシビリティ対応
  backToTopButton.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault()
      backToTopButton.click()
    }
  })

  // 初期チェック
  toggleBackToTopButton()
})
