---
layout: default
title: トップページ
---

<section class="max-w-xl mx-auto py-12 px-6">
  <h1 class="text-2xl font-bold mb-6">どちらの空間を育てますか？</h1>
  <div class="flex flex-col gap-4 mb-10">
    <a href="/rental.html" class="block bg-[#2a382f] text-white text-center py-3 rounded hover:bg-[#3a4a3f] transition">育てる空間（賃貸）</a>
    <a href="/design.html" class="block bg-white border border-[#2a382f] text-center py-3 rounded hover:bg-[#f0eee8] transition">つくる空間（設計）</a>
  </div>

  <div class="text-sm text-center text-[#555]">
    どちらが合っているか、簡単な質問でチェックしてみませんか？
  </div>
  <div class="mt-4 text-center">
    <button id="start-quiz" class="underline text-sm text-[#2a382f] hover:text-[#4a5a4f]">YES / NO診断してみる</button>
  </div>

  <div id="quiz-container" class="hidden mt-6 bg-white border border-[#2a382f] rounded p-4">
    <p id="quiz-question" class="mb-4 font-semibold"></p>
    <div class="flex gap-4">
      <button id="quiz-option-1" class="flex-1 bg-[#2a382f] text-white py-2 rounded"></button>
      <button id="quiz-option-2" class="flex-1 border border-[#2a382f] text-[#2a382f] py-2 rounded bg-[#f9f8f4]"></button>
    </div>
    <div id="quiz-result" class="mt-6 hidden">
      <p class="font-bold mb-3">あなたにおすすめなのは…</p>
      <a id="result-link" href="#" class="block bg-[#2a382f] text-white text-center py-3 rounded hover:bg-[#3a4a3f] transition">こちら</a>
    </div>
  </div>
</section>

<script>
const startQuiz = document.getElementById("start-quiz");
const quizContainer = document.getElementById("quiz-container");
const questionText = document.getElementById("quiz-question");
const option1 = document.getElementById("quiz-option-1");
const option2 = document.getElementById("quiz-option-2");
const result = document.getElementById("quiz-result");
const resultLink = document.getElementById("result-link");

let currentStep = 0;
let answers = [];

const questions = [
  {
    text: "1. 現在、お住まいはどちらですか？",
    options: ["貸し家", "持ち家"]
  },
  {
    text: "2. これからの住まい探しでは、賃貸と購入のどちらをお考えですか？",
    options: ["家を借りたい", "家を購入したい"]
  },
  {
    text: "3. 住まいのデザインは…自分で楽しみながらやりたいですか？それともプロと一緒に作りたいですか？",
    options: ["DIYなど、自分で自由に手を加えたい", "プロと一緒に進めたい"]
  }
];

function showQuestion(step) {
  questionText.textContent = questions[step].text;
  option1.textContent = questions[step].options[0];
  option2.textContent = questions[step].options[1];
}

function showResult() {
  const [q1, q2, q3] = answers;
  if (q1 === "持ち家" || q2 === "家を購入したい") {
    resultLink.href = "/design.html";
    resultLink.textContent = "つくる空間（設計）へ";
  } else {
    resultLink.href = "/rental.html";
    resultLink.textContent = "育てる空間（賃貸）へ";
  }
  result.classList.remove("hidden");
}

option1.addEventListener("click", () => {
  answers.push(option1.textContent);
  currentStep++;
  if (currentStep < questions.length) {
    showQuestion(currentStep);
  } else {
    questionText.textContent = "診断結果はこちら";
    option1.classList.add("hidden");
    option2.classList.add("hidden");
    showResult();
  }
});

option2.addEventListener("click", () => {
  answers.push(option2.textContent);
  currentStep++;
  if (currentStep < questions.length) {
    showQuestion(currentStep);
  } else {
    questionText.textContent = "診断結果はこちら";
    option1.classList.add("hidden");
    option2.classList.add("hidden");
    showResult();
  }
});

startQuiz.addEventListener("click", () => {
  quizContainer.classList.remove("hidden");
  currentStep = 0;
  answers = [];
  option1.classList.remove("hidden");
  option2.classList.remove("hidden");
  result.classList.add("hidden");
  showQuestion(currentStep);
});
</script>
