export function shareBtn() {
  const shareBtn = document.getElementById("shareBtn");
  if (!shareBtn) return;
  shareBtn.addEventListener("click", () => {
    navigator.share({
      title: document.title,
      url: window.location.href,
    });
  });
}
