// モバイルメニューの開閉
document.getElementById('menuButton').addEventListener('click', function() {
  // 実際の実装ではここにモバイルメニューを表示するコードを追加
  alert('モバイルメニューが開きます');
});

// タグフィルター
document.addEventListener('DOMContentLoaded', function() {
  const filterButtons = document.querySelectorAll('.tag-filter__button');
  const journalCards = document.querySelectorAll('.journal-card');

  filterButtons.forEach(button => {
    button.addEventListener('click', function() {
      // アクティブクラスの切り替え
      filterButtons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');

      const tag = this.getAttribute('data-tag');

      // カードのフィルタリング
      journalCards.forEach(card => {
        if (tag === 'all' || card.getAttribute('data-tag') === tag) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
});
