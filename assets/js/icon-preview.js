document.addEventListener("DOMContentLoaded", () => {
  // アイコン一覧
  const icons = [
    { id: "icon-home", name: "ホーム" },
    { id: "icon-check", name: "チェック" },
    { id: "icon-tool", name: "ツール" },
    { id: "icon-message", name: "メッセージ" },
    { id: "icon-arrow-right", name: "矢印" },
    { id: "icon-mail", name: "メール" },
    { id: "icon-ruler", name: "定規/ブラシ" },
    { id: "icon-cycle", name: "サイクル" },
    { id: "icon-sprout", name: "芽" },
    { id: "icon-instagram", name: "Instagram" },
    { id: "icon-line", name: "LINE" },
  ]

  // アイコンプレビューコンテナ
  const container = document.getElementById("icon-preview-container")

  // 各アイコンのプレビューを生成
  icons.forEach((icon) => {
    const iconCard = document.createElement("div")
    iconCard.className = "bg-white p-4 rounded-lg shadow-sm border border-gray-100"

    // 異なるサイズでのプレビュー
    const sizes = [
      { class: "w-4 h-4", name: "XS" },
      { class: "w-5 h-5", name: "S" },
      { class: "w-6 h-6", name: "M" },
      { class: "w-8 h-8", name: "L" },
      { class: "w-10 h-10", name: "XL" },
    ]

    // アイコン情報
    iconCard.innerHTML = `
      <h3 class="text-sm font-medium mb-3">${icon.name} <code class="text-xs text-gray-500">#${icon.id}</code></h3>
      <div class="flex items-center justify-between mb-4">
        ${sizes
          .map(
            (size) => `
          <div class="flex flex-col items-center">
            <svg class="${size.class} text-sen-brown">
              <use xlink:href="/assets/icons/icon-set.svg#${icon.id}"></use>
            </svg>
            <span class="text-xs mt-1">${size.name}</span>
          </div>
        `,
          )
          .join("")}
      </div>
      <div class="pt-3 border-t border-gray-100">
        <div class="grid grid-cols-3 gap-2">
          <div class="flex flex-col items-center">
            <svg class="w-6 h-6 text-sen-brown">
              <use xlink:href="/assets/icons/icon-set.svg#${icon.id}"></use>
            </svg>
            <span class="text-xs mt-1">通常</span>
          </div>
          <div class="flex flex-col items-center">
            <svg class="w-6 h-6 text-sen-brown icon-hover-scale">
              <use xlink:href="/assets/icons/icon-set.svg#${icon.id}"></use>
            </svg>
            <span class="text-xs mt-1">ホバー</span>
          </div>
          <div class="flex flex-col items-center">
            <svg class="w-6 h-6 text-sen-brown icon-animate-fade-in">
              <use xlink:href="/assets/icons/icon-set.svg#${icon.id}"></use>
            </svg>
            <span class="text-xs mt-1">アニメーション</span>
          </div>
        </div>
      </div>
    `

    container.appendChild(iconCard)
  })

  // カラーバリエーションのプレビュー
  const colorPreview = document.getElementById("color-preview")
  if (colorPreview) {
    const colors = [
      { class: "text-sen-brown", name: "ブラウン" },
      { class: "text-sen-green", name: "グリーン" },
      { class: "text-sen-green-light", name: "ライトグリーン" },
      { class: "text-sen-dark", name: "ダーク" },
      { class: "text-white bg-sen-brown p-2 rounded", name: "白 (背景付き)" },
    ]

    const sampleIcons = ["icon-home", "icon-sprout", "icon-line"]

    sampleIcons.forEach((iconId) => {
      const colorSection = document.createElement("div")
      colorSection.className = "mb-6"

      colorSection.innerHTML = `
        <h3 class="text-sm font-medium mb-3">${iconId} - カラーバリエーション</h3>
        <div class="flex flex-wrap gap-4">
          ${colors
            .map(
              (color) => `
            <div class="flex flex-col items-center">
              <svg class="w-8 h-8 ${color.class}">
                <use xlink:href="/assets/icons/icon-set.svg#${iconId}"></use>
              </svg>
              <span class="text-xs mt-1">${color.name}</span>
            </div>
          `,
            )
            .join("")}
        </div>
      `

      colorPreview.appendChild(colorSection)
    })
  }
})
