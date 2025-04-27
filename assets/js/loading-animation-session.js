/**
 * ローディングアニメーションのセッション管理
 * 同一セッション内での再訪問時にはアニメーションをスキップする
 */
document.addEventListener("DOMContentLoaded", () => {
  // セッションストレージをチェック
  const hasVisited = sessionStorage.getItem("sen-animation-shown")

  // 初回訪問の場合のみアニメーションを表示
  if (!hasVisited) {
    // ローディングアニメーションを実行
    const loadingScript = document.createElement("script")
    loadingScript.src = "/assets/js/loading-animation.js"
    document.head.appendChild(loadingScript)

    // セッションストレージに記録
    sessionStorage.setItem("sen-animation-shown", "true")
  }
})
