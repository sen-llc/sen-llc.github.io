/**
 * アニメーションシーケンスを制御するためのユーティリティ
 * 複数のアイコンやUI要素を連続的にアニメーションさせるための機能を提供
 */
document.addEventListener("DOMContentLoaded", () => {
  // アニメーションシーケンスを実行する関数
  function runAnimationSequence(selector, options = {}) {
    const defaults = {
      delayBetween: 0.08, // 要素間の遅延（秒）
      baseDelay: 0, // 初期遅延（秒）
      randomize: false, // ランダム順序で実行するか
      animationClass: "", // 追加するアニメーションクラス
      onStart: null, // シーケンス開始時のコールバック
      onComplete: null, // シーケンス完了時のコールバック
      onItemAnimated: null, // 各アイテムのアニメーション開始時のコールバック
    }

    const settings = { ...defaults, ...options }
    const elements = document.querySelectorAll(selector)

    if (elements.length === 0) return

    // コールバックの実行
    if (typeof settings.onStart === "function") {
      settings.onStart(elements)
    }

    // 要素の順序を決定
    let sequence = Array.from(elements)
    if (settings.randomize) {
      sequence = sequence.sort(() => Math.random() - 0.5)
    }

    // 各要素にアニメーションを適用
    sequence.forEach((element, index) => {
      const delay = settings.baseDelay + index * settings.delayBetween

      setTimeout(() => {
        if (settings.animationClass) {
          element.classList.add(settings.animationClass)
        }

        // 要素ごとのコールバックを実行
        if (typeof settings.onItemAnimated === "function") {
          settings.onItemAnimated(element, index, delay)
        }

        // 最後の要素のアニメーション後にコールバックを実行
        if (index === sequence.length - 1 && typeof settings.onComplete === "function") {
          // アニメーション完了を待つための追加遅延
          setTimeout(() => {
            settings.onComplete(elements)
          }, 500) // アニメーション完了を待つ時間
        }
      }, delay * 1000)
    })

    return sequence // 処理した要素の配列を返す
  }

  // ページ内の特定のセクションに入った時にアニメーションを実行
  function setupSectionAnimations() {
    const sections = document.querySelectorAll(".animate-section")

    if ("IntersectionObserver" in window) {
      const sectionObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const section = entry.target
              const iconSelector = section.dataset.animateIcons || ".animate-on-view"

              // セクション内のアイコンをアニメーション
              runAnimationSequence(iconSelector, {
                delayBetween: 0.08,
                baseDelay: 0.2,
                animationClass: "animate",
                onComplete: (elements) => {
                  // アニメーション完了後、必要に応じて追加のアクション
                  console.log(`${elements.length}個のアイコンのアニメーションが完了しました`)
                },
              })

              // 一度アニメーションを実行したら監視を解除
              sectionObserver.unobserve(section)
            }
          })
        },
        {
          threshold: 0.2, // 20%見えたらトリガー
          rootMargin: "0px 0px -10% 0px", // 下部に少し余裕を持たせる
        },
      )

      sections.forEach((section) => {
        sectionObserver.observe(section)
      })
    } else {
      // IntersectionObserverがサポートされていない場合のフォールバック
      sections.forEach((section) => {
        const iconSelector = section.dataset.animateIcons || ".animate-on-view"
        runAnimationSequence(iconSelector, {
          animationClass: "animate",
        })
      })
    }
  }

  // ホバー時の連続アニメーション
  function setupHoverSequences() {
    const hoverTriggers = document.querySelectorAll("[data-hover-sequence]")

    hoverTriggers.forEach((trigger) => {
      const targetSelector = trigger.dataset.hoverSequence
      if (!targetSelector) return

      const targetElements = document.querySelectorAll(targetSelector)

      // ホバー開始時のアニメーション
      trigger.addEventListener("mouseenter", () => {
        runAnimationSequence(targetSelector, {
          delayBetween: 0.05,
          animationClass: "hover-active",
        })
      })

      // ホバー終了時のアニメーション解除
      trigger.addEventListener("mouseleave", () => {
        targetElements.forEach((el) => {
          el.classList.remove("hover-active")
        })
      })
    })
  }

  // 初期化
  setupSectionAnimations()
  setupHoverSequences()

  // ページロード時のアニメーション
  window.addEventListener("load", () => {
    // ヘッダーアイコンのアニメーション
    runAnimationSequence("header .icon-sen-brown, header .icon-sen-green", {
      delayBetween: 0.06,
      baseDelay: 0.3,
    })

    // フッターアイコンのアニメーション
    runAnimationSequence("footer .icon-sen-brown, footer .icon-sen-green", {
      delayBetween: 0.08,
      baseDelay: 0.5,
    })
  })

  // ウィンドウのリサイズ時にアニメーションを最適化
  let resizeTimeout
  window.addEventListener("resize", () => {
    // リサイズ中はアニメーションを一時停止
    document.body.classList.add("resize-in-progress")

    clearTimeout(resizeTimeout)
    resizeTimeout = setTimeout(() => {
      document.body.classList.remove("resize-in-progress")
    }, 300)
  })

  // グローバルに公開
  window.animationUtils = {
    runSequence: runAnimationSequence,
  }
})
