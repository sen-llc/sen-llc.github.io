document.addEventListener("DOMContentLoaded", () => {
  // 診断の質問と選択肢
  const questions = [
    {
      id: "q1",
      title: "Q1｜今の住まいについて教えてください",
      description: "いま、どんなおうちに住んでいますか？",
      options: [
        { id: "rent", text: "貸し家（賃貸）", icon: "home" },
        { id: "own", text: "持ち家", icon: "home" },
      ],
    },
    {
      id: "q2",
      title: "Q2｜これからの住まいについて",
      description: "これから、どんな暮らし方を思い描いていますか？",
      options: [
        { id: "want-rent", text: "借りたい", icon: "home" },
        { id: "want-buy", text: "購入したい", icon: "home" },
        { id: "want-lease", text: "（いまの住まいを）貸したい", icon: "cycle" },
      ],
    },
    {
      id: "q3",
      title: 'Q3｜住まいとの"育て方"を教えてください',
      description: "どんなふうに住まいと関わっていきたいですか？",
      options: [
        { id: "diy", text: "自分で手を動かしたい（DIYしたい）", icon: "tool" },
        { id: "with-pro", text: "プロと一緒につくりたい（設計サポート）", icon: "ruler" },
        { id: "consult", text: "迷っている・相談したい", icon: "message" },
      ],
    },
  ]

  // DOM要素
  const diagnosisIntro = document.getElementById("diagnosis-intro-modal")
  const diagnosisQuestions = document.getElementById("diagnosis-questions")
  const diagnosisResult = document.getElementById("diagnosis-result")
  const startButton = document.getElementById("start-diagnosis")
  const prevButton = document.getElementById("prev-question")
  const restartButton = document.getElementById("restart-diagnosis")
  const questionTitle = document.querySelector(".question-title")
  const questionDescription = document.querySelector(".question-description")
  const optionsContainer = document.querySelector(".options-container")
  const questionCounter = document.querySelector(".question-counter")
  const resultText = document.getElementById("result-text")
  const resultLink = document.getElementById("result-link")
  const resultIcon = document.getElementById("result-icon")

  // モーダル関連の要素
  const diagnosisModal = document.getElementById("diagnosis-modal")
  const startDiagnosisModal = document.getElementById("start-diagnosis-modal")
  const closeDiagnosisModal = document.getElementById("close-diagnosis-modal")
  const closeMobileMenu = document.getElementById("close-mobile-menu")

  // 共有ボタン
  const shareTwitterBtn = document.querySelector(".share-twitter")
  const shareFacebookBtn = document.querySelector(".share-facebook")
  const shareLineBtn = document.querySelector(".share-line")
  const copyUrlBtn = document.getElementById("copy-result-url")
  const copyMessage = document.getElementById("copy-message")

  // 現在の質問インデックスと回答
  let currentQuestionIndex = 0
  let answers = {}
  let resultType = ""

  // モバイルメニューを閉じる
  if (closeMobileMenu) {
    closeMobileMenu.addEventListener("click", () => {
      const mobileMenu = document.getElementById("mobile-menu")
      if (mobileMenu) {
        mobileMenu.classList.add("hidden")
        document.body.classList.remove("overflow-hidden")
      }
    })
  }

  // モーダルを開く - タッチイベントの最適化
  if (startDiagnosisModal) {
    startDiagnosisModal.addEventListener("click", (e) => {
      e.preventDefault()
      if (diagnosisModal) {
        diagnosisModal.classList.remove("hidden")
        document.body.classList.add("overflow-hidden")

        // モバイルでのスクロール位置をリセット
        if (diagnosisIntro) {
          diagnosisIntro.scrollIntoView({ behavior: "auto", block: "start" })
        }
      }
    })
  }

  // モーダルを閉じる
  if (closeDiagnosisModal) {
    closeDiagnosisModal.addEventListener("click", (e) => {
      e.preventDefault()
      if (diagnosisModal) {
        diagnosisModal.classList.add("hidden")
        document.body.classList.remove("overflow-hidden")
      }
    })
  }

  // モーダル外をクリックしたら閉じる - タッチイベントの最適化
  if (diagnosisModal) {
    diagnosisModal.addEventListener("click", (e) => {
      if (e.target === diagnosisModal) {
        diagnosisModal.classList.add("hidden")
        document.body.classList.remove("overflow-hidden")
      }
    })
  }

  // 診断開始
  if (startButton) {
    startButton.addEventListener("click", (e) => {
      e.preventDefault()
      if (diagnosisIntro && diagnosisQuestions) {
        diagnosisIntro.classList.add("hidden")
        diagnosisQuestions.classList.remove("hidden")
        // ステップバーをリセット
        updateStepProgress(0)
        showQuestion(0)
      }
    })
  }

  // 前の質問へ
  if (prevButton) {
    prevButton.addEventListener("click", (e) => {
      e.preventDefault()
      if (currentQuestionIndex > 0) {
        showQuestion(currentQuestionIndex - 1)
      }
    })
  }

  // 診断をやり直す
  if (restartButton) {
    restartButton.addEventListener("click", (e) => {
      e.preventDefault()
      if (diagnosisResult && diagnosisIntro) {
        diagnosisResult.classList.add("hidden")
        diagnosisIntro.classList.remove("hidden")
        currentQuestionIndex = 0
        answers = {}
        // ステップバーをリセット
        updateStepProgress(0)
      }
    })
  }

  // 質問を表示する関数 - タッチ操作の最適化
  function showQuestion(index) {
    if (!questionTitle || !questionDescription || !optionsContainer || !questionCounter) return

    currentQuestionIndex = index
    const question = questions[index]

    questionTitle.textContent = question.title
    questionDescription.textContent = question.description
    questionCounter.textContent = `${index + 1} / ${questions.length}`

    // ステップバーの更新
    updateStepProgress(index)

    // 選択肢をクリア
    optionsContainer.innerHTML = ""

    // 選択肢を追加 - タッチ操作の最適化とアイコン追加
    question.options.forEach((option) => {
      const button = document.createElement("button")
      button.className =
        "p-4 border border-gray-200 rounded-lg hover:bg-sen-beige transition-colors text-left min-h-[60px] flex items-center touch-feedback"

      // アイコンを追加
      const iconWrapper = document.createElement("div")
      iconWrapper.className =
        "flex-shrink-0 mr-3 bg-sen-natural w-10 h-10 rounded-full flex items-center justify-center"

      const iconSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg")
      iconSvg.setAttribute("class", "w-5 h-5 text-sen-brown")
      iconSvg.setAttribute("aria-hidden", "true")

      const iconUse = document.createElementNS("http://www.w3.org/2000/svg", "use")
      iconUse.setAttributeNS(
        "http://www.w3.org/1999/xlink",
        "xlink:href",
        `/assets/icons/icon-set.png#icon-${option.icon || "check"}`,
      )

      iconSvg.appendChild(iconUse)
      iconWrapper.appendChild(iconSvg)

      const textSpan = document.createElement("span")
      textSpan.textContent = option.text

      button.appendChild(iconWrapper)
      button.appendChild(textSpan)

      // 既に回答がある場合はハイライト
      if (answers[question.id] === option.id) {
        button.classList.add("selected")
      }

      button.addEventListener("click", (e) => {
        e.preventDefault()

        // 現在の質問の全ての選択肢から選択状態を削除
        optionsContainer.querySelectorAll("button").forEach((btn) => {
          btn.classList.remove("selected")
        })

        // 選択された選択肢にクラスを追加
        button.classList.add("selected")

        answers[question.id] = option.id

        // 少し遅延させて次の質問に進む（アニメーション効果のため）
        setTimeout(() => {
          if (currentQuestionIndex < questions.length - 1) {
            showQuestion(currentQuestionIndex + 1)
          } else {
            showResult()
          }
        }, 300)
      })

      optionsContainer.appendChild(button)
    })

    // 前の質問ボタンの表示/非表示
    if (prevButton) {
      if (index > 0) {
        prevButton.classList.remove("hidden")
      } else {
        prevButton.classList.add("hidden")
      }
    }
  }

  // ステップバーの進捗状況を更新する関数
  function updateStepProgress(index) {
    // ステップサークルの更新
    const stepCircles = document.querySelectorAll(".step-circle")
    stepCircles.forEach((circle, i) => {
      // すべてのクラスをリセット
      circle.classList.remove("active", "completed")

      // 現在のステップより前のステップは完了としてマーク
      if (i < index) {
        circle.classList.add("completed")
        circle.innerHTML =
          '<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" /></svg>'
      }
      // 現在のステップはアクティブとしてマーク
      else if (i === index) {
        circle.classList.add("active")
        circle.textContent = i + 1
      }
      // 将来のステップは通常表示
      else {
        circle.textContent = i + 1
      }
    })

    // プログレスバーの更新
    const stepBar = document.querySelector(".step-bar")
    if (stepBar) {
      const progressPercentage =
        index === 0 ? 0 : index === questions.length - 1 ? 100 : (index / (questions.length - 1)) * 100
      stepBar.style.width = `${progressPercentage}%`
    }
  }

  // 結果を表示する関数
  function showResult() {
    if (!diagnosisQuestions || !diagnosisResult) return

    diagnosisQuestions.classList.add("hidden")
    diagnosisResult.classList.remove("hidden")

    // 回答に基づいて結果を決定
    const q2Answer = answers.q2
    const q3Answer = answers.q3

    let resultTextContent = ""
    let resultLinkHref = ""
    let resultLinkText = ""
    let resultIconSrc = ""
    let resultTitle = ""

    const 育てる住まい = "育てる住まい"
    const つくる = "つくる"

    if (q2Answer === "want-rent" && q3Answer === "diy") {
      resultTitle = "DIYを楽しむ賃貸暮らし"
      resultTextContent = `まずは"${育てる住まい}"から始めて、ゆくゆく"${つくる}"へ。自分らしい空間づくりを楽しみながら、住まいとの関係を育てていきましょう。`
      resultLinkHref = "/rental.html"
      resultLinkText = "Rentalを見る"
      resultIconSrc = "/assets/icons/icon_sprout.png"
      resultType = "sprout"
    } else if (q2Answer === "want-buy" && q3Answer === "with-pro") {
      resultTitle = "プロと創る理想の住まい"
      resultTextContent =
        "理想の住まいを、一緒に形にしていきましょう。あなたの暮らし方に合わせた、オーダーメイドの空間設計をサポートします。"
      resultLinkHref = "/design.html"
      resultLinkText = "Designの事例を見る"
      resultIconSrc = "/assets/icons/icon_ruler.png"
      resultType = "ruler"
    } else if (q2Answer === "want-lease") {
      resultTitle = "空き家の新しい活用法"
      resultTextContent = "空き家を活かして、新しい住まい手へ。大切な住まいを次の世代へつなぐお手伝いをします。"
      resultLinkHref = "/contact.html"
      resultLinkText = "オーナー向け相談はこちら"
      resultIconSrc = "/assets/icons/icon_cycle.png"
      resultType = "cycle"
    } else {
      resultTitle = "一歩ずつ育てる住まい"
      resultTextContent = `まずは"${育てる住まい}"から、一歩ずつ。自分のペースで住まいとの関係を深めていきましょう。`
      resultLinkHref = "/rental.html"
      resultLinkText = "Rentalを見る"
      resultIconSrc = "/assets/icons/icon_sprout.png"
      resultType = "sprout"
    }

    // 結果コンテナにタイプ別のクラスを追加
    const resultContainer = diagnosisResult.querySelector(".result-container")
    if (resultContainer) {
      resultContainer.className = `result-container bg-white rounded-lg p-6 md:p-8 relative overflow-hidden result-type-${resultType}`
    }

    // 結果を表示
    const resultTitleElement = document.getElementById("result-title")
    if (resultTitleElement) {
      resultTitleElement.textContent = resultTitle
    }

    if (resultText) {
      resultText.textContent = resultTextContent
    }

    if (resultLink) {
      resultLink.href = resultLinkHref
      const resultLinkTextElement = document.getElementById("result-link-text")
      if (resultLinkTextElement) {
        resultLinkTextElement.textContent = resultLinkText
      }
    }

    if (resultIcon) {
      resultIcon.src = resultIconSrc
      resultIcon.alt = resultTitle
    }

    // 結果表示時のアニメーション
    setTimeout(() => {
      if (resultContainer) {
        resultContainer.style.transform = "translateY(0)"
        resultContainer.style.opacity = "1"
      }
    }, 100)

    // 共有ボタンのイベントリスナーを設定
    setupShareButtons(resultTitle, resultTextContent, resultType)
  }

  // 共有ボタンの設定 - タッチ操作の最適化
  function setupShareButtons(title, description, type) {
    // 共有用のURLを生成（クエリパラメータに結果タイプを含める）
    const shareUrl = new URL(window.location.href)
    shareUrl.searchParams.set("result", type)
    const shareUrlString = shareUrl.toString()

    // 共有テキストを作成
    const shareText = `【診断結果】${title} - ${description.substring(0, 50)}...`

    // Twitterでシェア
    if (shareTwitterBtn) {
      shareTwitterBtn.addEventListener("click", (e) => {
        e.preventDefault()
        const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrlString)}`
        window.open(twitterUrl, "_blank", "width=600,height=400")
      })
    }

    // Facebookでシェア
    if (shareFacebookBtn) {
      shareFacebookBtn.addEventListener("click", (e) => {
        e.preventDefault()
        const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrlString)}`
        window.open(facebookUrl, "_blank", "width=600,height=400")
      })
    }

    // LINEでシェア
    if (shareLineBtn) {
      shareLineBtn.addEventListener("click", (e) => {
        e.preventDefault()
        const lineUrl = `https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(shareUrlString)}`
        window.open(lineUrl, "_blank")
      })
    }

    // URLをコピー - モバイルでのフィードバック改善
    if (copyUrlBtn && copyMessage) {
      copyUrlBtn.addEventListener("click", (e) => {
        e.preventDefault()
        navigator.clipboard
          .writeText(shareUrlString)
          .then(() => {
            copyMessage.style.opacity = "1"

            // タップフィードバックを追加
            copyUrlBtn.classList.add("bg-gray-100")
            setTimeout(() => {
              copyUrlBtn.classList.remove("bg-gray-100")
            }, 200)

            setTimeout(() => {
              copyMessage.style.opacity = "0"
            }, 2000)
          })
          .catch((err) => {
            // フォールバック: テキストエリアを使用してコピー
            const textArea = document.createElement("textarea")
            textArea.value = shareUrlString
            textArea.style.position = "fixed"
            textArea.style.left = "-999999px"
            textArea.style.top = "-999999px"
            document.body.appendChild(textArea)
            textArea.focus()
            textArea.select()

            try {
              document.execCommand("copy")
              copyMessage.style.opacity = "1"
              setTimeout(() => {
                copyMessage.style.opacity = "0"
              }, 2000)
            } catch (err) {
              console.error("コピーに失敗しました", err)
            }

            document.body.removeChild(textArea)
          })
      })
    }
  }

  // URLから結果パラメータを取得して表示する（共有されたURLからの訪問時）
  function checkUrlForResult() {
    const urlParams = new URLSearchParams(window.location.search)
    const resultParam = urlParams.get("result")

    if (resultParam && diagnosisModal) {
      // モーダルを開く
      diagnosisModal.classList.remove("hidden")
      document.body.classList.add("overflow-hidden")

      // イントロを非表示
      if (diagnosisIntro) {
        diagnosisIntro.classList.add("hidden")
      }

      // 結果タイプに基づいて回答を設定
      if (resultParam === "sprout") {
        answers = { q2: "want-rent", q3: "diy" }
      } else if (resultParam === "ruler") {
        answers = { q2: "want-buy", q3: "with-pro" }
      } else if (resultParam === "cycle") {
        answers = { q2: "want-lease", q3: "consult" }
      }

      // 結果を表示
      showResult()

      // スムーズスクロールを無効化して即座に表示
      setTimeout(() => {
        const resultContainer = document.querySelector(".result-container")
        if (resultContainer) {
          resultContainer.scrollIntoView({ behavior: "auto", block: "start" })
        }
      }, 100)
    }
  }

  // ページ読み込み時に結果パラメータをチェック
  checkUrlForResult()

  // パフォーマンス最適化: 画像の遅延読み込み
  function lazyLoadImages() {
    if ("loading" in HTMLImageElement.prototype) {
      // ブラウザがネイティブの遅延読み込みをサポートしている場合
      document.querySelectorAll('img[loading="lazy"]').forEach((img) => {
        if (img.dataset.src) {
          img.src = img.dataset.src
        }
      })
    } else {
      // IntersectionObserverを使用したフォールバック
      if ("IntersectionObserver" in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const image = entry.target
              if (image.dataset.src) {
                image.src = image.dataset.src
                image.removeAttribute("data-src")
              }
              observer.unobserve(image)
            }
          })
        })

        document.querySelectorAll('img[loading="lazy"]').forEach((image) => {
          imageObserver.observe(image)
        })
      }
    }
  }

  // 画像の遅延読み込みを実行
  lazyLoadImages()

  // タッチデバイスの検出
  function isTouchDevice() {
    return "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0
  }

  // タッチデバイスの場合、ホバーエフェクトを調整
  if (isTouchDevice()) {
    document.body.classList.add("touch-device")
  }
})
