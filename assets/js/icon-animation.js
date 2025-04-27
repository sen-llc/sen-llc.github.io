document.addEventListener("DOMContentLoaded", () => {
  // ページ読み込み時のアニメーション
  const loadAnimatedIcons = document.querySelectorAll(
    ".icon-animate-fade-in, .icon-animate-slide-in, .icon-animate-rotate-in, .icon-animate-scale-in, .icon-animate-bounce-in",
  )

  // 各アイコンに遅延を設定 - より自然な連続性のために調整
  loadAnimatedIcons.forEach((icon, index) => {
    if (
      !icon.classList.contains("delay-100") &&
      !icon.classList.contains("delay-200") &&
      !icon.classList.contains("delay-300") &&
      !icon.classList.contains("delay-400") &&
      !icon.classList.contains("delay-500")
    ) {
      // 遅延時間を短くして、より自然な連続性を実現
      icon.style.animationDelay = `${index * 0.06}s`
    }
  })

  // スクロールアニメーション用のIntersection Observer - しきい値を調整
  const scrollAnimatedIcons = document.querySelectorAll(
    ".icon-scroll-pulse, .icon-scroll-rotate, .icon-scroll-float, .icon-scroll-bounce, .icon-scroll-shake",
  )

  if ("IntersectionObserver" in window) {
    // rootMarginを調整して、要素が画面に入る前に少し早めにアニメーションを開始
    const iconObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // アニメーション開始時に少し遅延を追加して、一斉に始まらないようにする
            const delay = Math.random() * 0.3 // 0〜0.3秒のランダム遅延
            setTimeout(() => {
              entry.target.classList.add("animate")
            }, delay * 1000)

            // 一度だけアニメーションを実行する場合はobserverを解除
            // observer.unobserve(entry.target);
          } else {
            // 画面外に出たらアニメーションを停止
            // 少し遅延を入れて、すぐに消えないようにする
            setTimeout(() => {
              if (!entry.isIntersecting) {
                entry.target.classList.remove("animate")
              }
            }, 300)
          }
        })
      },
      {
        root: null,
        rootMargin: "10px 0px", // 上下に少し余裕を持たせる
        threshold: 0.15, // しきい値を少し上げて、より確実に見えている時だけアニメーション
      },
    )

    scrollAnimatedIcons.forEach((icon) => {
      iconObserver.observe(icon)
    })
  } else {
    // IntersectionObserverがサポートされていない場合のフォールバック
    scrollAnimatedIcons.forEach((icon) => {
      icon.classList.add("animate")
    })
  }

  // ホバーアニメーションの強化 - タッチデバイスでの挙動改善
  const hoverIcons = document.querySelectorAll(".icon-hover-rotate, .icon-hover-scale, .icon-hover-bounce")

  hoverIcons.forEach((icon) => {
    // マウスエンター時のトランジション
    icon.addEventListener("mouseenter", function () {
      this.style.transition = "transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1)"
    })

    // マウスリーブ時のトランジション - 戻る時はより自然な動きに
    icon.addEventListener("mouseleave", function () {
      this.style.transition = "transform 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)"
    })

    // タッチデバイス対応 - タッチ開始時にホバー効果を適用
    icon.addEventListener(
      "touchstart",
      function () {
        this.classList.add("touch-hover")
        this.style.transition = "transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1)"
        // タップフィードバックを追加
        this.style.transform = "scale(0.92)"
      },
      { passive: true },
    )

    // タッチ終了時にホバー効果を解除
    icon.addEventListener(
      "touchend",
      function () {
        this.classList.remove("touch-hover")
        this.style.transition = "transform 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)"
        // タップフィードバックを解除（少し遅延させる）
        setTimeout(() => {
          this.style.transform = ""
        }, 150)
      },
      { passive: true },
    )
  })

  // スクロールトリガーアニメーション - より滑らかなトリガー
  // 特定のスクロール位置でアニメーションをトリガーする
  const triggerAnimations = () => {
    const scrollPosition = window.scrollY
    const windowHeight = window.innerHeight

    // スクロール位置に応じたアニメーショントリガー - しきい値を調整
    if (scrollPosition > windowHeight * 0.2) {
      document.querySelectorAll(".scroll-trigger-25").forEach((el) => {
        el.classList.add("animate")
      })
    }

    if (scrollPosition > windowHeight * 0.4) {
      document.querySelectorAll(".scroll-trigger-50").forEach((el) => {
        el.classList.add("animate")
      })
    }

    if (scrollPosition > windowHeight * 0.6) {
      document.querySelectorAll(".scroll-trigger-75").forEach((el) => {
        el.classList.add("animate")
      })
    }
  }

  // スクロールイベントリスナー - パフォーマンス最適化
  let scrollTimeout
  window.addEventListener("scroll", () => {
    // スクロールイベントのスロットリング
    if (!scrollTimeout) {
      scrollTimeout = setTimeout(() => {
        triggerAnimations()
        scrollTimeout = null
      }, 50) // 50msごとに実行（パフォーマンス向上）
    }
  })

  // 初期実行
  triggerAnimations()

  // モーションの軽減設定を確認
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
  if (prefersReducedMotion) {
    console.log("ユーザーがモーション軽減を希望しているため、アニメーションを制限しています")

    // アニメーションクラスを持つ要素からアニメーションを削除
    document.querySelectorAll("[class*='animate-'], [class*='icon-animate-']").forEach((el) => {
      el.style.animation = "none"
      el.style.transition = "none"
    })
  }

  // エラーハンドリングを追加
  window.addEventListener(
    "error",
    (event) => {
      // runtime.lastError エラーを抑制
      if (event.message && event.message.includes("runtime.lastError")) {
        event.preventDefault()
        console.debug("Suppressed runtime.lastError:", event.message)
      }
    },
    true,
  )

  // 低電力モード検出（可能な場合）
  if ("connection" in navigator && navigator.connection.saveData) {
    console.log("データセーバーモードが有効なため、アニメーションを制限しています")

    // スクロールアニメーションを無効化
    scrollAnimatedIcons.forEach((icon) => {
      icon.classList.remove(
        "icon-scroll-pulse",
        "icon-scroll-rotate",
        "icon-scroll-float",
        "icon-scroll-bounce",
        "icon-scroll-shake",
      )
    })
  }
})
