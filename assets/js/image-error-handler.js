/**
 * 画像エラーハンドラ
 * 画像の読み込みに失敗した場合にプレースホルダー画像を表示する
 */
document.addEventListener("DOMContentLoaded", () => {
  // 画像エラーハンドラをグローバルに設定
  window.handleImageError = (img) => {
    console.warn("画像の読み込みに失敗しました:", img.src)
    // 既にプレースホルダーの場合は無限ループを防止
    if (img.src.includes("placeholder.png")) return

    // site.baseurlを取得（メタタグから）
    const baseUrl = document.querySelector('meta[name="baseurl"]')?.getAttribute("content") || ""

    // プレースホルダー画像のパスを設定
    img.src = baseUrl + "/assets/images/placeholder.png"

    // 代替テキストを設定（存在しない場合）
    if (!img.alt) img.alt = "画像が見つかりません"

    // エラーハンドラを削除して無限ループを防止
    img.onerror = null

    return true
  }

  // 既存の画像にエラーハンドラを追加
  document.querySelectorAll("img").forEach((img) => {
    if (!img.hasAttribute("data-error-handled")) {
      img.setAttribute("data-error-handled", "true")
      img.onerror = function () {
        return window.handleImageError(this)
      }
    }
  })

  // 動的に追加される画像を監視
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.type === "childList") {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeName === "IMG" && !node.hasAttribute("data-error-handled")) {
            node.setAttribute("data-error-handled", "true")
            node.onerror = function () {
              return window.handleImageError(this)
            }
          } else if (node.querySelectorAll) {
            node.querySelectorAll("img:not([data-error-handled])").forEach((img) => {
              img.setAttribute("data-error-handled", "true")
              img.onerror = function () {
                return window.handleImageError(this)
              }
            })
          }
        })
      }
    })
  })

  // 監視を開始
  observer.observe(document.body, {
    childList: true,
    subtree: true,
  })

  // 404エラーの統計情報を収集（オプション）
  window.imageErrorStats = {
    errors: 0,
    paths: [],
  }

  // 画像エラーをキャプチャするグローバルハンドラ
  window.addEventListener(
    "error",
    (e) => {
      if (e.target && e.target.tagName === "IMG") {
        window.imageErrorStats.errors++
        window.imageErrorStats.paths.push(e.target.src)

        // 開発モードでのみコンソールに詳細を出力
        if (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1") {
          console.group("画像エラー詳細")
          console.warn("画像パス:", e.target.src)
          console.warn("代替テキスト:", e.target.alt)
          console.warn("発生場所:", e.target.closest("section, header, footer")?.tagName || "不明")
          console.groupEnd()
        }
      }
    },
    true,
  )
})
