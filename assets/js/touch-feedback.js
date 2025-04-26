/**
 * タップフィードバックを提供するスクリプト
 * モバイルデバイスでのユーザーエクスペリエンスを向上させます
 */
document.addEventListener("DOMContentLoaded", () => {
  // タッチデバイスの検出
  const isTouchDevice = () => {
    return "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0
  }

  // タッチデバイスの場合、bodyにクラスを追加
  if (isTouchDevice()) {
    document.body.classList.add("touch-device")
  }

  // タップフィードバックを適用する要素
  const feedbackSelectors = [
    ".btn",
    ".nav-link",
    ".mobile-nav-link",
    "a:has(> svg)",
    ".card",
    ".faq-toggle",
    ".share-btn",
    ".concept-step",
    ".options-container button",
  ]

  // すべてのセレクタに一致する要素を取得
  const elements = document.querySelectorAll(feedbackSelectors.join(", "))

  // 各要素にタッチフィードバッククラスとイベントリスナーを追加
  elements.forEach((element) => {
    // すでにtouch-feedbackクラスを持っていない場合のみ追加
    if (!element.classList.contains("touch-feedback")) {
      element.classList.add("touch-feedback")
    }

    // タッチスタート時のイベント
    element.addEventListener(
      "touchstart",
      (e) => {
        // リップルエフェクトの位置を設定
        const rect = element.getBoundingClientRect()
        const x = e.touches[0].clientX - rect.left
        const y = e.touches[0].clientY - rect.top

        // リップルエフェクトのスタイルを設定
        element.style.setProperty("--ripple-x", `${x}px`)
        element.style.setProperty("--ripple-y", `${y}px`)

        // アクティブクラスを追加
        element.classList.add("active")
      },
      { passive: true },
    )

    // タッチエンド時のイベント
    element.addEventListener(
      "touchend",
      () => {
        // アクティブクラスを削除
        element.classList.remove("active")
      },
      { passive: true },
    )

    // タッチキャンセル時のイベント
    element.addEventListener(
      "touchcancel",
      () => {
        // アクティブクラスを削除
        element.classList.remove("active")
      },
      { passive: true },
    )
  })

  // 動的に追加される要素のためのMutationObserver
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.addedNodes && mutation.addedNodes.length > 0) {
        mutation.addedNodes.forEach((node) => {
          // 要素ノードの場合のみ処理
          if (node.nodeType === 1) {
            // 新しく追加された要素内の対象要素を検索
            const newElements = node.querySelectorAll(feedbackSelectors.join(", "))

            // 新しい要素自体も対象かチェック
            let selfMatch = false
            for (const selector of feedbackSelectors) {
              if (node.matches(selector)) {
                selfMatch = true
                break
              }
            }

            // 自身が対象の場合、処理を適用
            if (selfMatch && !node.classList.contains("touch-feedback")) {
              node.classList.add("touch-feedback")
              addTouchListeners(node)
            }

            // 子要素に処理を適用
            newElements.forEach((el) => {
              if (!el.classList.contains("touch-feedback")) {
                el.classList.add("touch-feedback")
                addTouchListeners(el)
              }
            })
          }
        })
      }
    })
  })

  // タッチリスナーを追加する関数
  function addTouchListeners(element) {
    element.addEventListener(
      "touchstart",
      (e) => {
        const rect = element.getBoundingClientRect()
        const x = e.touches[0].clientX - rect.left
        const y = e.touches[0].clientY - rect.top

        element.style.setProperty("--ripple-x", `${x}px`)
        element.style.setProperty("--ripple-y", `${y}px`)

        element.classList.add("active")
      },
      { passive: true },
    )

    element.addEventListener(
      "touchend",
      () => {
        element.classList.remove("active")
      },
      { passive: true },
    )

    element.addEventListener(
      "touchcancel",
      () => {
        element.classList.remove("active")
      },
      { passive: true },
    )
  }

  // 動的要素の監視を開始
  observer.observe(document.body, {
    childList: true,
    subtree: true,
  })

  // 特定の要素にカスタムフィードバックを追加
  const customFeedbackElements = {
    // 診断モーダルの選択肢ボタン
    ".options-container button": (el) => {
      el.addEventListener(
        "touchstart",
        () => {
          el.style.backgroundColor = "var(--color-sen-beige)"
        },
        { passive: true },
      )

      el.addEventListener(
        "touchend",
        () => {
          setTimeout(() => {
            el.style.backgroundColor = ""
          }, 150)
        },
        { passive: true },
      )
    },

    // SNS共有ボタン
    ".share-btn": (el) => {
      el.addEventListener(
        "touchstart",
        () => {
          el.style.transform = "scale(0.92)"
          el.style.opacity = "0.8"
        },
        { passive: true },
      )

      el.addEventListener(
        "touchend",
        () => {
          setTimeout(() => {
            el.style.transform = ""
            el.style.opacity = ""
          }, 150)
        },
        { passive: true },
      )
    },
  }

  // カスタムフィードバックを適用
  Object.keys(customFeedbackElements).forEach((selector) => {
    const elements = document.querySelectorAll(selector)
    elements.forEach((el) => {
      customFeedbackElements[selector](el)
    })
  })

  // iOS Safariでのスクロール問題を修正
  document.addEventListener("touchmove", () => {}, { passive: true })
})
