/**
 * ローディングアニメーションのセッション管理
 * 同一セッション内での再訪問時にはアニメーションをスキップする
 */
document.addEventListener("DOMContentLoaded", () => {
  // ローディング画面の要素を取得
  const loadingScreen = document.querySelector(".loading-screen")

  // ローディング画面が存在しない場合は処理を終了
  if (!loadingScreen) {
    console.warn("ローディング画面の要素が見つかりません")
    return
  }

  // セッションストレージをチェック
  const hasVisited = sessionStorage.getItem("sen-animation-shown")

  // モーション軽減設定をチェック
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches

  // 初回訪問かつモーション軽減が無効の場合のみアニメーションを表示
  if (!hasVisited && !prefersReducedMotion) {
    // アニメーションを実行
    console.log("ローディングアニメーションを表示します")

    // アニメーションのスタイルを設定
    const chevron1 = document.querySelector(".chevron-1")
    const chevron2 = document.querySelector(".chevron-2")
    const chevron3 = document.querySelector(".chevron-3")
    const senFinal = document.querySelector(".sen-final")

    if (chevron1 && chevron2 && chevron3 && senFinal) {
      // アニメーションシーケンスを開始
      setTimeout(() => {
        chevron1.style.animation = "fadeIn 0.5s forwards"
        chevron1.style.opacity = "1"
      }, 300)

      setTimeout(() => {
        chevron2.style.animation = "fadeIn 0.5s forwards"
        chevron2.style.opacity = "1"
      }, 800)

      setTimeout(() => {
        chevron3.style.animation = "fadeIn 0.5s forwards"
        chevron3.style.opacity = "1"
      }, 1300)

      setTimeout(() => {
        chevron1.style.animation = "fadeOut 0.3s forwards"
        chevron2.style.animation = "fadeOut 0.3s forwards"
        chevron3.style.animation = "fadeOut 0.3s forwards"
      }, 1800)

      setTimeout(() => {
        senFinal.style.animation = "fadeIn 0.5s forwards"
        senFinal.style.opacity = "1"
      }, 2100)
    }

    // アニメーション終了後にローディング画面をフェードアウト
    setTimeout(() => {
      loadingScreen.classList.add("fade-out")
      setTimeout(() => {
        loadingScreen.style.display = "none"
      }, 500)

      // セッションストレージに記録
      sessionStorage.setItem("sen-animation-shown", "true")
    }, 3000)
  } else {
    // 再訪問またはモーション軽減が有効の場合はアニメーションをスキップ
    console.log(
      prefersReducedMotion
        ? "モーション軽減が有効のためアニメーションをスキップします"
        : "再訪問のためアニメーションをスキップします",
    )
    loadingScreen.style.display = "none"
  }
})
