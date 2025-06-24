document.addEventListener('DOMContentLoaded', () => {

    // スクロールアニメーションの設定
    const animationTargets = document.querySelectorAll('.scroll-animation');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // isIntersectingプロパティで、要素がビューポートに入ったか判定
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                // 一度表示されたら、監視を解除して負荷を減らす
                observer.unobserve(entry.target);
            }
        });
    }, {
        rootMargin: '0px', // ビューポートの境界を調整
        threshold: 0.1 // 要素が10%見えたらトリガー
    });

    // 各ターゲット要素の監視を開始
    animationTargets.forEach(target => {
        observer.observe(target);
    });

});