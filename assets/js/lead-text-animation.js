/**
 * リード文アニメーション
 * スクロールに応じてリード文をフェードイン表示
 */
document.addEventListener("DOMContentLoaded", () => {
  const leadText = document.getElementById("lead-text")

  if (!leadText) return

  // スクロール時のフェードイン
  function checkLeadTextVisibility() {
    const leadTextPosition = leadText.getBoundingClientRect().top
    const windowHeight = window.innerHeight

    // リード文が画面内に入ったらvisibleクラスを追加
    if (leadTextPosition < windowHeight * 0.8) {
      leadText.classList.add("visible")
    }
  }

  // 初期チェック
  checkLeadTextVisibility()

  // スクロール時にチェック
  window.addEventListener("scroll", checkLeadTextVisibility)
})
