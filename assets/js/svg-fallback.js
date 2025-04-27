/**
 * SVGアイコンのフォールバック処理
 * SVGが正しく読み込まれない場合に代替表示を提供
 */
document.addEventListener("DOMContentLoaded", () => {
  // SVGアイコンの読み込みをチェック
  function checkSvgIcons() {
    const svgIcons = document.querySelectorAll("svg use")

    svgIcons.forEach((icon) => {
      const href = icon.getAttributeNS("http://www.w3.org/1999/xlink", "href")

      if (!href || !document.querySelector(href)) {
        const svg = icon.closest("svg")
        const iconId = href ? href.split("#")[1] : ""

        // アイコンIDに基づいてフォールバックを適用
        if (svg && iconId) {
          svg.classList.add("icon-fallback")

          // アイコンタイプに基づいて代替表示を設定
          switch (iconId) {
            case "icon-home":
              svg.style.backgroundImage = "url('/assets/icons/icon_home.png')"
              break
            case "icon-tool":
              svg.style.backgroundImage = "url('/assets/icons/icon_tool.png')"
              break
            case "icon-cycle":
              svg.style.backgroundImage = "url('/assets/icons/icon_cycle.png')"
              break
            case "icon-sprout":
              svg.style.backgroundImage = "url('/assets/icons/icon_sprout.png')"
              break
            case "icon-check":
              svg.style.backgroundImage = "url('/assets/icons/icon_check.png')"
              break
            case "icon-message":
              svg.style.backgroundImage = "url('/assets/icons/icon_message.png')"
              break
            case "icon-arrow-right":
              svg.style.backgroundImage = "url('/assets/icons/icon_arrow-right.png')"
              break
            case "icon-mail":
              svg.style.backgroundImage = "url('/assets/icons/icon_mail.png')"
              break
            case "icon-ruler":
              svg.style.backgroundImage = "url('/assets/icons/icon_ruler.png')"
              break
            // SNSアイコン
            case "icon-instagram":
              svg.style.backgroundImage = "url('/assets/images/icon-instagram.png')"
              break
            case "icon-line":
              svg.style.backgroundImage = "url('/assets/images/icon-line.png')"
              break
            case "icon-twitter":
              svg.style.backgroundImage = "url('/assets/images/icon-twitter.png')"
              break
            case "icon-facebook":
              svg.style.backgroundImage = "url('/assets/images/icon-facebook.png')"
              break
            default:
              // デフォルトのフォールバック
              svg.style.backgroundColor = "currentColor"
              svg.style.borderRadius = "50%"
          }
        }
      }
    })
  }

  // ページ読み込み完了後にチェック
  window.addEventListener("load", checkSvgIcons)

  // 3秒後に再度チェック（遅延読み込みの場合）
  setTimeout(checkSvgIcons, 3000)
})
