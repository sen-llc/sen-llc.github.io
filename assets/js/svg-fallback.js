// SVGアイコンのパスを修正
// 相対パスから絶対パスに変更

document.addEventListener("DOMContentLoaded", () => {
  // SVGをサポートしているかどうかをチェック
  if (!!document.createElementNS && !!document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect) {
    return // SVGサポートあり、何もしない
  }

  // SVGをサポートしていない場合、フォールバック処理を実行
  var elements = document.querySelectorAll("svg use")

  for (var i = 0; i < elements.length; i++) {
    var element = elements[i]
    var href = element.getAttributeNS("http://www.w3.org/1999/xlink", "href")

    if (href && href.indexOf(".svg") > -1) {
      // SVGアイコンのパスを修正
      var newHref = href.replace(/^(.*?)assets\/icons\//, "/assets/icons/")
      element.setAttributeNS("http://www.w3.org/1999/xlink", "href", newHref)
    }
  }
})
