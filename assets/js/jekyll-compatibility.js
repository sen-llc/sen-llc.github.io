/**
 * Jekyll互換性対応スクリプト
 * GitHub Pagesのビルドプロセスで発生する可能性のある問題を修正
 */
document.addEventListener("DOMContentLoaded", () => {
  // Liquid構文のエスケープ
  function escapeLiquidSyntax() {
    // コードブロック内のLiquid構文をエスケープ
    document.querySelectorAll("pre code").forEach((block) => {
      const content = block.innerHTML
      // Liquid構文のパターン: {{ ... }} または {% ... %}
      const escapedContent = content
        .replace(/\{\{/g, "&#123;&#123;")
        .replace(/\}\}/g, "&#125;&#125;")
        .replace(/\{%/g, "&#123;%")
        .replace(/%\}/g, "%&#125;")

      if (content !== escapedContent) {
        block.innerHTML = escapedContent
      }
    })
  }

  // 相対パスの修正
  function fixRelativePaths() {
    // baseURLがある場合は使用、なければ空文字
    const baseUrl = document.querySelector('meta[name="baseurl"]')?.getAttribute("content") || ""

    // 画像パスの修正
    document.querySelectorAll('img[src^="/"]').forEach((img) => {
      const src = img.getAttribute("src")
      if (src && !src.startsWith(baseUrl) && !src.startsWith("http")) {
        img.setAttribute("src", `${baseUrl}${src}`)
      }
    })

    // リンクパスの修正
    document.querySelectorAll('a[href^="/"]').forEach((link) => {
      const href = link.getAttribute("href")
      if (href && !href.startsWith(baseUrl) && !href.startsWith("http")) {
        link.setAttribute("href", `${baseUrl}${href}`)
      }
    })
  }

  // 実行
  try {
    escapeLiquidSyntax()
    fixRelativePaths()
  } catch (error) {
    console.error("Jekyll互換性スクリプトエラー:", error)
  }
})
