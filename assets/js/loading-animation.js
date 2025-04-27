/**
 * 「巛（せん）」ブランドローディングアニメーション
 * サイト読み込み時に表示される、ブランド名にちなんだアニメーション
 */
document.addEventListener("DOMContentLoaded", () => {
  // ローディング画面が既に表示されているか確認
  const existingLoader = document.querySelector(".loading-screen")
  if (existingLoader) return

  // ローディング画面を作成
  const loadingScreen = document.createElement("div")
  loadingScreen.className = "loading-screen"

  // ローディングコンテナを作成
  const loadingContainer = document.createElement("div")
  loadingContainer.className = "loading-container"

  // シンボルコンテナを作成
  const senSymbol = document.createElement("div")
  senSymbol.className = "sen-symbol"

  // 3つの「＞」要素を作成
  const chevron1 = document.createElement("div")
  chevron1.className = "chevron chevron-1"
  chevron1.textContent = "＞"

  const chevron2 = document.createElement("div")
  chevron2.className = "chevron chevron-2"
  chevron2.textContent = "＞"

  const chevron3 = document.createElement("div")
  chevron3.className = "chevron chevron-3"
  chevron3.textContent = "＞"

  // 最終的な「巛」の文字を作成
  const senFinal = document.createElement("div")
  senFinal.className = "sen-final"
  senFinal.textContent = "巛"

  // 要素を追加
  senSymbol.appendChild(chevron1)
  senSymbol.appendChild(chevron2)
  senSymbol.appendChild(chevron3)
  senSymbol.appendChild(senFinal)
  loadingContainer.appendChild(senSymbol)
  loadingScreen.appendChild(loadingContainer)

  // スクリーンリーダー用のテキスト
  const srText = document.createElement("span")
  srText.className = "sr-only"
  srText.textContent = "ページを読み込んでいます"
  loadingScreen.appendChild(srText)

  // bodyに追加
  document.body.appendChild(loadingScreen)

  // アニメーションのタイミング設定
  const timings = {
    fadeIn: 300, // 「＞」フェードイン: 0.3秒
    secondChevron: 400, // 「＞＞」に変化: 0.4秒から開始
    thirdChevron: 700, // 「＞＞＞」に変化: 0.7秒から開始
    rotate: 1000, // 回転: 1.0秒から開始
    compress: 1400, // 横縮小: 1.4秒から開始
    finalSymbol: 1700, // 「巛」表示: 1.7秒から開始
    fadeOut: 1800, // フェードアウト: 1.8秒から開始
    complete: 2300, // 完了: 2.3秒
  }

  // アニメーション実行
  // 1. 「＞」フェードイン
  chevron1.style.animation = `fadeIn ${timings.fadeIn}ms ease-out forwards`

  // 2. 「＞＞」に変化
  setTimeout(() => {
    chevron2.style.opacity = "1"
  }, timings.secondChevron)

  // 3. 「＞＞＞」に変化
  setTimeout(() => {
    chevron3.style.opacity = "1"
  }, timings.thirdChevron)

  // 4. 回転（＞＞＞→＜＜＜）
  setTimeout(() => {
    chevron1.style.animation = `rotate180 300ms ease-in-out forwards`
    chevron2.style.animation = `rotate180 300ms ease-in-out forwards`
    chevron3.style.animation = `rotate180 300ms ease-in-out forwards`
  }, timings.rotate)

  // 5. 横縮小（巛に変形）
  setTimeout(() => {
    senSymbol.style.animation = `compressX 300ms ease-in-out forwards`
  }, timings.compress)

  // 6. 「巛」表示
  setTimeout(() => {
    chevron1.style.opacity = "0"
    chevron2.style.opacity = "0"
    chevron3.style.opacity = "0"
    senFinal.style.animation = `fadeIn 200ms ease-out forwards`
  }, timings.finalSymbol)

  // 7. フェードアウト
  setTimeout(() => {
    loadingScreen.classList.add("fade-out")
  }, timings.fadeOut)

  // 8. 完了後、ローディング画面を削除
  setTimeout(() => {
    loadingScreen.remove()
  }, timings.complete)

  // ページが完全に読み込まれた場合の処理
  window.addEventListener("load", () => {
    // ページが既に読み込まれている場合は、アニメーションを早めに終了
    setTimeout(() => {
      loadingScreen.classList.add("fade-out")

      setTimeout(() => {
        loadingScreen.remove()
      }, 500)
    }, 300)
  })

  // 5秒以上経過した場合は強制的に終了（フォールバック）
  setTimeout(() => {
    if (document.body.contains(loadingScreen)) {
      loadingScreen.classList.add("fade-out")

      setTimeout(() => {
        loadingScreen.remove()
      }, 500)
    }
  }, 5000)
})
