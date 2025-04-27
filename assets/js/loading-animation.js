/**
 * ローディングアニメーションのセッション管理
 * 同一セッション内での再訪問時にはアニメーションをスキップする
 */
document.addEventListener("DOMContentLoaded", () => {
  // セッションストレージをチェック
  const hasVisited = sessionStorage.getItem("sen-animation-shown")

  // 初回訪問の場合のみアニメーションを表示
  if (!hasVisited) {
    // アニメーションを実行する代わりに、直接セッションストレージに記録
    sessionStorage.setItem("sen-animation-shown", "true")

    // ローディングアニメーションのスクリプトは直接実行せず、
    // 必要な要素が存在する場合のみ実行する
    const loadingScreen = document.querySelector(".loading-screen")
    if (loadingScreen) {
      setTimeout(() => {
        loadingScreen.classList.add("fade-out")
        setTimeout(() => {
          loadingScreen.style.display = "none"
        }, 500)
      }, 2000)
    }
  }
})
