// アクセシビリティ向上のためのJavaScript

document.addEventListener("DOMContentLoaded", () => {
  // メニュートグルボタンのアクセシビリティ対応
  const menuToggle = document.getElementById("menu-toggle")
  const mobileMenu = document.getElementById("mobile-menu")
  const closeMenu = document.getElementById("close-mobile-menu")

  if (menuToggle && mobileMenu && closeMenu) {
    menuToggle.addEventListener("click", function () {
      const expanded = this.getAttribute("aria-expanded") === "true" || false
      this.setAttribute("aria-expanded", !expanded)
      mobileMenu.classList.toggle("hidden")

      if (!expanded) {
        // メニューが開いたらフォーカスを最初のリンクに移動
        const firstLink = mobileMenu.querySelector("a")
        if (firstLink) {
          setTimeout(() => {
            firstLink.focus()
          }, 100)
        }
      }
    })

    closeMenu.addEventListener("click", () => {
      mobileMenu.classList.add("hidden")
      menuToggle.setAttribute("aria-expanded", "false")
      // メニューを閉じたらトグルボタンにフォーカスを戻す
      menuToggle.focus()
    })

    // ESCキーでメニューを閉じる
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && !mobileMenu.classList.contains("hidden")) {
        mobileMenu.classList.add("hidden")
        menuToggle.setAttribute("aria-expanded", "false")
        menuToggle.focus()
      }
    })
  }

  // 診断モーダルのアクセシビリティ対応
  const startDiagnosisModal = document.getElementById("start-diagnosis-modal")
  const diagnosisModal = document.getElementById("diagnosis-modal")
  const closeDiagnosisModal = document.getElementById("close-diagnosis-modal")

  if (startDiagnosisModal && diagnosisModal && closeDiagnosisModal) {
    startDiagnosisModal.addEventListener("click", function () {
      diagnosisModal.classList.remove("hidden")
      document.body.classList.add("overflow-hidden")

      // WAI-ARIAの属性を設定
      diagnosisModal.setAttribute("aria-modal", "true")
      diagnosisModal.setAttribute("role", "dialog")

      // モーダルが開いたらフォーカスを閉じるボタンに移動
      setTimeout(() => {
        closeDiagnosisModal.focus()
      }, 100)

      // 最後のフォーカス可能な要素を記憶
      this.setAttribute("data-last-focus", "true")
    })

    closeDiagnosisModal.addEventListener("click", () => {
      diagnosisModal.classList.add("hidden")
      document.body.classList.remove("overflow-hidden")

      // モーダルを閉じたら元のボタンにフォーカスを戻す
      const lastFocus = document.querySelector('[data-last-focus="true"]')
      if (lastFocus) {
        lastFocus.focus()
        lastFocus.removeAttribute("data-last-focus")
      }
    })

    // ESCキーでモーダルを閉じる
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && !diagnosisModal.classList.contains("hidden")) {
        closeDiagnosisModal.click()
      }
    })

    // モーダル内でのフォーカストラップ
    diagnosisModal.addEventListener("keydown", (e) => {
      if (e.key === "Tab") {
        const focusableElements = diagnosisModal.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
        )
        const firstElement = focusableElements[0]
        const lastElement = focusableElements[focusableElements.length - 1]

        // Shift+Tabで最初の要素から最後の要素へ
        if (e.shiftKey && document.activeElement === firstElement) {
          e.preventDefault()
          lastElement.focus()
        }
        // Tabで最後の要素から最初の要素へ
        else if (!e.shiftKey && document.activeElement === lastElement) {
          e.preventDefault()
          firstElement.focus()
        }
      }
    })
  }

  // focus-visibleポリフィル（キーボードフォーカスのみ表示）
  document.body.classList.add("js-focus-visible")

  let hadKeyboardEvent = false
  const keyboardModalityWhitelist = [
    "Tab",
    "ArrowUp",
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight",
    "Enter",
    "Space",
    "Escape",
    "Home",
    "End",
    "PageUp",
    "PageDown",
  ]

  document.addEventListener("keydown", (e) => {
    if (keyboardModalityWhitelist.includes(e.key)) {
      hadKeyboardEvent = true
    }
  })

  document.addEventListener("mousedown", () => {
    hadKeyboardEvent = false
  })

  document.addEventListener("focusin", (e) => {
    if (hadKeyboardEvent) {
      e.target.classList.add("focus-visible")
    }
  })

  document.addEventListener("focusout", (e) => {
    e.target.classList.remove("focus-visible")
  })
})
