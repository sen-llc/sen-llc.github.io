/**
 * セクションアニメーション
 * スクロールに応じて各セクションの要素をアニメーション表示
 */
document.addEventListener("DOMContentLoaded", () => {
  // サービスブロックのアニメーション
  const serviceBlocks = document.querySelectorAll(".service-block")

  // ジャーナルカードのアニメーション
  const journalCards = document.querySelectorAll(".journal-card")

  // お問い合わせコンテンツのアニメーション
  const contactContent = document.querySelector(".contact-content")

  // Intersection Observerの設定
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.15,
  }

  // サービスブロックのObserver
  const serviceObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible")
        serviceObserver.unobserve(entry.target)
      }
    })
  }, observerOptions)

  // ジャーナルカードのObserver
  const journalObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // 遅延を追加
        const delay = Array.from(journalCards).indexOf(entry.target) * 200
        setTimeout(() => {
          entry.target.classList.add("visible")
        }, delay)
        journalObserver.unobserve(entry.target)
      }
    })
  }, observerOptions)

  // お問い合わせコンテンツのObserver
  const contactObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible")
        contactObserver.unobserve(entry.target)
      }
    })
  }, observerOptions)

  // 各要素にObserverを適用
  if (serviceBlocks) {
    serviceBlocks.forEach((block) => {
      serviceObserver.observe(block)
    })
  }

  if (journalCards) {
    journalCards.forEach((card) => {
      journalObserver.observe(card)
    })
  }

  if (contactContent) {
    contactObserver.observe(contactContent)
  }
})
