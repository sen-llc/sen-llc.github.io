/**
 * 診断誘導ボタンの機能
 * クリックで診断モーダルを開く
 */
document.addEventListener("DOMContentLoaded", () => {
  const diagnosisCTAButton = document.getElementById("diagnosis-cta-button")
  const diagnosisModal = document.getElementById("diagnosis-modal")
  const closeDiagnosisModal = document.getElementById("close-diagnosis-modal")

  if (diagnosisCTAButton && diagnosisModal) {
    // 診断ボタンクリック時の処理
    diagnosisCTAButton.addEventListener("click", () => {
      // モーダルを表示
      diagnosisModal.classList.remove("hidden")
      document.body.classList.add("overflow-hidden")
      document.body.classList.add("diagnosis-modal-open")

      // WAI-ARIAの属性を設定
      diagnosisModal.setAttribute("aria-modal", "true")
      diagnosisModal.setAttribute("role", "dialog")

      // モーダルが開いたらフォーカスを閉じるボタンに移動
      if (closeDiagnosisModal) {
        setTimeout(() => {
          closeDiagnosisModal.focus()
        }, 100)
      }

      // スムーススクロールでモーダルの位置まで移動
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })

      // 診断開始前のメッセージ表示（オプション）
      const diagnosisIntro = document.getElementById("diagnosis-intro-modal")
      if (diagnosisIntro) {
        diagnosisIntro.classList.remove("hidden")
      }

      // 診断結果や質問画面が表示されていたら隠す
      const diagnosisQuestions = document.getElementById("diagnosis-questions")
      const diagnosisResult = document.getElementById("diagnosis-result")

      if (diagnosisQuestions) {
        diagnosisQuestions.classList.add("hidden")
      }

      if (diagnosisResult) {
        diagnosisResult.classList.add("hidden")
      }
    })

    // モーダルを閉じる処理
    if (closeDiagnosisModal) {
      closeDiagnosisModal.addEventListener("click", () => {
        diagnosisModal.classList.add("hidden")
        document.body.classList.remove("overflow-hidden")
        document.body.classList.remove("diagnosis-modal-open")

        // フォーカスを診断ボタンに戻す
        diagnosisCTAButton.focus()
      })
    }

    // ESCキーでモーダルを閉じる
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && !diagnosisModal.classList.contains("hidden")) {
        closeDiagnosisModal.click()
      }
    })

    // モーダル外クリックで閉じる
    diagnosisModal.addEventListener("click", (e) => {
      if (e.target === diagnosisModal) {
        closeDiagnosisModal.click()
      }
    })
  }

  // 診断モーダルが既に開いている場合は診断CTAボタンを非表示
  function checkDiagnosisModalState() {
    if (diagnosisModal && !diagnosisModal.classList.contains("hidden")) {
      document.body.classList.add("diagnosis-modal-open")
    } else {
      document.body.classList.remove("diagnosis-modal-open")
    }
  }

  // 初期チェック
  checkDiagnosisModalState()

  // リサイズ時にも位置を調整
  window.addEventListener("resize", () => {
    checkDiagnosisModalState()
  })
})
