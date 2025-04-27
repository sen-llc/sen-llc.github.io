/**
 * 写真スタック効果
 * 複数の写真をランダムに重ねて表示する
 */
document.addEventListener("DOMContentLoaded", () => {
  const photoStack = document.querySelector(".photo-stack")
  if (!photoStack) return

  // 初期化時の処理は静的HTMLに置き換えたため不要
  // createPhotoStack() 関数は削除

  // スクロール効果のみ残す
  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY
    if (scrollY > 10) {
      // スクロール時の写真の動き（視差効果）
      const photoItems = document.querySelectorAll(".photo-item")
      photoItems.forEach((item, index) => {
        const speed = 0.05 + index * 0.01
        const rotate = item.style.transform.match(/rotate$$([^)]+)$$/) || ["", "0deg"]
        item.style.transform = `rotate(${rotate[1]}) translateY(${scrollY * speed}px)`
      })
    }
  })
})
