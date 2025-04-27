/**
 * 日本語タイピングアニメーション
 * ローマ字入力→ひらがな表示→漢字変換のプロセスを視覚化
 */
document.addEventListener("DOMContentLoaded", () => {
  // アニメーションを開始する要素
  const catchphraseElement = document.querySelector(".catchphrase")
  if (!catchphraseElement) return

  // タイピングシーケンスの定義
  const typingSequence = [
    // くらしを、
    { type: "romaji", text: "k", delay: 80 },
    { type: "romaji", text: "u", delay: 80 },
    { type: "kana", text: "く", delay: 150 },
    { type: "romaji", text: "r", delay: 80 },
    { type: "romaji", text: "a", delay: 80 },
    { type: "kana", text: "くら", delay: 150 },
    { type: "romaji", text: "s", delay: 80 },
    { type: "romaji", text: "h", delay: 80 },
    { type: "romaji", text: "i", delay: 80 },
    { type: "kana", text: "くらし", delay: 150 },
    { type: "romaji", text: "w", delay: 80 },
    { type: "romaji", text: "o", delay: 80 },
    { type: "kana", text: "くらしを", delay: 150 },
    { type: "symbol", text: "くらしを、", delay: 150 },
    { type: "pause", delay: 500 },
    { type: "convert", text: "暮らしを、", delay: 300 },

    // たがやす。
    { type: "romaji", text: "t", delay: 80 },
    { type: "romaji", text: "a", delay: 80 },
    { type: "kana", text: "暮らしを、た", delay: 150 },
    { type: "romaji", text: "g", delay: 80 },
    { type: "romaji", text: "a", delay: 80 },
    { type: "kana", text: "暮らしを、たが", delay: 150 },
    { type: "romaji", text: "y", delay: 80 },
    { type: "romaji", text: "a", delay: 80 },
    { type: "kana", text: "暮らしを、たがや", delay: 150 },
    { type: "romaji", text: "s", delay: 80 },
    { type: "romaji", text: "u", delay: 80 },
    { type: "kana", text: "暮らしを、たがやす", delay: 150 },
    { type: "pause", delay: 500 },
    { type: "convert", text: "暮らしを、耕す", delay: 300 },
    { type: "symbol", text: "暮らしを、耕す。", delay: 200 },
    { type: "complete", delay: 500 },
  ]

  // 初期状態
  const currentText = ""
  let displayText = ""
  let sequenceIndex = 0
  let isAnimating = true

  // カーソル要素の作成
  const cursorElement = document.createElement("span")
  cursorElement.className = "typing-cursor"
  catchphraseElement.appendChild(cursorElement)

  // アニメーションの実行
  function runTypingAnimation() {
    if (sequenceIndex >= typingSequence.length) {
      // アニメーション完了
      isAnimating = false
      return
    }

    const step = typingSequence[sequenceIndex]

    switch (step.type) {
      case "romaji":
        // ローマ字入力（表示しない、次のステップへ）
        sequenceIndex++
        setTimeout(runTypingAnimation, step.delay)
        break

      case "kana":
        // かな表示
        displayText = step.text
        updateDisplay()
        sequenceIndex++
        setTimeout(runTypingAnimation, step.delay)
        break

      case "symbol":
        // 記号表示
        displayText = step.text
        updateDisplay()
        sequenceIndex++
        setTimeout(runTypingAnimation, step.delay)
        break

      case "pause":
        // 一時停止
        sequenceIndex++
        setTimeout(runTypingAnimation, step.delay)
        break

      case "convert":
        // 漢字変換
        const tempElement = document.createElement("span")
        tempElement.className = "kanji-convert"
        tempElement.textContent = step.text

        // 現在のテキストをクリア
        catchphraseElement.textContent = ""

        // 新しいテキストを追加
        catchphraseElement.appendChild(tempElement)
        catchphraseElement.appendChild(cursorElement)

        displayText = step.text
        sequenceIndex++
        setTimeout(runTypingAnimation, step.delay)
        break

      case "complete":
        // アニメーション完了
        // カーソルを数秒間表示した後に非表示にする
        setTimeout(() => {
          cursorElement.style.display = "none"
        }, 2000)
        sequenceIndex++
        break
    }
  }

  // 表示を更新する関数
  function updateDisplay() {
    catchphraseElement.textContent = displayText
    catchphraseElement.appendChild(cursorElement)
  }

  // アニメーションの開始（ページ読み込み後少し遅延させる）
  setTimeout(() => {
    runTypingAnimation()
  }, 1000)
})
