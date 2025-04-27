// SVGアイコンのパスを修正
// 相対パスから絶対パスに変更

// このファイルは、SVGをサポートしていないブラウザで、SVGアイコンをPNGにフォールバックさせるためのものです。
// 具体的には、CSSのbackground-imageプロパティでSVGを使用している要素に対して、
// SVGサポートがない場合にPNG画像を設定します。

document.addEventListener("DOMContentLoaded", () => {
  // SVGをサポートしているかどうかをチェック
  if (!!document.createElementNS && !!document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect) {
    return // SVGサポートあり、何もしない
  }

  // SVGをサポートしていない場合、フォールバック処理を実行
  var elements = document.querySelectorAll("*") // すべての要素を対象とする（必要に応じて絞り込む）

  for (var i = 0; i < elements.length; i++) {
    var element = elements[i]
    var style = window.getComputedStyle(element)
    var backgroundImage = style.backgroundImage

    if (backgroundImage && backgroundImage.indexOf(".svg") > -1) {
      // background-imageにSVGが指定されている場合

      // 例:
      // svg.style.backgroundImage = "url('/assets/icons/icon_home.png')"
      // ↓
      // svg.style.backgroundImage = "url('./assets/icons/icon_home.png')"

      var newBackgroundImage = backgroundImage.replace(/\/assets\/icons\//g, "./assets/icons/")
      newBackgroundImage = newBackgroundImage.replace(/\/assets\/images\//g, "./assets/images/")

      element.style.backgroundImage = newBackgroundImage
    }
  }
})
