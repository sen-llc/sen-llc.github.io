// SVGアイコンのパスを修正
document.addEventListener("DOMContentLoaded", () => {
  // SVGをサポートしているかどうかをチェック
  if (!!document.createElementNS && !!document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect) {
    // SVGサポートあり、パスの修正を行う
    fixSvgPaths()
    return
  }

  // SVGをサポートしていない場合、フォールバック処理を実行
  var elements = document.querySelectorAll("svg use")
  const baseUrl = document.querySelector('meta[name="baseurl"]')?.getAttribute("content") || ""

  for (var i = 0; i < elements.length; i++) {
    var element = elements[i]
    var href = element.getAttributeNS("http://www.w3.org/1999/xlink", "href")

    if (href && href.indexOf("icon-set.svg") > -1) {
      // SVGアイコンのパスを修正 - GitHub Pages用に最適化
      var iconId = href.split("#")[1]
      var newHref = baseUrl + "/assets/icons/icon-set.svg#" + iconId
      element.setAttributeNS("http://www.w3.org/1999/xlink", "href", newHref)
    }
  }
})

// SVGパスを修正する関数 - GitHub Pages用に最適化
function fixSvgPaths() {
  var elements = document.querySelectorAll("svg use")
  const baseUrl = document.querySelector('meta[name="baseurl"]')?.getAttribute("content") || ""

  for (var i = 0; i < elements.length; i++) {
    var element = elements[i]
    var href = element.getAttributeNS("http://www.w3.org/1999/xlink", "href")

    if (href && href.indexOf("icon-set.svg") > -1) {
      // 相対パスを絶対パスに変換
      var iconId = href.split("#")[1]
      var newHref = baseUrl + "/assets/icons/icon-set.svg#" + iconId
      element.setAttributeNS("http://www.w3.org/1999/xlink", "href", newHref)
    }
  }
}

// エラーハンドリング
window.addEventListener(
  "error",
  (e) => {
    // SVG関連のエラーを抑制
    if (
      (e.target && e.target.tagName === "svg") ||
      (e.target.tagName === "use" && e.target.namespaceURI === "http://www.w3.org/2000/svg")
    ) {
      console.warn("SVG error suppressed:", e.message)
      e.preventDefault()
    }
  },
  true,
)
