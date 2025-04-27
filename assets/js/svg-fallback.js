// SVGアイコンのパスを修正
document.addEventListener("DOMContentLoaded", () => {
  // SVGをサポートしているかどうかをチェック
  if (!!document.createElementNS && !!document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect) {
    // SVGサポートあり、パスの修正のみ行う
    fixSvgPaths()
    return
  }

  // SVGをサポートしていない場合、フォールバック処理を実行
  var elements = document.querySelectorAll("svg use")

  for (var i = 0; i < elements.length; i++) {
    var element = elements[i]
    var href = element.getAttributeNS("http://www.w3.org/1999/xlink", "href")

    if (href && href.indexOf("icon-set.svg") > -1) {
      // SVGアイコンのパスを修正
      var newHref = href.replace(/^(.*?)assets\/icons\/icon-set.svg/, "/assets/icons/icon-set.svg")
      element.setAttributeNS("http://www.w3.org/1999/xlink", "href", newHref)
    }
  }
})

// SVGパスを修正する関数
function fixSvgPaths() {
  var elements = document.querySelectorAll("svg use")

  for (var i = 0; i < elements.length; i++) {
    var element = elements[i]
    var href = element.getAttributeNS("http://www.w3.org/1999/xlink", "href")

    if (href && href.indexOf("icon-set.svg") > -1) {
      // 相対パスを絶対パスに変換
      if (!href.startsWith("/assets/")) {
        var newHref = href.replace(/^(.*?)assets\/icons\/icon-set.svg/, "/assets/icons/icon-set.svg")
        element.setAttributeNS("http://www.w3.org/1999/xlink", "href", newHref)
      }
    }
  }
}
