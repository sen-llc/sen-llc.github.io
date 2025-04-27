/**
 * インラインSVGアイコンシステム
 * SVGスプライトの代わりに直接SVGを埋め込む
 */
document.addEventListener("DOMContentLoaded", () => {
  // SVGアイコン定義
  const svgIcons = {
    "icon-home": `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>`,

    "icon-check": `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>`,

    "icon-tool": `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>`,

    "icon-message": `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>`,

    "icon-arrow-right": `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>`,

    "icon-mail": `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>`,

    "icon-ruler": `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19.875 12c.621 0 1.125.512 1.125 1.143v5.714c0 .631-.504 1.143-1.125 1.143H4.125C3.504 20 3 19.488 3 18.857v-5.714C3 12.512 3.504 12 4.125 12h15.75z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3 15h2v2H3v-2zM9 15h2v2H9v-2zM15 15h2v2h-2v-2zM6 13v4M12 13v4M18 13v4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>`,

    "icon-cycle": `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 2.1l4 4-4 4"></path><path d="M3 12.2v-2a4 4 0 0 1 4-4h12.8M7 21.9l-4-4 4-4"></path><path d="M21 11.8v2a4 4 0 0 1-4 4H4.2"></path></svg>`,

    "icon-sprout": `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 20h10"></path><path d="M10 20c5.5-2.5.8-6.4 3-10"></path><path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z"></path><path d="M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z"></path></svg>`,

    "icon-instagram": `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>`,

    "icon-line": `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0-4.418-4.03-8-9-8s-9 3.582-9 8c0 3.941 3.27 7.241 7.5 7.87v2.13l1.164-1.095a13.538 13.538 0 0 0 2.345-2.712c3.996-.863 6.991-4.182 6.991-8.193z"></path><path d="M14.5 8v4"></path><path d="M9.5 8v4"></path><path d="M9.5 10H12"></path><path d="M14.5 10H17"></path></svg>`,

    "icon-twitter": `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>`,

    "icon-facebook": `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>`,
  }

  // SVGアイコンを置き換える関数
  function replaceSvgIcons() {
    const svgElements = document.querySelectorAll("svg:has(use)")

    svgElements.forEach((svg) => {
      const useElement = svg.querySelector("use")
      if (!useElement) return

      const href = useElement.getAttributeNS("http://www.w3.org/1999/xlink", "href") || useElement.getAttribute("href")

      if (!href) return

      // アイコンIDを抽出
      const iconId = href.split("#")[1]

      if (iconId && svgIcons[iconId]) {
        // クラスと属性を保持
        const svgClasses = svg.getAttribute("class") || ""
        const width = svg.getAttribute("width") || "24"
        const height = svg.getAttribute("height") || "24"

        // 新しいSVG要素を作成
        const tempDiv = document.createElement("div")
        tempDiv.innerHTML = svgIcons[iconId]
        const newSvg = tempDiv.firstChild

        // 属性を設定
        newSvg.setAttribute("class", svgClasses)
        newSvg.setAttribute("width", width)
        newSvg.setAttribute("height", height)

        // 元のSVGを置き換え
        svg.parentNode.replaceChild(newSvg, svg)
      }
    })
  }

  // ページ読み込み時に実行
  replaceSvgIcons()

  // 動的に追加される要素を監視
  const observer = new MutationObserver((mutations) => {
    let needsReplacement = false

    mutations.forEach((mutation) => {
      if (mutation.type === "childList" && mutation.addedNodes.length > 0) {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === 1 && (node.tagName === "SVG" || (node.querySelector && node.querySelector("svg")))) {
            needsReplacement = true
          }
        })
      }
    })

    if (needsReplacement) {
      replaceSvgIcons()
    }
  })

  observer.observe(document.body, {
    childList: true,
    subtree: true,
  })
})
