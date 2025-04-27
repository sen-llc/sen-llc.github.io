/**
 * 写真スタック効果
 * 複数の写真をランダムに重ねて表示する
 */
document.addEventListener("DOMContentLoaded", () => {
  const photoStack = document.querySelector(".photo-stack")
  if (!photoStack) return

  // 写真のパス（実際のプロジェクトに合わせて調整）
  const photos = [
    "/assets/images/first-view/photo1.jpg",
    "/assets/images/first-view/photo2.jpg",
    "/assets/images/first-view/photo3.jpg",
    "/assets/images/first-view/photo4.jpg",
    "/assets/images/first-view/photo5.jpg",
  ]

  // 写真の配置パラメータ
  const photoParams = [
    { width: "50%", top: "15%", left: "10%", rotate: "-3deg", zIndex: 1 },
    { width: "40%", top: "25%", left: "30%", rotate: "2deg", zIndex: 2 },
    { width: "45%", top: "40%", left: "15%", rotate: "-1deg", zIndex: 3 },
    { width: "35%", top: "20%", left: "55%", rotate: "4deg", zIndex: 4 },
    { width: "40%", top: "45%", left: "50%", rotate: "-2deg", zIndex: 5 },
  ]

  // モバイル用の配置パラメータ
  const mobilePhotoParams = [
    { width: "70%", top: "15%", left: "15%", rotate: "-3deg", zIndex: 1 },
    { width: "65%", top: "25%", left: "20%", rotate: "2deg", zIndex: 2 },
    { width: "60%", top: "40%", left: "20%", rotate: "-1deg", zIndex: 3 },
    { width: "55%", top: "55%", left: "25%", rotate: "4deg", zIndex: 4 },
    { width: "50%", top: "70%", left: "25%", rotate: "-2deg", zIndex: 5 },
  ]

  // 写真を生成して配置
  function createPhotoStack() {
    photoStack.innerHTML = ""

    const isMobile = window.innerWidth <= 768
    const params = isMobile ? mobilePhotoParams : photoParams

    photos.forEach((photo, index) => {
      const photoItem = document.createElement("div")
      photoItem.className = "photo-item"

      // スタイルの設定
      photoItem.style.width = params[index].width
      photoItem.style.top = params[index].top
      photoItem.style.left = params[index].left
      photoItem.style.transform = `rotate(${params[index].rotate})`
      photoItem.style.zIndex = params[index].zIndex

      // 画像の追加
      const img = document.createElement("img")
      img.src = photo
      img.alt = "暮らしの風景"
      img.loading = "eager" // ファーストビューなので優先的に読み込む

      photoItem.appendChild(img)
      photoStack.appendChild(photoItem)
    })
  }

  // 初期化
  createPhotoStack()

  // リサイズ時に再配置
  let resizeTimeout
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimeout)
    resizeTimeout = setTimeout(createPhotoStack, 200)
  })

  // スクロール効果
  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY
    if (scrollY > 10) {
      // スクロール時の写真の動き���視差効果）
      const photoItems = document.querySelectorAll(".photo-item")
      photoItems.forEach((item, index) => {
        const speed = 0.05 + index * 0.01
        item.style.transform = `rotate(${photoParams[index].rotate}) translateY(${scrollY * speed}px)`
      })
    }
  })
})
